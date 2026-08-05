/*
  Service Worker — Dzienniczek Migren (Migrenownik)
  - cache'uje powłokę aplikacji (app shell) i ikony, żeby appka działała offline
  - cache'uje też skrypty CDN (React/Babel/Tailwind), żeby działały bez internetu
    po pierwszym uruchomieniu
  - strona główna (nawigacja) jest ładowana "network-first", żeby zawsze
    priorytetowo pokazywać najnowszą wersję, gdy jest internet
  - dane dziennika (localStorage) NIE są tu w ogóle dotykane — to osobny,
    prosty mechanizm przeglądarki, service worker zajmuje się wyłącznie plikami
*/

const CACHE_VERSION = "v2";
const CACHE_NAME = "migrenownik-cache-" + CACHE_VERSION;

// Pliki tej samej witryny — zawsze potrzebne, żeby appka w ogóle wystartowała.
const PRECACHE_SAME_ORIGIN = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./favicon-32.png",
];

// Zewnętrzne skrypty (CDN) — cache'owane najlepiej jak się da, żeby appka
// działała offline także po stronie React/Babel/Tailwind.
const PRECACHE_CDN = [
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "https://cdn.tailwindcss.com",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const sameOrigin = Promise.allSettled(
        PRECACHE_SAME_ORIGIN.map((url) => cache.add(url).catch(() => null))
      );
      const cdn = Promise.allSettled(
        PRECACHE_CDN.map((url) =>
          fetch(url, { mode: "cors" })
            .then((res) => (res && res.ok ? cache.put(url, res) : null))
            .catch(() => null)
        )
      );
      return Promise.all([sameOrigin, cdn]);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // Nawigacja (otwarcie/odświeżenie strony): najpierw sieć, offline -> cache.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html").then((cached) => cached || caches.match("./")))
    );
    return;
  }

  // Wszystko inne (ikony, manifest, skrypty CDN): najpierw cache,
  // a w tle odśwież kopię w cache na potrzeby kolejnego razu.
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
