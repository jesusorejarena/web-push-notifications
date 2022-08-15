import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
	apiKey: 'AIzaSyAJO-6IBBIVYdyHBMng1eDEfZMdWzCGwPk',
	authDomain: 'web-push-b0d38.firebaseapp.com',
	projectId: 'web-push-b0d38',
	storageBucket: 'web-push-b0d38.appspot.com',
	messagingSenderId: '452935542509',
	appId: '1:452935542509:web:7431303e4a3b8e6c214ee4',
	measurementId: 'G-XPZXT6WF0J',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
