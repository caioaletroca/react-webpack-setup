import ReactGA from 'react-ga';

//Constants
import Constants from 'constants/constants.jsx';

export default function reactGaLog({ getState }) {
	return next => action => {
		if(action.type == '@@router/LOCATION_CHANGE') {
			//Emit Analytic
			if(Constants.config.enableReactGa)
				ReactGA.pageview(action.payload.pathname);
		}

		return next(action);
	}
}