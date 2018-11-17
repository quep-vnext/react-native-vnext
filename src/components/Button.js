import React from 'react'
import {View, Text, TouchableOpacity, Dimensions} from 'react-native'
import styled from 'styled-components/native'

import {MediaQuery} from "react-native-responsive-ui";
import EStyleSheet from 'react-native-extended-stylesheet';
import { Col, Row, Grid } from "react-native-easy-grid";

const Button = () => {

    console.log(Dimensions.get('window').width);
    console.log(Dimensions.get('window').height);

    return (
        <TextView>
            <Grid>
                <Col>
                    <Text>
                        Column 1
                    </Text>
                </Col>
                <Col>
                    <Text>
                        Column 2
                    </Text>
                </Col>
            </Grid>

            <Text style={styles.textEditor}>
                Black White
            </Text>
            <TextButton>
                Click Me Up!!!
            </TextButton>

            <ModifiedButton backgroundColor={"red"}>
                Click Me Down!!!!
            </ModifiedButton>

            <ModifiedButton>
                Click me on No Color!!!!
            </ModifiedButton>

            <MediaQuery maxWidth={800}>
                <TouchableOpacityButton>
                    <Text>
                        TouchableOpacity!!!
                    </Text>
                </TouchableOpacityButton>
            </MediaQuery>
        </TextView>
    )
}

// define extended styles
const styles = EStyleSheet.create({
    textEditor: {
        backgroundColor: '#ffffff',                            // global variable $textColor
    },
    '@media (min-width: 400) and (max-width: 500) and (orientation: portrait)': { // media queries
        text: {
            color: 'white'
        }
    }
});

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
