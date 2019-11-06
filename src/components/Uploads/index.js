import React, { Component } from "react";
import { Formik } from "formik";
import validationSchema from "./validationSchema";
import FormField from "./FormField";

export default class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
		};
	}
	handleSubmit = value => {
		console.log(value);
	};
	render() {
		var { files } = this.state;
		return (
			<Formik
				initialValues={{ files }}
				validationSchema={validationSchema}
				onSubmit={this.handleSubmit}
			>
				{props => <FormField {...props} />}
			</Formik>
		);
	}
}
