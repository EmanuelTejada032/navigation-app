import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {


  return (
    <SafeAreaView>
      <View className="px-10">
        <Text className="text-4xl mb-4 text-primary mt-5">HomeScreen</Text>

        <CustomButton color="primary" className="mb-4" onPress={() => router.push('/products')}> Products </CustomButton>
        <CustomButton color="secondary" className="mb-4" onPress={() => router.push('/profile')}> Profile </CustomButton>
        <CustomButton color="tertiary" className="mb-4" onPress={() => router.push('/settings')}> Settings </CustomButton>
        
        <Link href='/products' asChild>
          <CustomButton variant="text-only" className="mb-4"> Products</CustomButton>
        </Link>

        {/* <Link className='text-2xl mb-5 text-secondary-200 font-mont-light' href={"/products"}> Products</Link>
        <Link className='text-2xl mb-5 text-secondary-200 font-mont-light' href={"/profile"}> Profile</Link>
        <Link className='text-2xl mb-5 text-secondary-200 font-mont-light' href={"/settings"}> Settings</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
