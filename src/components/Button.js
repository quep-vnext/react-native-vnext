import React from 'react'
import {View, Text, TouchableOpacity, Dimensions} from 'react-native'
import styled from 'styled-components/native'

import { MediaQuery } from "react-native-responsive";

const Button = () => {

    console.log(Dimensions.get('window').width);
    console.log(Dimensions.get('window').height);

    return (
        <TextView>
            <TextButton>
                Click Me Up!!!
            </TextButton>

            <ModifiedButton backgroundColor={"red"}>
                Click Me Down!!!!
            </ModifiedButton>

            <ModifiedButton>
                Click me on No Color!!!!
            </ModifiedButton>

            <MediaQuery minDeviceWidth={360} maxDeviceHeight={640}>
                <TouchableOpacityButton>
                    <Text>
                        TouchableOpacity!!!
                    </Text>
                </TouchableOpacityButton>
            </MediaQuery>
        </TextView>
    )
}

const TouchableOpacityButton = styled.TouchableOpacity`
        background-color: cyan;
    `

const TextView = styled.View`
        background-color: gray;
        width: 100%;       
    `

const TextButton = styled.Text`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: green;
        text-align:center;
        font-size: 10px;
    `

const ModifiedButton = styled(TextButton)`
        background-color: ${props => props.backgroundColor ? props.backgroundColor : "gray"};
        font-size: 20px;
  `
export default Button
