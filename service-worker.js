self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request));
});
// public/sw.js
self.addEventListener('push', function (event) {
    const data = event.data.json();
    self.registration.showNotification(data.notification.title, data.notification);
});

