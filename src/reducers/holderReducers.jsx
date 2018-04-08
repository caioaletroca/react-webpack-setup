import holderActionTypes from 'constants/holderActionTypes.jsx';

export function holder(state = '', action) {
	switch(action.type) {
		case holderActionTypes.HOLDER_ACTION:
			return action.data;
		default:
			return state;
	}
}