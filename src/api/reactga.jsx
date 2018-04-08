import React, { Component } from 'react';
import ReactGA from 'react-ga';

//Constants
import Constants from 'constants/constants.jsx';

//System
import { isDebug } from 'system/library.jsx';

export default class ReactGa extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.initialize();
	}

	initialize() {
		if(Constants.config.enableReactGa)
			ReactGA.initialize(Constants.googleGaApiKey, {
				debug: isDebug(),
			});
	}

	render() {
		return (
			<div {...this.props} />
		);
	}
}