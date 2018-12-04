import React from 'react'
import {View} from "react-native";
import {Text} from "react-native";

class HomeTab extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

export {HomeTab}