import {  useNavigation } from '@react-navigation/native';
import { setStatusBarTranslucent } from 'expo-status-bar';
import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, SafeAreaView } from 'react-native';


const HomeScreen =()=> {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Testing",
      headerShown: false,
    });
  }, []);

    //SafeAreaView instructions for android
    useLayoutEffect(() => {
      setStatusBarTranslucent(false);
    }, []);
  return (
  <SafeAreaView>
      <View className="bg-red-300 w-full flex justify-center items-center">
      <Text className="text-green-600">Home Screen1</Text>
    </View>
  </SafeAreaView>
  );
}

export default HomeScreen