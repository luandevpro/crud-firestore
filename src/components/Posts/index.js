import React, { Component } from "react";
import styled from "styled-components";

export default class Posts extends Component {
	render() {
		var { children } = this.props;
		return <PostWrapper>{children}</PostWrapper>;
	}
}

export const PostWrapper = styled.div`
	width: 90%;
	margin: 20px auto 0;
	display: flex;
`;
