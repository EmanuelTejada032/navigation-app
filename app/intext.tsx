import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const intext = () => {
  return (
    <SafeAreaView>
      <View className='mt-6 mx-3'>
        <Text className='text-3xl font-mont-bold'>Hello world text</Text>
        <Text className='text-4xl font-mont-black'>Hello world text</Text>
        <Text className='text-2xl font-mont-light'>Hello world text</Text>
        <Text className='text-xl font-mont-medium'>Hello world text</Text>
        <Text className='text-2xl'>Hello world text</Text>

      </View>
    </SafeAreaView>
  )
}

export default intext