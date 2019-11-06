import * as Types from "../constants/ActionTypes";

const appReducer = (state, action) => {
	switch (action.type) {
		case Types.EDIT_BIRD:
			return {
				...state,
				editBird: action.payload,
			};
		case Types.EDIT_BIRD_COMPLETE:
			return {
				...state,
				editBird: null,
			};
		default:
			return state;
	}
};

export default appReducer;
