import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, googleAuthProvider } from "../../config/firebase";

export default () => {
	return (
		<ButtonWrapper onClick={() => auth.signInWithPopup(googleAuthProvider)}>
			Login
		</ButtonWrapper>
	);
};

export const ButtonWrapper = styled(Button)`
	color: ${props => props.theme.secondaryColor} !important;
	height: 48px;
	margin: 12px 12px 0 0 !important;
`;
