self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request));
});
self.addEventListener('push', function (event) {
    const data = event.data?.json() || { title: "Default", body: "Push received" };

    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: 'icon-192.png'
        })
    );
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
