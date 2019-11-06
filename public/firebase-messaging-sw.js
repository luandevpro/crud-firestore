import firebase, { messaging } from "../src/config/firebase";
importScripts("https://www.gstatic.com/firebasejs/4.12.0/firebase-app.js");
importScripts(
	"https://www.gstatic.com/firebasejs/4.12.0/firebase-messaging.js"
);

let config = {
	messagingSenderId: "386703051739",
};

firebase.initializeApp(config);

messaging.setBackgroundMessageHandler(payload => {
	const title = payload.notification.title;
	console.log("payload", payload.notification.icon);
	const options = {
		body: payload.notification.body,
		icon: payload.notification.icon,
	};
	return self.registration.showNotification(title, options);
});
