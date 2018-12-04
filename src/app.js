import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'
import {Header} from './components'
import {LoginForm} from './component/LoginForm'
import {Spinner} from "./component/Spin";

import { HomeStack } from './Route'


export default class App extends Component {
	render() {
		console.log('!!!!');
		return(
			<HomeStack onNavigationStateChange={console.log('Navigation on Change')} uriPrefix="/app" />
		)
	}
}


/**
class App extends Component {

	state = {
		loggedIn: null
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
				console.log("Login");
			} else {
				this.setState({loggedIn: false})
				console.log("Logout")
			}
		})
	}

    onPressLogin() {

	}

	renderContent() {

		switch (this.state.loggedIn) {
			case true:
				return  <Button title="Logout" onPress={this.onPressLogin.bind(this)} />
			case false:
				return <LoginForm/>
			default:
				return <Spinner size="large" />

        }
	}

	render() {
		return (
			<View>
				<Header textHeader='Authentications' />
				{this.renderContent()}
			</View>
		)
	}
}

 **/

// export default App
