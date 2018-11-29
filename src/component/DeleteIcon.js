import React from 'react'
import {View, Text, Image, Platform} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const DeleteIcon = () => {
    return (
        <View>
            <Icon
                name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                color="#ccc"
                size={25}
            />
        </View>
    )
}

export {DeleteIcon}