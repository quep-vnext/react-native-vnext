import React, {Component} from "react";
import firebase from '@firebase/app'
import '@firebase/auth'
import {View, Button, Text, TextInput} from "react-native";
import {ButtonClick, Card, CardSection, Input} from "../components";
import {Spinner} from "./Spin";

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        error: "",
        loading: false
    };

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>
        }

        return (
            <Button title="Login" onPress={this.onPressClickButton.bind(this)}>
            </Button>
        )
    }

    onPressClickButton() {
        const {email, password} = this.state

        this.setState({error: '', loading: true})

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication Failed !!!'})
                    })
            });
    }

    render() {
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

                <Text style={{color: 'red'}}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

export {LoginForm}
