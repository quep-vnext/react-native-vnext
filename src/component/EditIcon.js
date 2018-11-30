import React from 'react'
import {View, Text, Image, Platform} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

const EditIcon = () => {
    return (
        <View style={styles.styleView}>
            <Icon
                name={Platform.OS === "ios" ? "pencil-square-o" : "pencil-square-o"}
                color="red"
                size={25}
            />
        </View>
    )
}

export {EditIcon}

const styles = {
    styleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}