import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

//Modules
import Page from 'components/modules/page.jsx';

//Pages
import HomePage from 'components/pages/homePage/homePage.jsx'

//Constants
import Constants from 'constants/constants.jsx';

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<Switch>
					<Page exact path={Constants.routes.index} component={HomePage} />
				</Switch>
			</div>
		);
	}
}