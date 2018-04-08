import { createBrowserHistory, createHashHistory } from 'history';

let history = createBrowserHistory();

if(process.env.NODE_ENV == 'cordova')
	history = createHashHistory();

export default history;