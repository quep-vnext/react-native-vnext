import React from 'react';
import {View, Text, Button} from 'react-native';

import HomeScreen from './Screen/Home'
import UserScreen from './Screen/User'
import DetailScreen from './Screen/Detail'
import MenuScreen from './Screen/Menu'

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
    }
);

export const HomeStack = createAppContainer(AppNavigator);