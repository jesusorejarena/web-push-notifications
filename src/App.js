import React, { useEffect } from 'react';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const loguearse = () => {
		signInAnonymously(getAuth()).then((usuario) => console.log(usuario));
	};

	const activateMessage = async () => {
		const token = await getToken(messaging, {
			vapidKey: 'BCAN0-pjaFE18V5gz54aQ-N5bLw3IJyvWs3en7RZc3xqHcd6KMHJivY8wpMUp_K_RPwZ4z7aj_2_PAcnjNe5dMI',
		}).catch((error) => console.log('Tuviste un error al generar un token'));

		if (token) console.log('tu token: ' + token);
		if (!token) console.log('No tienes token, rey');
	};

	useEffect(() => {
		onMessage(messaging, (message) => {
			console.log('Tu mensaje: ' + message);
			toast(message.notification.title);
		});
	}, []);

	return (
		<div>
			<ToastContainer />

			<button onClick={loguearse}>Loguearse</button>
			<button onClick={activateMessage}>Generar Token</button>
		</div>
	);
}

export default App;
