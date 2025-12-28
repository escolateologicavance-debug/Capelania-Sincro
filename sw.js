const CACHE_NAME = 'capelania-sincro-v1';

const FILES_TO_CACHE = [
  './',
  './index.html',
  './material.html',
  './manifest.json',
  './ícone-png.512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});