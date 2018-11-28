import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import {StackActions, NavigationActions} from 'react-navigation'

export default class Home extends Component{
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home</Text>

                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('DetailScreen')}
                />
            </View>
        )
    }
}