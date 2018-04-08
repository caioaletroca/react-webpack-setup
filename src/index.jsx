import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Components
import AppProvider from 'components/appProvider.jsx';

ReactDOM.render(
	<AppProvider />,
	document.getElementById('app')
);