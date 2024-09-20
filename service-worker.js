const CACHE_NAME = 'stopwatch-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/beep.mp3',
    '/service-worker-register.js',
    'link/about.html',
    'link/help.html',
    'link/soon.html',
    'link/timer.html',
    'link/todo list.html', // Pastikan nama file sesuai
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// Install Service Worker dan cache file yang diperlukan
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Ambil dari cache ketika offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
