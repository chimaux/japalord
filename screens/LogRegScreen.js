import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import LogingScreen from './LogingScreen'
import RegisterScreen from './RegisterScreen'




const LogRegScreen = ({route}) =>
{
  const {data}=route.params
  
 return  (
    <>
     {data == 'login'?<LogingScreen/>:<RegisterScreen/>}
    </>
  )
  
}
export default LogRegScreen