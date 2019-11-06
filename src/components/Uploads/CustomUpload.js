import React, { Fragment } from "react";
import { map } from "lodash";
import DropZone from "react-dropzone";
import firebase, { storage } from "../../config/firebase";

export default props => (
	<Fragment>
		<DropZone
			accept="video/*"
			onDrop={acceptedFiles => {
				if (acceptedFiles.length === 0) {
					return;
				}
				console.log(acceptedFiles);
				props.arrayHelpers.form.setFieldValue(
					"files",
					map(acceptedFiles, acceptedFiles => {
						var uploadTask = storage
							.ref("/user-image")
							.child(acceptedFiles.name)
							.put(acceptedFiles, {
								contentType: acceptedFiles.type,
							});
						uploadTask.on(
							"state_changed",
							function(snapshot) {
								var progress =
									(snapshot.bytesTransferred / snapshot.totalBytes) *
									100;
								console.log("Upload is " + progress + "% done");
								switch (snapshot.state) {
									case firebase.storage.TaskState.PAUSED: // or 'paused'
										console.log("Upload is paused");
										break;
									case firebase.storage.TaskState.PROGRESS:
										console.log(progress);
									case firebase.storage.TaskState.RUNNING: // or 'running'
										console.log("Upload is running", progress);
										break;
								}
							},
							function(error) {
								console.log(error);
							},
							function() {
								uploadTask.snapshot.ref
									.getDownloadURL()
									.then(function(downloadURL) {
										console.log("File available at", downloadURL);
									});
							}
						);
					})
				);
			}}
		>
			{() => <div>upload</div>}
		</DropZone>
		<div>
			{map(props.arrayHelpers.form.values.files, (img, index) => {
				if (img === undefined)
					return props.arrayHelpers.form.values.files.splice(index, 1);
				return (
					<div key={index}>
						<img src={img} alt="" />
						<button onClick={() => props.arrayHelpers.remove(index)}>
							delete
						</button>
					</div>
				);
			})}
		</div>
	</Fragment>
);
