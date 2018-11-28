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
			editBird: {
				id: null,
				name: "",
				weight: "",
				description: "",
			},
			loading: false,
			dispatchSignIn: action =>
				this.setState(state => signin(state, action)),
			dispatchBird: action => this.setState(state => bird(state, action)),
			dispatchEdit: action => this.setState(state => edit(state, action)),
		};
	}
	componentDidMount() {
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
							description: change.doc.data().description,
						};
						loadBird.push(newBird);
						dispatchBird({
							type: Types.GET_BIRD,
							payload: loadBird,
						});
					}
					if (change.type === "modified") {
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
				this.state.dispatchSignIn({
					type: Types.SIGNIN_GOOGLE,
					payload: pick(user, ["displayName", "uid", "photoURL", "email"]),
				});
			}
			this.setState({ loading: false });
		});
	}
	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>;
	}
}
