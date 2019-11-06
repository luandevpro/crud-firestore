import * as Types from "../constants/ActionTypes";

const appReducer = (state, action) => {
	switch (action.type) {
		case Types.SIGNIN_GOOGLE:
			return {
				...state,
				userCurrent: [action.payload],
			};
		default:
			return state;
	}
};

export default appReducer;
