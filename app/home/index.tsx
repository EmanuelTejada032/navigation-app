import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-4xl mb-4 text-primary mt-5">HomeScreen</Text>
        <Link className='text-2xl mb-5 text-secondary-200 font-mont-light' href={"/products"}> Products</Link>
        <Link className='text-2xl mb-5 text-secondary-200 font-mont-light' href={"/profile"}> Profile</Link>
        <Link className='text-2xl mb-5 text-secondary-200 font-mont-light' href={"/settings"}> Settings</Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
