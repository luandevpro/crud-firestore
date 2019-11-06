const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.createBirds = functions.firestore
	.document("birds/{birdId}")
	.onCreate(async (snap, context) => {
		var newValule = snap.data();
		const getAuthor = await admin.auth().getUser(newValule.userId);
		console.log(newValule);
		console.log(getAuthor);
		const getToken = [];
		var getTokenRef = await admin
			.firestore()
			.collection("users")
			.get();

		getTokenRef.forEach(function(doc) {
			console.log(doc.id, " => ", doc.data());
			getToken.push(doc.data().token);
			console.log(getToken);
		});
		Promise.all([getToken, getAuthor]).then(([tokens, author]) => {
			const payload = {
				notification: {
					title: "$GOOG up 1.43% on the day",
					body:
						"$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.",
					icon: "https://my-server/icon.png",
				},
			};
			console.log(`tokens : ${tokens}`);
			admin.messaging().sendToDevice(tokens, payload);
		});
	});

exports.updateBirds = functions.firestore
	.document("birds/{birdId}")
	.onUpdate((change, context) => {
		const newValue = change.after.data();
		const previousValue = change.before.data();
		console.log(newValue);
		console.log(previousValue);
	});
