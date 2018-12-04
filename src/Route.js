import React from 'react';
import {View, Text, Button} from 'react-native';

import HomeScreen from './Screen/Home'
import UserScreen from './Screen/User'
import DetailScreen from './Screen/Detail'
import MenuScreen from './Screen/Menu'
import {LogoTitle} from './components/LogoTitle'

import {createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import {HomeTab} from "./Tab/HomeTab";
import {SettingTab} from "./Tab/SettingTab";

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeTab },
    Settings: { screen: SettingTab },
});

/*const AppNavigator = createStackNavigator(
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
);*/

const HomeStack = createAppContainer(TabNavigator);
export {HomeStack}