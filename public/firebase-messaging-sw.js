/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js');

const firebaseConfig = {
	apiKey: 'AIzaSyAJO-6IBBIVYdyHBMng1eDEfZMdWzCGwPk',
	authDomain: 'web-push-b0d38.firebaseapp.com',
	projectId: 'web-push-b0d38',
	storageBucket: 'web-push-b0d38.appspot.com',
	messagingSenderId: '452935542509',
	appId: '1:452935542509:web:7431303e4a3b8e6c214ee4',
	measurementId: 'G-XPZXT6WF0J',
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage((payload) => {
	console.log('Recibiste mensaje mientras estabas ausente...');
	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: '/logo192.png',
	};

	return self.registration.showNotification(notificationTitle, notificationOptions);
});
