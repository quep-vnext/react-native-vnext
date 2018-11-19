import React from 'react'
import {TextInput, Text, View} from 'react-native'

const Input = ({label, value, onChangeText, placeholder}) => {

    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

const styles={
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 4,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        alignItems: 'center'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row'
    }
}

export {Input}