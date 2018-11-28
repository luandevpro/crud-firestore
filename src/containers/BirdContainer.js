import React, { Component } from "react";
import Bird from "../components/Posts/Bird";
import { Context } from "../contexts";

export default class BirdContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return <Bird birds={value.birds} dispatchEdit={value.dispatchEdit} />;
	}
}
