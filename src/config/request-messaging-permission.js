import { messaging, firestore } from "./firebase";

export const askForPermissioToReceiveNotifications = user => {
	messaging
		.requestPermission()
		.then(() => {
			return messaging.getToken();
		})
		.then(token => {
			console.log(token);
			return firestore
				.collection("users")
				.doc(user.uid)
				.update({ token });
		})
		.catch(err => console.log(err));
};
