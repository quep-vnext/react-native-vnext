import React from "react";
import { TextInput, Text, View } from "react-native";

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,
        backgroundColor: "white"
    },
    labelStyle: {
        fontSize: 15,
        paddingLeft: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: "row", 
        justifyContent: "center",
        alignItems: "center"
    }
};

export { Input };