import React from 'react'
import { Text, View } from 'react-native'

const ContadorScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>
      <Text style={{textAlign: "center", fontSize: 40, position: 'relative', top: -100}}>
contador
      </Text>
    </View>
  )
}

export default ContadorScreen
