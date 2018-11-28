import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
} from "@material-ui/core";
import BirdItem from "./BirdItem";

function Bird({ birds, dispatchEdit }) {
	return (
		<BirdWrapper>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name of Bird</TableCell>
							<TableCell numeric>Weight</TableCell>
							<TableCell numeric>Description</TableCell>
							<TableCell numeric>User</TableCell>
							<TableCell numeric>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{map(birds, bird => (
							<TableRow key={bird.id}>
								<BirdItem
									bird={bird}
									id={bird.id}
									dispatchEdit={dispatchEdit}
								/>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		</BirdWrapper>
	);
}

export default Bird;

export const BirdWrapper = styled.div`
	flex-grow: 1;
	margin-left: 5px;
`;
