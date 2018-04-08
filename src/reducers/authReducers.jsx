import authActionTypes from 'constants/authActionTypes.jsx';

export function token(state = null, action) {
	switch(action.type) {
		case authActionTypes.SET_TOKEN:
			return action.token;
		default:
			return state;
	}
}

export function remember(state = false, action) {
	switch(action.type) {
		case authActionTypes.SET_REMEMBER:
			return action.state;
		default:
			return state;
	}
}