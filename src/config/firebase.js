import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyA3YA_n9QOnMeGQz1vFN5e_skPK8Mu1zlQ",
	authDomain: "crud-firebase-22ad1.firebaseapp.com",
	databaseURL: "https://crud-firebase-22ad1.firebaseio.com",
	projectId: "crud-firebase-22ad1",
	storageBucket: "crud-firebase-22ad1.appspot.com",
	messagingSenderId: "386703051739",
};
firebase.initializeApp(config);

firebase.firestore().settings({
	timestampsInSnapshots: true,
});
export default firebase;

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
