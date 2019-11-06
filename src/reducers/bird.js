import * as Types from "../constants/ActionTypes";
import { findIndex } from "lodash";

const appReducer = (state, action) => {
	switch (action.type) {
		case Types.GET_BIRD:
			return {
				...state,
				birds: action.payload,
			};
		case Types.DELETE_BIRD:
			const index = findIndex(
				state.birds,
				bird => bird.id === action.payload
			);
			if (index !== -1) {
				var birds = state.birds.splice(index, 1);
				return {
					...birds,
				};
			}
			return state;
		case Types.UPDATE_BIRD_COMPLETE:
			const indexUpdate = findIndex(
				state.birds,
				bird => bird.id === action.payload.id
			);
			if (indexUpdate !== -1) {
				state.birds[indexUpdate] = action.payload;
			}
			console.log(indexUpdate);
			console.log(action.payload);
			return { ...state };
		default:
			return state;
	}
};

export default appReducer;
