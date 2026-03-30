// Service Worker for offline support and caching
const CACHE_NAME = 'posti-tracker-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Service Worker: Cache created');
        return cache.addAll(urlsToCache).catch(err => {
          console.warn('Cache addAll error (non-critical):', err);
        });
      })
      .catch(err => console.error('Service Worker: Cache error:', err))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('✅ Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if available
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Cache GET requests for CDN resources
            if (event.request.method === 'GET' && 
                (event.request.url.includes('cdn.') || event.request.url.includes('gstatic.'))) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(err => {
            console.warn('Network request failed:', err);
            // Return offline page or cached response
            return caches.match('/index.html');
          });
      })
  );
});
