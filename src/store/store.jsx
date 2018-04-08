import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

//Middlewares
import reactGaLog from 'middlewares/reactAnalytics.jsx';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Reducers
import rootReducers from 'reducers/reducers.jsx';

//System
import history from 'system/history.jsx';

//DevTools
let composeEnhancers = compose;

//Middlewares List
const middlewares = [
	routerMiddleware(history),
	thunk,
	reactGaLog,
]

if(process.env.NODE_ENV == 'development') {
	//Logger
	middlewares.push(logger);

	//DevTools
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

let store = createStore(
	rootReducers,
	undefined,
	composeEnhancers(
		applyMiddleware(...middlewares)
	)	
);

export default store;