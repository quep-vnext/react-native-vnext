import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import {StackActions, NavigationActions, HeaderBackButton} from 'react-navigation'

import {LogoTitle} from "../components/LogoTitle";

import Swipeout from 'react-native-swipeout';
import {AppConfig} from './../global'

//Import Component
import {DeleteIcon} from "../component/DeleteIcon";
import {EditIcon} from "../component/EditIcon";

export default class Home extends Component{

    static navigationOptions= {
        headerTitle: <LogoTitle/>,
        headerLeft: <View />,
        headerRight: (
            <View>
                <Button title="Info" onPress={() => console.log("Click Info")} />
            </View>
        ),
    };



    render() {
        // Buttons
        let swipeoutBtns = [
            {
                component: <DeleteIcon />,
                onPress: () => {
                    console.log('Click ')
                },
                backgroundColor: 'blue'
            },
            {
                component: <EditIcon />,
                onPress: () => {
                    console.log('Click ')
                },
                backgroundColor: 'green'
            }
        ]

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

                <View style={styles.containerView}>
                    <Swipeout right={swipeoutBtns}>
                        <View style={styles.swipeoutView}>
                            <Text  style={styles.textView}>Swipe me left</Text>
                        </View>
                    </Swipeout>
                </View>
                <View style={styles.containerView}>
                    <Swipeout right={swipeoutBtns}>
                        <View style={styles.swipeoutView}>
                            <Text style={styles.textView}>Swipe me left</Text>
                        </View>
                    </Swipeout>
                </View>
            </View>
        )
    }
}
const styles = {
    buttonTitle: {
        color: "red"
    },
    containerView: {
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        borderTop: 1,
        borderBottom: 1,
    },
    swipeoutView: {
        height: 60,
        borderWidth: 1,
        borderColor: '#13354e',
    },
    textView: {
        paddingLeft: 10,
        paddingRight: 10
    }

}