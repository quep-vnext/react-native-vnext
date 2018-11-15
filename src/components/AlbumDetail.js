import React from 'react'
import {View, Text, Image} from 'react-native'
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={styles.thumnailStyle}
                        source={{uri: props.album.thumbnail_image}}
                    />
                </View>
                <View>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
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