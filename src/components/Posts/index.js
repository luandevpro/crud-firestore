import React, { Component } from "react";
import styled from "styled-components";
import { askForPermissioToReceiveNotifications } from "../../config/request-messaging-permission";

export default class Posts extends Component {
	render() {
		var { children, userCurrent } = this.props;
		return (
			<PostWrapper>
				{children}

				<button
					onClick={
						userCurrent[0] &&
						askForPermissioToReceiveNotifications(userCurrent[0])
					}
				>
					Clique aqui para receber notificações
				</button>
			</PostWrapper>
		);
	}
}

export const PostWrapper = styled.div`
	width: 90%;
	margin: 20px auto 0;
	display: flex;
`;
