import React from 'react'
import {View} from "react-native";
import {Text} from "react-native";

class SettingTab extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

export {SettingTab}