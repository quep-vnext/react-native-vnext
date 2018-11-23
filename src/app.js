import React, {Component} from 'react'
import {View, Text} from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'
import {Header} from './components'
import {LoginForm} from './component/LoginForm'

class App extends Component {

	state = {
		loggedIn: false
	}

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyD0qrO9sx5fJOQpoT0kYG7vLNHgXnh9Ik4',
			authDomain: 'v-gadern.firebaseapp.com',
			databaseURL: 'https://v-gadern.firebaseio.com',
			projectId: 'v-gadern',
			storageBucket: 'v-gadern.appspot.com',
			messagingSenderId: '1027744237998'
		})

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({loggedIn: true})
				console.log(user);
			} else {
				this.setState({loggedIn: false})
			}
		})
	}

	render() {
		return (
			<View>
				<Header textHeader='Authentications' />
				<LoginForm />
			</View>
		)
	}
}

export default App