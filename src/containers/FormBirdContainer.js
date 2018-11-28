import React, { Component } from "react";
import FormBird from "../components/Posts/FormBird";
import { Context } from "../contexts";

export default class FormBirdContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return (
			<FormBird
				userCurrent={value.userCurrent}
				editBird={value.editBird}
				dispatchEdit={value.dispatchEdit}
			/>
		);
	}
}
