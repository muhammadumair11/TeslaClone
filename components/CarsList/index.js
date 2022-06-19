import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import carsData from './carsData'
import CarItem from '../CarItem'
import Header from '../Header/index'

const CarsList = () => {
  return (
    <View style={{width: "100%", height: "100%"}}>
        <Header/>
        <FlatList
            data={carsData}
            renderItem={({item}) => <CarItem car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={"start"}
            decelerationRate="fast"
            snapToInterval={Dimensions.get("screen").height}
        />
    </View>
  )
}

export default CarsList