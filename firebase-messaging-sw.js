importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyDfurYNBAcywjd5w4q07TDeta542dZ_lgs",
    authDomain: "bigdeal-60a02.firebaseapp.com",
    projectId: "bigdeal-60a02",
    storageBucket: "bigdeal-60a02.firebasestorage.app",
    messagingSenderId: "721494038678",
    appId: "1:721494038678:web:11a83bb80fca06f0058ab7",
    measurementId: "G-W6CDW2Y339"
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
