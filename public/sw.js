const CACHE_NAME = 'palette-flavors-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './pwa-192.png',
  './pwa-256.png',
  './pwa-512.png',
  './icon_192.png',
  './icon_256.png',
  './icon_512.png',
  './apple-touch-icon.png',
  './icon.svg',
  './favicon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Ignore chrome-extension or dev-server internal URLs
  if (event.request.url.startsWith('chrome-extension') || event.request.url.includes('__aistudio')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Try background refresh if online
        if (navigator.onLine) {
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
              }
            })
            .catch(() => {});
        }
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html').then((r) => r || caches.match('/index.html') || caches.match('./'));
          }
        });
    })
  );
});
