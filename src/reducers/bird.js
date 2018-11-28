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
			var index = findIndex(state.birds, bird => bird.id === action.payload);
			if (index !== -1) {
				var birds = state.birds.splice(index, 1);
				return {
					...birds,
				};
			}
			return state;
		default:
			return state;
	}
};

export default appReducer;
