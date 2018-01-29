var cacheName = 'shell-content';
var filesToCache = [
  '/',
  './index.html',
  './about/index.html',
  './portfolio/index.html',
  './contact/index.html',
  './favicon.png',
  './logo.png',
  './src/img/profile-photo.jpg'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
        console.log(event.request.url);
        event.respondWith(
        caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
        })   
    );  
});