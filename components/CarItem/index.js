import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from "./style"
import StyledButton from '../StyledButton/index'
import style from '../StyledButton/style'


const CarItem = (props) => {

  const {title, subTitle, image } = props.car

  return (
    <View style={styles.carContainer}>

        {/* Background Image */}

        <ImageBackground 
          source={image} 
          style={styles.bgImage}
        />


        {/* Titles */}
        <View style={styles.titles}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>

        <View style={styles.buttonContainer}>
          {
            [
              {
                content: "Custom Order",
                onPress: () => console.warn(this.content),
                type: "primary"
              },
              {
                content: "Existing Inventory was Pressed",
                onPress: () => console.warn(this.content),
                type: "secondary"
              },
            ].map((item, index) => (
              <StyledButton key={index} type={item.type} content={item.content} onPress={item.onPress}/>
            ))
          }
        </View>

      </View>
  )
}

export default CarItem