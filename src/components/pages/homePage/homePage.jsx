import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import Holder from 'actions/holderActions.jsx';

class HomePage extends Component {
	componentDidMount() {
		this.props.Holder.holderAction('this is a placeholder');
	}

	render() {
		return (
			<p>Hello World!!!</p>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		
	}
}

const mapDispatchToProps = dispatch => {
	return {
		Holder: {
			holderAction: data => dispatch(Holder.holderAction(data)),
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);