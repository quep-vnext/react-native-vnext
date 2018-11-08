/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import { Text, AppRegistry } from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/header';


const App = () => {
    return (
        <Header />
    );
};

AppRegistry.registerComponent(appName, () => App);



