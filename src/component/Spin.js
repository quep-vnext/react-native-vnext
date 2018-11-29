import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import styled from 'styled-components'

const Spinner = ({size}) => {
    return (
        <View>
            <ActivityIndicatorStyled size={size || 'large'} />
        </View>
    )
}


const ActivityIndicatorStyled = styled.ActivityIndicator`
  color: red;
  justify-content: center;
  align-items: center;
`

export {Spinner}