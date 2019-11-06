import React from "react";
import { Form, FieldArray } from "formik";
import CustomUpload from "./CustomUpload";

export default () => (
	<Form>
		<FieldArray
			name="files"
			render={arrayHelpers => <CustomUpload arrayHelpers={arrayHelpers} />}
		/>
	</Form>
);
