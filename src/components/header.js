import React from 'react';
import { Text, AppRegistry } from 'react-native';

const Header = () => {
    const { textStyle } = styles
    return <Text style={ textStyle }>Album!</Text>;
};

const styles = {
    textStyle: {
        fontSize: 20
    }
}

export default Header
