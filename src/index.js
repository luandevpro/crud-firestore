import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AppContext from "./AppContext";
import { theme } from "./config/theme";
import LoginContainer from "./containers/LoginContainer";
import NavbarContainer from "./containers/NavbarContainer";
import ProfileContainer from "./containers/ProfileContainer";
import PostContainer from "./containers/PostContainer";
import FormBirdContainer from "./containers/FormBirdContainer";
import BirdContainer from "./containers/BirdContainer";
import UploadContainer from "./containers/UploadContainer";
import * as serviceWorker from "./serviceWorker";
import { messaging } from "./config/firebase";

const GlobalStyle = createGlobalStyle`
   body {
      margin: ${props => props.theme.body.margin};
      padding: ${props => props.theme.body.padding};
   }
`;
class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<AppContext>
					<GlobalStyle />
					<NavbarContainer>
						<LoginContainer />
						<ProfileContainer />
					</NavbarContainer>
					<PostContainer>
						<FormBirdContainer />
						<BirdContainer />
					</PostContainer>
					{/* <UploadContainer /> */}
				</AppContext>
			</ThemeProvider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
messaging.onMessage(function(payload) {
	console.log("Message received. ", payload);
});
