import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'

const Button = () => {
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

            <TouchableOpacityButton>
                <Text>
                    TouchableOpacity!!!
                </Text>
            </TouchableOpacityButton>
        </TextView>
    )
}

const TouchableOpacityButton = styled.TouchableOpacity`
        display: none;
    `

const TextView = styled.View`
        background-color: gray;
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
