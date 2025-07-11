import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import "./global.css";

import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {


  const [fontsLoaded, error] = useFonts({
      'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Thin': require('../assets/fonts/Montserrat-Thin.ttf'),
  })

  useEffect( () => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();

  },[fontsLoaded, error])

  if(!fontsLoaded && !error )return null;

  return <Slot/>
}

export default RootLayout