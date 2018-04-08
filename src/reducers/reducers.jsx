import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import sessionStorage from 'redux-persist/lib/storage/session'
import { persistCombineReducers } from 'redux-persist';
import { hardSet } from 'redux-persist/lib/stateReconciler/hardSet';
import { routerReducer } from 'react-router-redux';

//Reducers
import { holder } from 'reducers/holderReducers.jsx';
import { token, remember } from 'reducers/authReducers.jsx';

const storageCache = {
	key: 'cache',
	storage: storage,
	stateReconciler: false,
}

const sessionCache = {
	key: 'session',
	storage: sessionStorage,
}

export default combineReducers({
	cache: persistCombineReducers(storageCache, {
		holder,

		//Auth
		token,
		remember,

		//Router System
		router: routerReducer,
	}),
	session: persistCombineReducers(sessionCache, {
		holder,

		//Auth
		token,
	}),
});