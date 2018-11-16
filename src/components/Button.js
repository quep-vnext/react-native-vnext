import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = () => {
    return (
        <TouchableOpacity style={styles.clickButtonStyle}>
            <Text>
                Click Me Up!!!!!
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    clickButtonStyle: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff'
    }
}

export default Button

