import { Redirect } from 'expo-router'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

const intext = () => {
    return <Redirect href={'/home'} />
  // return (
  //   <SafeAreaView>
  //     <View className='mt-6 mx-3 '>
  //       <Text className='text-3xl text-primary font-mont-bold'>Hello world text</Text>
  //       <Text className='text-4xl text-secondary-100 font-mont-black'>Hello world text</Text>
  //       <Text className='text-2xl text-secondary-200 font-mont-light'>Hello world text</Text>
  //       <Text className='text-xl text-tertiary font-mont-medium'>Hello world text</Text>
  //       <Text className='text-2xl'>Hello world text</Text>
  //       <Link href='/products'>
  //         Products
  //       </Link>  
  //     </View>
  //   </SafeAreaView>
  // )
}

export default intext