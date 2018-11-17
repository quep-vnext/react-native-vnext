import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

const ButtonClick = () => {
	const {ButtonStyle, TextStyle} = styles
	return (
		<TouchableOpacity style={ButtonStyle}>
			<Text style={TextStyle}>
				Click Me!!!
			</Text>
		</TouchableOpacity>
	)
}

const styles = {
	ButtonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	TextStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
}

export default ButtonClick