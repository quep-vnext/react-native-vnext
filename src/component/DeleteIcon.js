import React from 'react'
import {View, Text, Image, Platform} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

const DeleteIcon = () => {
    return (
        <View style={styles.styleView}>
            <Icon
                name={Platform.OS === "ios" ? "trash-o" : "trash-o"}
                color="red"
                size={25}
            />
        </View>
    )
}

export {DeleteIcon}

const styles = {
    styleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
}