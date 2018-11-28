
import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'

export default class Detail extends Component{
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Detail Screen</Text>

                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('DetailScreen')}
                />
                <Button
                    color="red"
                    title="Go to Home Screen"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}