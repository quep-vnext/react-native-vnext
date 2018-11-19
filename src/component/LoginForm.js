import React, {Component} from 'react'
import {View, Button, Text, TextInput} from 'react-native'
import {ButtonClick, Card, CardSection} from '../components'

class LoginForm extends Component {
    state = {
        text: ''
    }

    render() {
        console.log('Login Form');
        return (
            <Card>
                <CardSection>
                    <TextInput
                        style={{height: 40, flex: 1, borderColor: 'gray', backgroundColor: 'white', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </CardSection>

                <CardSection>
                    <Text>Login</Text>
                </CardSection>
            </Card>
        )
    }
}

export {LoginForm}