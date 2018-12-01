import React from 'react';
import {View, Text, Button} from 'react-native';

import HomeScreen from './Screen/Home'
import UserScreen from './Screen/User'
import DetailScreen from './Screen/Detail'
import MenuScreen from './Screen/Menu'
import {LogoTitle} from './components/LogoTitle'

import {createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        },
        UserScreen: {
            screen: UserScreen
        },
        DetailScreen: {
            screen: DetailScreen
        },
        MenuScreen: {
            screen: MenuScreen
        }
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTitleStyle: {
                color: "white",
                textAlign:"center",
                flex:1
            },
            // headerLeft: <HeaderBackButton tintColor={'white'} onPress={() => goBack() }/>,
            headerTintColor: 'white',
        },
    }
);

const HomeStack = createAppContainer(AppNavigator);
export {HomeStack}