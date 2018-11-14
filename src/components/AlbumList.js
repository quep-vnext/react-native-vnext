import React, {Component} from 'react'
import { View, Text } from 'react-native'

class AlbumList extends Component{
    componentWillMount() {
        console.log('ComponentWillMount in AlbumList');
        let a = 2;
        console.log(this);
    }

    render() {
        return (
            <View>
                <Text>
                    Here Album List!!!!
                </Text>
            </View>
        )
    }
}

export default AlbumList