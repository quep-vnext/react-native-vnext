import React from 'react'
import {View, Text, Image, Linking} from 'react-native'
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import ButtonClick from './ButtonClick'

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri: image}} />
            </CardSection>

            <CardSection>
                <ButtonClick onPressF={() => {console.log(url); return Linking.openURL(url);} } />
            </CardSection>
        </Card>
    )
}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

}

export default AlbumDetail