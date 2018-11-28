import React, { Component } from "react";
import styled from "styled-components";
import { IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default class Navbar extends Component {
	render() {
		var { userCurrent, children } = this.props;
		return (
			<AppBarWrapper>
				<LogoWrapper>
					<IconButtonWrapper>
						<MenuIconWrapper />
					</IconButtonWrapper>
					<TypographyWrapper>Airbnb</TypographyWrapper>
				</LogoWrapper>
				{userCurrent ? children[1] : children[0]}
			</AppBarWrapper>
		);
	}
}

export const AppBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	background: ${props => props.theme.primaryColor};
`;

export const LogoWrapper = styled.div`
	display: flex;
`;
export const IconButtonWrapper = styled(IconButton)`
	height: 48px;
	margin: 12px 0 0 12px !important;
`;
export const MenuIconWrapper = styled(MenuIcon)`
	color: ${props => props.theme.secondaryColor};
`;

export const TypographyWrapper = styled(Typography)`
	line-height: 70px !important;
	color: white !important;
	font-size: 22px !important;
	font-weight: bold;
	margin-left: 12px !important;
`;
