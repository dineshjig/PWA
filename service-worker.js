self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request));
});
self.addEventListener('push', function (event) {
    const data = event.data.json();
    event.waitUntil(
        self.registration.showNotification(data.notification.title, {
            body: data.notification.body,
            icon: data.notification.icon
        })
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
