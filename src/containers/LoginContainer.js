import React, { Component } from "react";
import Login from "../components/Users/Login";
import { Context } from "../contexts";

export default class LoginContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return <Login userCurrent={value.userCurrent} loading={value.loading} />;
	}
}
