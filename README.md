# react-webpack-setup

This is a basic [React](https://reactjs.org/) enviroment with [Redux](https://github.com/reactjs/react-redux) and [webpack](https://webpack.js.org/).

Features:

- Auth JWT support;
- [Cordova](https://cordova.apache.org/) build support;
- Route system with [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux).

## Installation

Download this repository, and run the commands:

```
npm update
npm run build:all
cordova platform add android
```

To generate android apk run:

```
npm run build:cordova android
```

## Development Hot Reload

You may use [webpack-dev-server](https://github.com/webpack/webpack-dev-server) for hot reload development:

```
npm run serve
```

To test you app on the device with cordova, plug you phone with USB debugging turned on, and run the command:

```
npm run serve:cordova android
```
