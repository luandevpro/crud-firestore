import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Context } from "../contexts";

export default class NavbarContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return (
			<Navbar userCurrent={value.userCurrent}>{this.props.children}</Navbar>
		);
	}
}
