import React, { Component } from "react";
import { Form, Field } from "formik";
import { Button } from "@material-ui/core";
import TextInput from "./TextInput";

export default class FormField extends Component {
	render() {
		return (
			<Form>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Field
						name="name"
						label="Name of bird"
						component={TextInput}
						width="48%"
					/>
					<Field
						name="weight"
						label="Weight of bird"
						component={TextInput}
						width="48%"
					/>
				</div>
				<Field
					name="description"
					label="Description of Bird"
					component={TextInput}
					width="100%"
					marginTop="20px"
				/>
				<Button
					variant="contained"
					color="primary"
					style={{ width: "100%", marginTop: "30px" }}
					type="submit"
				>
					{this.props.id ? "Update" : "Submit"}
				</Button>
			</Form>
		);
	}
}
