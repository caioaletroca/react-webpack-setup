import holderActionTypes from 'constants/holderActionTypes.jsx';

export default {
	holderAction(data) {
		return {
			type: holderActionTypes.HOLDER_ACTION,
			data,
		}
	},
}