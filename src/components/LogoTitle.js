import React from 'react'
import {Image, View, Text} from 'react-native'

const LogoTitle = () => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Image
                source={require('../resources/images/spiro.png')}
                style={{ width: 20, height: 20 }}
            />
        </View>
    );
}

export {LogoTitle}