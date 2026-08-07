/*
  Service Worker migracyjny — root panimigrena.pl

  Wcześniej Migrenownik działał bezpośrednio pod "/", więc część
  urządzeń mogła zarejestrować service workera o zasięgu "/".
  Aplikacja przeniosła się teraz do "/migrenownik/", gdzie ma
  własnego, docelowego service workera.

  Ten plik ma jedno zadanie: wyrejestrować starą, "osieroconą"
  rejestrację o zasięgu "/", żeby nie przechwytywała już ruchu
  do nowej strony powitalnej. Dane w localStorage NIE są tu
  w ogóle dotykane — pozostają nietknięte pod tym samym originem.

  Ten plik można bezpiecznie usunąć po kilku tygodniach, gdy
  wszystkie stare rejestracje się już wygaszą.
*/

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Sprzątamy stare cache z poprzedniej wersji appki na "/"
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      // Wyrejestrowujemy się — od teraz "/" nie ma żadnego service workera
      await self.registration.unregister();

      // Odświeżamy otwarte karty, żeby od razu zobaczyły nową stronę
      const clientsList = await self.clients.matchAll({ type: "window" });
      clientsList.forEach((client) => client.navigate(client.url));
    })()
  );
});
