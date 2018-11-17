import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header} from './components'

import firebase from 'firebase'

class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyD0qrO9sx5fJOQpoT0kYG7vLNHgXnh9Ik4",
			authDomain: "v-gadern.firebaseapp.com",
			databaseURL: "https://v-gadern.firebaseio.com",
			projectId: "v-gadern",
			storageBucket: "v-gadern.appspot.com",
			messagingSenderId: "1027744237998"
		})
	}
	render() {
		return (
			<View>
				<Header textHeader="Authentication" />
			</View>
		)
	}
}

export default App