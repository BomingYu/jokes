import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function LoadingComponent() {
  return (
    <View className='items-center space-y-3 mt-32 pb-48'>
      <Image source={require('./../../assets/images/loading.gif')} className='w-48 h-48'/>
      <Text style={styles.buttonBackground} className='text-white text-3xl font-bold p-4'>Loading Jokes...</Text>
    </View>
  )
}