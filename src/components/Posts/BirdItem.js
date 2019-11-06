import React, { Fragment } from "react";
import moment from "moment";
import { IconButton, Avatar, TableCell } from "@material-ui/core";
import { MdCreate, MdDelete } from "react-icons/md";
import { firestore } from "../../config/firebase";
import * as Types from "../../constants/ActionTypes";

export default ({ bird, id, dispatchEdit, userCurrent }) => {
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
				{bird.timestamp && moment(bird.timestamp.toDate()).fromNow()}
			</TableCell>
			<TableCell numeric>
				{userCurrent[0] && userCurrent[0].uid === bird.userId ? (
					<IconButton onClick={() => handleUpdate(id)}>
						<MdCreate />
					</IconButton>
				) : null}
				{userCurrent[0] && userCurrent[0].uid === bird.userId ? (
					<IconButton onClick={() => handleDelete(id)}>
						<MdDelete />
					</IconButton>
				) : null}
			</TableCell>
		</Fragment>
	);
};
