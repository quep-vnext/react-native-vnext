import React from 'react'
import {View} from 'react-native'

const CardSection = (props) => {
    console.log('Hello world');
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    )
}

const style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ffc369',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CardSection