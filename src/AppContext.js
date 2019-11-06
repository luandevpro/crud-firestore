import React, { Component } from "react";
import { pick } from "lodash";
import { Provider } from "./contexts";
import { signin, bird, edit } from "./reducers";
import { auth } from "./config/firebase";
import * as Types from "./constants/ActionTypes";
import { firestore } from "./config/firebase";

export default class AppContext extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userCurrent: [],
			birds: [],
			editBird: null,
			loading: false,
			dispatchSignIn: action =>
				this.setState(state => signin(state, action)),
			dispatchBird: action => this.setState(state => bird(state, action)),
			dispatchEdit: action => this.setState(state => edit(state, action)),
		};
	}
	async componentDidMount() {
		var loadBird = [];
		this.setState({ loading: true });
		var { dispatchBird } = this.state;
		firestore
			.collection("birds")
			.orderBy("timestamp", "asc")
			.onSnapshot(function(snapshot) {
				snapshot.docChanges().forEach(function(change) {
					if (change.type === "added") {
						var newBird = {
							id: change.doc.id,
							name: change.doc.data().name,
							weight: change.doc.data().weight,
							userId: change.doc.data().userId,
							description: change.doc.data().description,
							timestamp: change.doc.data().timestamp,
						};
						loadBird.push(newBird);
						dispatchBird({
							type: Types.GET_BIRD,
							payload: loadBird,
						});
					}
					if (change.type === "modified") {
						var newBirdUpdate = {
							id: change.doc.id,
							name: change.doc.data().name,
							weight: change.doc.data().weight,
							userId: change.doc.data().userId,
							description: change.doc.data().description,
							timestamp: change.doc.data().timestamp,
						};
						dispatchBird({
							type: Types.UPDATE_BIRD_COMPLETE,
							payload: newBirdUpdate,
						});
						console.log("Modified city: ", change.doc.data());
					}
					if (change.type === "removed") {
						dispatchBird({
							type: Types.DELETE_BIRD,
							payload: change.doc.id,
						});
						console.log("Removed city: ", change.doc.data());
					}
				});
			});
		auth.onAuthStateChanged(user => {
			if (user) {
				const users = pick(user, [
					"displayName",
					"uid",
					"photoURL",
					"email",
				]);
				firestore
					.collection("users")
					.doc(users.uid)
					.set(pick(user, ["displayName", "uid", "photoURL", "email"]));
				this.state.dispatchSignIn({
					type: Types.SIGNIN_GOOGLE,
					payload: users,
				});
			}
			this.setState({ loading: false });
		});
	}
	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>;
	}
}
