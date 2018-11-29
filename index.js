/** @format */

import React from 'react'
import {Text, View, AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import App from './src/app'

AppRegistry.registerComponent(appName, () => App)
