import React, {Component} from 'react'
import {View, Text} from 'react-native'
// import * as firebase from 'firebase'
import {Header} from './components'
import {LoginForm} from './component/LoginForm'

class App extends Component {

	// componentWillMount() {
	// 	firebase.initializeApp({
	// 		apiKey: "AIzaSyD0qrO9sx5fJOQpoT0kYG7vLNHgXnh9Ik4",
	// 		authDomain: "v-gadern.firebaseapp.com",
	// 		databaseURL: "https://v-gadern.firebaseio.com",
	// 		projectId: "v-gadern",
	// 		storageBucket: "v-gadern.appspot.com",
	// 		messagingSenderId: "1027744237998"
	// 	})
	// }

	render() {
		return (
			<View>
				<Header textHeader="Authentications" />
				<LoginForm />
			</View>
		)
	}
}

export default App