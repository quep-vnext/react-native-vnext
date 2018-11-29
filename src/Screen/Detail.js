
import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import {HeaderBackButton} from "react-navigation";

export default class Detail extends Component{
    static navigationOptions = ({ navigation }) => {
        let goBack = navigation.goBack;
        if (navigation.state.params.onGoBack) {
            goBack = navigation.state.params.onGoBack;
        }
        return {
            title: navigation.getParam('otherParam', 'Details'),
            headerRight: (<View />),
        }
    }

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        console.log(navigation);
        console.log(itemId);
        console.log(otherParam);


        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('DetailScreen', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Update the title"
                    onPress={() =>
                        this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
                <Button
                    title="Go to Home"
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