const CACHE_NAME = "tecnojogos-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./manifest.json",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  // Adicione os caminhos dos jogos
  "./jogos/hexa-click/index.html",
  "./jogos/hexa-click/style.css",
  "./jogos/hexa-click/script.js",
  "./jogos/codigo-rgb/index.html",
  "./jogos/codigo-rgb/style.css",
  "./jogos/codigo-rgb/script.js",
  "./jogos/binario-rapido/index.html",
  "./jogos/binario-rapido/style.css",
  "./jogos/binario-rapido/script.js",
  "./jogos/monte-seu-pc/index.html",
  "./jogos/monte-seu-pc/style.css",
  "./jogos/monte-seu-pc/script.js",
  "./jogos/sistema-ou-software/index.html",
  "./jogos/sistema-ou-software/style.css",
  "./jogos/sistema-ou-software/script.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
