/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);

import React from 'react'
import {Text, View, AppRegistry} from 'react-native'
import {name as appName} from './app.json'

import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App = () => {
	return (
		<View>
            <Header textHeader={'Albums List!!!'} />
			<AlbumList />
		</View>
	)
}
AppRegistry.registerComponent(appName, () => App)