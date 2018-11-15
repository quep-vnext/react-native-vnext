import React from 'react'
import {View, Text, Image} from 'react-native'
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image} = album
    const {thumnailStyle, headerContentStyle} = styles
    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={thumnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumnailStyle: {
        width: 50,
        height: 50
    }
}

export default AlbumDetail