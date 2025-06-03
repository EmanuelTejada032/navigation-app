import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
  return <Stack>
            <Stack.Screen
                name='home/index'
                options={{
                    title:'Home'
                }
                }
            />
             <Stack.Screen
                name='products/index'
                options={{
                    title:'Products',
                    animation:'ios_from_right'
                }
                }
            />
             <Stack.Screen
                name='profile/index'
                options={{
                    title:'Profile',
                    animation:'ios_from_right'
                }
                }
            />
             <Stack.Screen
                name='settings/index'
                options={{
                    title:'Settings'
                }
                }
            />
        </Stack>
}

export default StackLayout