import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import {StackActions, NavigationActions, HeaderBackButton} from 'react-navigation'

import {LogoTitle} from "../components/LogoTitle";

export default class Home extends Component{
    static navigationOptions= {
        title: "Home",
    }

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>

                <Button
                    title="Go to Details"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        this.props.navigation.navigate('DetailScreen', {
                            itemId: 86,
                            otherParam: 'Detail',
                        });
                    }}
                />
            </View>
        )
    }
}