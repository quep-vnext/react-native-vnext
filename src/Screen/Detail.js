
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
            </View>
        )
    }
}