import React, {Component} from 'react'
import {View, Button, Text, TextInput} from 'react-native'
import {ButtonClick, Card, CardSection} from '../components'

class LoginForm extends Component {
	render() {
		console.log('Login Form');
		return (
			<Card>
				<CardSection>
					<TextInput style={{height: 20, width: 100}} />
				</CardSection>

				<CardSection>
					<Text>Login</Text>
				</CardSection>
			</Card>
		)
	}
}

export {LoginForm}