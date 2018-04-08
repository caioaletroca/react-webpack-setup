import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { persistStore } from 'redux-persist';

//Api
import ReactGa from 'api/reactga.jsx';

//System
import history from 'system/history.jsx';

//Store
import store from 'store/store.jsx';

//Components
import App from 'components/app.jsx';

export function AppLoadingScreen(props) {
	return (
		<div className='loading'>Loading</div>
	);
}

export default class AppProvider extends Component {
	state = {
		rehydrated: false,
	}

	componentWillMount() {
		persistStore(store, null, () => {
			this.setState({ rehydrated: true });

			if(store.getState().cache.remember) {
				store.dispatch(Auth.setToken(store.getState().cache.token));
			}
		});
	}

	render() {
		if(!this.state.rehydrated)
			return <AppLoadingScreen />
		else
			return (
				<ReactGa>
					<Provider store={store}>
						<ConnectedRouter history={history}>
							<App />
						</ConnectedRouter>
					</Provider>
				</ReactGa>
			);
	}
}