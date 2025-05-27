importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
});

const messaging = firebase.messaging();

messaging.getToken({ vapidKey: "BM4l1mPwS-g-utVPXRaL3MYLr-HTeDXtCiWVF_eocpvSUOoWfiJVDoH-VI1LStzI_CT_SsgowxTK1I-ZeedbLoA	" })
    .then((token) => {
        if (token) {
            console.log("FCM Token:", token);
            // Save to your Firebase DB if needed
        } else {
            console.log("No token received.");
        }
    }).catch((err) => {
        console.error("Error getting FCM token", err);
    });

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
