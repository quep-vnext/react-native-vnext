import React, {Component} from 'react'
import {View, Button, Text, TextInput} from 'react-native'
import {ButtonClick, Card, CardSection, Input} from '../components'

class LoginForm extends Component {
    state = {
        text: ''
    }

    render() {
        console.log('Login Form');
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        onChangeText={text => this.setState({text})}
                        value={this.state.text}
                    />
                </CardSection>

                <CardSection>
                    {/*<Button*/}
                        {/*icon={{*/}
                            {/*name: 'arrow-right',*/}
                            {/*size: 15,*/}
                            {/*color: 'white'*/}
                        {/*}}*/}
                        {/*title='Login'*/}
                    {/*/>*/}
                </CardSection>
            </Card>
        )
    }
}

export {LoginForm}