import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component{

    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
            response => {
                this.setState({ albums: response.data }
                )
            }
        )
    }

    renderAlbums() {
        console.log(this.state);
        return (
            this.state.albums.map(
                (album, index) => {
                    return <AlbumDetail key={index} album = {album} />
                }
            )
        )
    }

    
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                { this.renderAlbums() }
            </ScrollView>
        )
    }
}

export {AlbumList}