import { View, Text, Pressable } from 'react-native'
import React from 'react'
import style from './style'

const StyledButton = (props) => {

    const {type, content, onPress} = props

    const backgroundColor = type === "secondary" ?  "white" : "#171a20cc";
    const color = type === "secondary" ? "#171a20cc": "white" 
    

  return (
    <View style={style.container}>
        <Pressable
            style={[style.button, {backgroundColor}]}
            onPress={() => onPress()}
        >
            <Text style={[style.text, {color}]}>{content}</Text>
        </Pressable>
    </View>
  )
}

export default StyledButton