import authActionTypes from 'constants/authActionTypes.jsx';

//Api
import Server from 'api/server.jsx';

//Constants
import Constants from 'constants/constants.jsx';

export default {
	//Token
	setToken(token) {
		return {
			type: authActionTypes.SET_TOKEN,
			token,
		}
	},

	//Remember
	setRemember(state) {
		return {
			type: authActionTypes.SET_REMEMBER,
			state,
		}
	},
}