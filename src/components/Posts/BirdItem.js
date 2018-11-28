import React, { Fragment } from "react";
import { IconButton, Avatar, TableCell } from "@material-ui/core";
import { MdCreate, MdDelete } from "react-icons/md";
import { firestore } from "../../config/firebase";
import * as Types from "../../constants/ActionTypes";

export default ({ bird, id, dispatchEdit }) => {
	const handleDelete = id => {
		firestore
			.collection("birds")
			.doc(id)
			.delete()
			.then(() => console.log("Delete successs"));
	};
	const handleUpdate = id => {
		firestore
			.collection("birds")
			.doc(id)
			.get()
			.then(res => {
				var payload = {
					id,
					name: res.data().name,
					weight: res.data().weight,
					description: res.data().description,
				};
				dispatchEdit({
					type: Types.EDIT_BIRD,
					payload,
				});
			});
	};
	return (
		<Fragment>
			<TableCell component="th" scope="row">
				{bird.name}
			</TableCell>
			<TableCell numeric>{bird.weight}</TableCell>
			<TableCell numeric>{bird.description}</TableCell>
			<TableCell numeric>
				<Avatar alt="Remy Sharp" src={bird.photoURL} />
			</TableCell>
			<TableCell numeric>
				<IconButton onClick={() => handleUpdate(id)}>
					<MdCreate />
				</IconButton>
				<IconButton onClick={() => handleDelete(id)}>
					<MdDelete />
				</IconButton>
			</TableCell>
		</Fragment>
	);
};
