import React, { Component } from "react";
import { Profile } from "../components/Users";
import { Context } from "../contexts";

export default class ProfileContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return <Profile userCurrent={value.userCurrent} />;
	}
}
