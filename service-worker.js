self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request));
});



const publicVapidKey = 'BIX9A1JSRdHvUb9pbI9U7sTNiGHgwiZowbcodfqc0rGoZoInoPCGIg2mIJAn5KeY_2fVIZzgQ-CxVXv67fXK06s';

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.register('http://localhost:3000/service-worker.js', {
            scope: '/',
        });

        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        });

        await fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return registration;
    } else {
        console.error('Service workers are not supported in this browser.');
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i)
        outputArray[i] = rawData.charCodeAt(i);

    return outputArray;
}

registerServiceWorker();



self.addEventListener('push', (event) => {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: '/icon.png', // Replace with your icon path
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
