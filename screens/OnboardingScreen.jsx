import { useNavigation } from "@react-navigation/native";
import { setStatusBarTranslucent, StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState, useEffect } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./HomeScreen";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const colors = {
  primary: "#901142",
  title: "white",
};
const buttonLabel = (label) => {
  return (
    <View className="p-4">
      <Text className="text-white font-bold text-lg">{label}</Text>
    </View>
  );
};
const slides = [
  {
    id: "1",
    image: require("../images/onboardImage1.png"),
    title: "EasyJapa Chat",
    subtitle:
      "Ask every of your travel concerns, connect with amazing others that have successfully relocated and those who intends to Japa",
  },
  {
    id: "2",
    image: require("../images/onboardImage2.png"),
    title: "EasyJapa HotUpdate",
    subtitle:
      "Access all our helpful contents and information to Japa. Don’t miss out on the latest relocation news and updates",
  },
  {
    id: "3",
    image: require("../images/onboardImage3.png"),
    title: "EasyJapa Reward",
    subtitle:
      "Tell your friends and family about EasyJapa App, collect points and redeem for cash and gifts",
  },
];

const Slide = ({ item }) => {
  return (
    <ScrollView>
      <View className="bg-[#6E002B] ">
        <View className="mx-auto">
          <Image
            source={item.image}
            className="mt-4  w-[90vw] h-[250px]"
            style={{ resizeMode: "contain" }}
            // contentContainerStyle={{height:height * 0.75,width}}
          />
        </View>

        <LinearGradient
          className="flex-1"
          colors={["rgba(26, 27, 28,0)", "rgba(26, 27, 28,1)"]}
          locations={[0, 0.8]}
        >
          <View>
            <View className="flex items-center pt-20 ">
              <Text className="text-white opacity-80 font-bold text-2xl">
                {item.title}
              </Text>
              <Text className="text-white opacity-80  text-center p-4 text-lg">
                {item.subtitle}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View className="w-full h-[500px] bg-[#1A1B1C] absolute top-[490px] -z-10"></View>
    </ScrollView>
  );
};
const OnboardingScreen = () => {
  useLayoutEffect(() => {
    setStatusBarTranslucent(false);
  }, []);

  const [showHomePage, setShowHomePage] = useState(false);
  const navigation = useNavigation();
  if (!showHomePage) {
    return (
      <SafeAreaView className="flex-1   bg-[#1A1B1C]">
        <View className="flex-1  ">
          {/* <StatusBar className="bg-[#6E002B]" /> */}

          <AppIntroSlider
            data={slides}
            renderItem={({ item }) => <Slide item={item} />}
            activeDotStyle={{
              backgroundColor: colors.primary,
              width: 30,
            }}
            showSkipButton
            renderNextButton={() => buttonLabel("Next")}
            renderSkipButton={() => buttonLabel("Skip")}
            // renderDoneButton={()=> buttonLabel("Lets Go")}
            onDone={() => {
              setShowHomePage(true);
            }}
          />
         
        </View>
       
      </SafeAreaView>
    );
  }
  // if(showHomePage){
  return <HomeScreen />;
  //  }
};

export default OnboardingScreen;
