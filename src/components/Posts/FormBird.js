import React, { Component } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import FormField from "./FormField";
import firebase, { firestore } from "../../config/firebase";
import * as Types from "../../constants/ActionTypes";

class FormBird extends Component {
	constructor(props) {
		super(props);
		this.firestoreRef = firestore.collection("birds");
		this.state = {
			id: null,
			name: "",
			weight: "",
			timestamp: null,
			description: "",
		};
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps && nextProps.editBird) {
			var { id, name, weight, description } = nextProps.editBird;
			return {
				id,
				name,
				weight,
				description,
			};
		}
		return null;
	}
	handleSubmit = (values, { resetForm }) => {
		if (this.state.id) {
			console.log(values);
			this.firestoreRef.doc(values.id).update({
				name: values.name,
				weight: values.weight,
				description: values.description,
			});
			this.props.dispatchEdit({
				type: Types.EDIT_BIRD_COMPLETE,
			});
			this.setState({
				id: null,
				name: "",
				weight: "",
				description: "",
			});
			resetForm({
				id: null,
				name: "",
				weight: "",
				description: "",
			});
		} else {
			this.firestoreRef
				.add({
					name: values.name,
					weight: values.weight,
					description: values.description,
					userId: this.props.userCurrent[0].uid,
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.then(data => console.log(data))
				.catch(error => console.log(error));
			resetForm({
				name: "",
				weight: "",
				description: "",
				id: null,
			});
		}
	};
	render() {
		var { name, weight, description, id } = this.state;
		return (
			<FormBirdWrapper>
				<Formik
					enableReinitialize={true}
					initialValues={{ name, weight, description, id }}
					onSubmit={this.handleSubmit}
				>
					{props => <FormField {...props} id={id} />}
				</Formik>
			</FormBirdWrapper>
		);
	}
}

export const FormBirdWrapper = styled.div`
	width: 400px;
	margin-right: 5px;
`;

export default FormBird;
