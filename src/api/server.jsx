//Constants
import Constants from 'constants/constants.jsx';

//Api
import FormData from 'form-data';

//Store
import store from 'store/store.jsx';

const Server = {
	get: function(url) {
		return fetch(Constants.api + url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		}).then(response => {
			return response.json();
		});
	},

	post: function(url, data, file) {
		return fetch(Constants.api + url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token: store.getState().session.token,
				data: data,
			}),
		}).then(response => {
			return response.json();
		});
	},

	put: function(url, data) {
		return fetch(Constants.api + url, {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token: store.getState().session.token,
				data: data,
			}),
		}).then(response => {
			return response.json();
		});
	},

	delete: function(url, data) {
		return fetch(Constants.api + url, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token: store.getState().session.token,
				data: data,
			}),
		}).then(response => {
			return response.json();
		});
	},

	sendFile: function(url, data) {
		var form = new FormData();

		for(var key in data)
			form.append(key, data[key]);

		form.append('token', store.getState().session.token);

		return fetch(Constants.api + url, {
			method: 'POST',
			body: form,
		}).then(response => {
			return response.json();
		});
	},
}

export default Server;