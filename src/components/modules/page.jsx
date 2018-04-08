import React, { Component, propTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Constants
import Constants from 'constants/constants.jsx';

class Page extends Component {
	static defaultProps = {
		redirect: Constants.routes.index,
	}

	middlewares = {
		auth: () => {
			return this.props.token !== null ? true : false;
		},
		guest: () => {
			return !this.middlewares.auth();
		},
	}

	runMiddleware() {
		for(var i in this.props.middleware)
			if(!this.middlewares[this.props.middleware[i]]())
				return false;

		return true;
	}

	render() {
		if(this.runMiddleware())
			return <Route {...this.props} />;
		else
			return <Redirect to={this.props.redirect} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		token: state.session.token,
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);