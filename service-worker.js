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

const CACHE_VERSION = "v3";
const CACHE_NAME = "migrenownik-cache-" + CACHE_VERSION;

// Wszystkie pliki appki są teraz lokalne (własny hosting) — bez CDN,
// więc appka nie zależy od dostępności zewnętrznych serwerów przy starcie.
const PRECACHE_SAME_ORIGIN = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./favicon-32.png",
  "./app.css",
  "./app.min.js",
  "./react.min.js",
  "./react-dom.min.js",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        PRECACHE_SAME_ORIGIN.map((url) => cache.add(url).catch(() => null))
      )
    )
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
