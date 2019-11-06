import React from "react";
import styled from "styled-components";

export default ({ userCurrent }) => {
	return (
		<ProfileWrapper>
			<Image
				src={userCurrent[0].photoURL}
				alt={userCurrent[0].displayName}
			/>
		</ProfileWrapper>
	);
};

export const ProfileWrapper = styled.div`
	margin: 12px 12px 0 0;
	&:hover {
		border-bottom: 3px solid black;
	}
`;
export const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;
