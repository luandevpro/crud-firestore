import React from "react";
import { TextField } from "@material-ui/core";

export default props => {
	return (
		<TextField
			id="input-with-icon-grid"
			label={props.label}
			name={props.name}
			style={{ width: props.width, marginTop: props.marginTop }}
			{...props.field}
		/>
	);
};
