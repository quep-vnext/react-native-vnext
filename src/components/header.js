import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle } = styles
    return (
        <View>
            <Text style={ textStyle }>Album! Hello!!!!</Text>
        </View>
    );
};

console.log('hello world');

const styles = {
    textStyle: {
        fontSize: 20
    }
};

export default Header