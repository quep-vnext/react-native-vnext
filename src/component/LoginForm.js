import React, {Component} from 'react'
import {View, Button, Text, TextInput} from 'react-native'
import {ButtonClick, Card, CardSection, Input} from '../components'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        console.log('Login Form');
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="Email Input here!!"
                        label="Email"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="Password Input here!!"
                        label="Password"
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
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