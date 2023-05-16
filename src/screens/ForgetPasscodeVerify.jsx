import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
  import React, { useContext } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { GlobalContext } from "../../Context";
  
  import OtpBox from "../components/OtpBox";
  import Button1 from "../components/Button1";
  import { LinearGradient } from "expo-linear-gradient";
  import GobackBTN from "../components/GobackBTN";
  
  
  const ForgetPasscodeVerify = () => {
    const { dominantColor } = useContext(GlobalContext);
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    
  
    const emailFunction = (email) => {
      if (email.includes("@gmail.com")) {
        const splitEmail = email.replace(/@gmail.com/, "");
        const numSplit = Math.floor(splitEmail.length / 2);
        const sliceMe = splitEmail.slice(0, numSplit);
        const newEmail = `${sliceMe}*****@gmail.com`;
        return newEmail;
      } else if (email.includes("@yahoo.com")) {
        const splitEmail = email.replace(/@yahoo.com/, "");
        const numSplit = Math.floor(splitEmail.length / 2);
        const sliceMe = splitEmail.slice(0, numSplit);
        const newEmail = `${sliceMe}*****@yahoo.com`;
        return newEmail;
      }
    };
  
    return (
      <View className={`relative bg-red-800 `}
      style={{ height:screenHeight}}
      >
        <SafeAreaView
          style={{
            backgroundColor: dominantColor,
          }}
        />
        {/* background fix starts here */}
        <View className={` bg-[${dominantColor}]`}
        style={{ height:screenHeight/2}}
        ></View>
        <View className="bg-[#1A1B1C] "
        style={{ height:screenHeight/2}}
        ></View>
        {/* background fix ends here */}
        <ScrollView 
        className="absolute top-0 bottom-0 right-0 left-0"
        contentContainerStyle={{ height: screenHeight, backgroundColor:dominantColor }}>
  <View className="ml-6 mt-12">
    <GobackBTN />
  </View>
       
  
          <Text className="text-center text-white text-4xl font-bold tracking-wider my-10">
            Check your email
          </Text>
          <Text className="text-center text-white text-2xl tracking-wider">
            We’ve sent a code to
          </Text>
  
          <Text className="my-2 mx-auto text-center text-white text-xl tracking-wider">
            {emailFunction("chima@yahoo.com")}
          </Text>
  
          <LinearGradient
            className="flex-1 "
            colors={["rgba(26, 27, 28,0.01)", "rgba(26, 27, 28,1)"]}
            locations={[0, 0.5]}
          >
            <View className="my-12 flex-row  justify-center">
              <OtpBox />
              <OtpBox />
              <OtpBox />
              <OtpBox />
            </View>
  
            <View className="mx-4">
              <Button1
                buttonProps={{
                  fontBold: "bold",
                  title: "Change Password",
                  backgroundColor: "#bd0d50",
                  color: "white",
                }}
              />
            </View>
  
            <Text className="text-center text-[#dcdada] my-8 text-xl">Send code again 00:20</Text>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  };
  
  export default ForgetPasscodeVerify;
  