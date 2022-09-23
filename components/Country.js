import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Country({country}) {
  return (
    <View>
      <Text>Country Name </Text>
      <Text>{country.name.official}</Text>
      <Image style={{width: 200, height: 200}}
       source={{
           uri:country.flags.png
       }}
       ></Image>
    </View>
  )
}