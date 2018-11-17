import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header} from './components'

class App extends Component {
	render() {
		return (
			<View>
				<Header textHeader="Authentication" />
			</View>
		)
	}
}

export default App