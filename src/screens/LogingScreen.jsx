import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import InputField from "../components/InputField";
import * as Icons from "react-native-heroicons/solid";
import Button1 from "../components/Button1";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalContext } from "../../Context";
const imageEye = { img: require("../images/eyeIcon1.png") };

function LogingScreen() {
  const { setPageData } = useContext(GlobalContext);

  // EMAIL STATE
  const [email, setEmail] = useState("");

  // PASSWORD STATE
  const [password, setPassword] = useState("");
  const [securePass, setSecurePass] = useState(true);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
  };
  const navigation = useNavigation();

  // RETRIEVE EMAIL AND PASSWORD FROM LOCALS STARTS HERE
  const getData = async () => {
    try {
      const value1 = await AsyncStorage.getItem("email");
      const value2 = await AsyncStorage.getItem("password");
      console.log(value1, value2, "chichi");
      if (value1 !== null && value2 !== null) {
        setEmail(value1);
        setPassword(value2);
        console.log(value1, value2, "chichi");
      }
    } catch (e) {
      Alert.alert("Message", `${e}`);
    }
  };
  // RETRIEVE EMAIL AND PASSWORD FROM LOCALS ENDS HERE
  useEffect(() => {
    getData();
  }, []);
  // ACTIVITY INDICATOR
  const [loading, setLoading] = useState(null);

  const loginUser = async () => {
    setLoading(true);
    try {
      const getResponse = await axios.post(
        "https://japa-app.onrender.com/api/v1/users/auths/login",
        {
          email,
          password,
        }
      );

      const userData = getResponse;
      if (userData.data.status === true) {
        // console.log(userData.data);
        // const singleUser = userData.data.user;
        const singleUser = userData.data;

        // NOTE STARTS HERE
        // userData.data.accessTokenData ====> object
        // {accessToken,expiresIn}
        // userData.data.refreshTokenData ====> object
        // {refreshToken,expiresIn}
        // userData.data.user ====> object
        // {
        //   "createdAt",
        //   "email",
        //   "emailVerified",
        //   "id",
        //   "name",
        //   "phoneNumber",
        //   "provider": "local",
        //   "role": "public_user",
        //   "updatedAt",
        // }
        // userData.data.message
        // userData.data.status
        // NOTE ENDS HERE

        setEmail("");
        setPassword("");
        // SAVE PASSWORD TO LOCAL STORAGE STARTS HERE
        const storeData = async (v1, v2) => {
          try {
            await AsyncStorage.setItem("email", v1);
            await AsyncStorage.setItem("password", v2);
          } catch (e) {
            Alert.alert("Error", "Remember me malfunctioned");
          }
        };
        // SAVE PASSWORD TO LOCAL STORAGE ENDS HERE

        if (isEnabled === true) {
          storeData(email, password);
        }
        Alert.alert("Login successful", "", [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("BottomTab");
              setPageData(singleUser);
            },
          },
        ]);
      }
    } catch (e) {
      Alert.alert("Try again", e.message, [
        {
          text: "Ok",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#6e002b]">
      <ScrollView>
        <Text className="w-full text-center text-white text-4xl font-bold pt-20 pb-10 tracking-wider">
          Login
        </Text>

        <View className="px-4">
          <View
            className={`w-full mb-6  rounded`}
            style={{
              backgroundColor: "white",
            }}
          >
            <TextInput
              numberOfLines={1}
              placeholder="Enter your email"
              placeholderTextColor="#c5c5c5"
              value={email}
              onChangeText={(value) => setEmail(value)}
              className={` text-xl py-3 pl-4 pr-[50px] tracking-wider`}
            />
          </View>

          <View
            className={`relative w-full mb-4  rounded`}
            style={{
              backgroundColor: "white",
            }}
          >
            <TextInput
              numberOfLines={1}
              placeholder="Enter your password"
              secureTextEntry={securePass}
              placeholderTextColor="#c5c5c5"
              value={password}
              onChangeText={(value) => setPassword(value)}
              className={` text-xl py-3 pl-4 pr-[50px] tracking-wider`}
            />
            {securePass === true ? (
              <Pressable
                onPress={() => setSecurePass(false)}
                className="absolute right-[20px] top-[27%] h-[100%]"
              >
                <Image source={imageEye.img} className=" w-[20px] h-[20px]" />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSecurePass(true)}
                className="absolute right-[20px] top-[25%] h-[100%]"
              >
                <Ionicons
                  name="eye-outline"
                  size={24}
                  color="gray"
                  className=" w-[24px] h-[24px]"
                />
              </Pressable>
            )}
          </View>
          <View className="w-full my-4 space-y-2 sm:flex sm:flex-row sm:justify-between sm:items-center">
            <View className="space-x-2 flex flex-row">
              <Switch
                trackColor={{ false: "#c8c1c38a", true: "#bd0d50" }}
                ios_backgroundColor="#c8c1c38a"
                thumbColor="white"
                value={isEnabled}
                onValueChange={toggleSwitch}
              />

              <Text className="text-white text-lg tracking-wider">
                Remember me
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPasswordPage")}
            >
              <Text className="text-white text-lg tracking-wider">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <LinearGradient
          className="px-4 pb-8"
          colors={["rgba(26, 27, 28,0.01)", "rgba(26, 27, 28,1)"]}
          locations={[0, 0.5]}
        >
          <Button1
            buttonProps={{
              fontBold: "bold",
              title: "Login",
              pbottom: "my-6",
              backgroundColor: "#bd0d50",
              color: "white",
              functionExec: loginUser,
              loading: loading,
              boxShadow:
                "0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)",
            }}
          />

          <View className="flex-row items-center justify-between">
            <View className="w-[100px] border-b-2 border-white"></View>
            <Text className="text-white text-lg tracking-wider">
              Or login with{" "}
            </Text>
            <View className="w-[100px] border-b-2 border-white"></View>
          </View>

          <Button1
            buttonProps={{
              title: "Continue with Google",
              icon: <AntDesign name="google" size={28} color="#6e002b" />,
              pbottom: "my-6",
              backgroundColor: "white",
              color: "#6e002b",
            }}
          />

          <View className="flex flex-row space-x-2 mt-14">
            <Text className="text-white text-lg">Dont have an account?</Text>
            <TouchableOpacity
              onPress={
                () => navigation.navigate("Register")
                // navigation.navigate("LogRegScreen", { data: "reg" })
              }
            >
              <Text
                className=" text-lg text-[#6e002b]"
                style={{ fontWeight: "bold" }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View className="w-full h-[200px] bg-[#1A1B1C] absolute top-[810px] -z-10"></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LogingScreen;
