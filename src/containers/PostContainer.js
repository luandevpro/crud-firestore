import React, { Component } from "react";
import Posts from "../components/Posts";
import { Context } from "../contexts";

export default class PostContainer extends Component {
	static contextType = Context;
	render() {
		var value = this.context;
		return (
			<Posts userCurrent={value.userCurrent}>{this.props.children}</Posts>
		);
	}
}
