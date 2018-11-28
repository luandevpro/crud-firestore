import React, { Component } from "react";
import Posts from "../components/Posts";

export default class PostContainer extends Component {
	render() {
		return <Posts>{this.props.children}</Posts>;
	}
}
