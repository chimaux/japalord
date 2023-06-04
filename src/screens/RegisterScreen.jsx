import React, { useContext, useState } from "react";
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
} from "react-native";
import InputField from "../components/InputField";
import * as Icons from "react-native-heroicons/solid";
import Button1 from "../components/Button1";
import { AntDesign } from "@expo/vector-icons";

import { GlobalContext } from "../../Context";
import CountryPicker from "react-native-country-picker-modal";

import axios from "axios";

function RegisterScreen() {
  const image = { img: require("../images/close.png") };
  const [countryCode, setCountryCode] = useState("NG");
  const [callingCode, setCallingCode] = useState("+234");

  // NAME STATE
  const [name, setName] = useState("");

  // EMAIL STATE
  const [email, setEmail] = useState("");

  // PHONE STATE
  const [phoneNumber, setPhoneNumber] = useState("");

  // PASSWORD STATE
  const [password, setPassword] = useState("");

  // CONFIRM PASSWORD STATE
  const [confrimPassword, setConfirmPassword] = useState("");

  // ACTIVITY INDICATOR
  const [loading, setLoading] = useState(null);

  const base_url = "https://japa-app.onrender.com";
  const registerUser = async () => {
    let newNumber = phoneNumber;
    if (phoneNumber.startsWith(0)) {
      newNumber = phoneNumber.substring(1, phoneNumber.length);
    }
    const newNumber2 = `+${callingCode}${newNumber}`;
    setLoading(true);
    try {
      const getResponse = await axios.post(
        "https://japa-app.onrender.com/api/v1/users/auths/signup",
        {
          name,
          email,
          phoneNumber: newNumber2,
          password,
        }
      );
      if (getResponse.data.data.user) {
        console.log("chima", getResponse.data.data.user);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        Alert.alert(
          "Registration successful",
          "Verification code sent successfully, continue to verify your email",
          [
            {
              text: "Continue",
              onPress: () => {
                navigation.navigate("VerifyEmailScreen");
              },
            },
          ]
        );
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Try again", e.message, [
        {
          text: "Ok",
          // onPress: () => {
          //   navigation.navigate("VerifyEmailScreen");
          // },
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-[#6e002b]">
      <ScrollView>
        <Text className="w-full text-center text-white text-4xl font-bold pt-20 pb-10 tracking-wider">
          Signup
        </Text>

        <View className="px-4">
          {/* ENTER YOUR NAME STARTS HERE */}

          <View>
            <Text
              className="text-white text-xl pb-2 tracking-wide"
              style={{ fontWeight: "bold" }}
            >
              Name
            </Text>

            <View
              className={`w-full "mb-4"  rounded`}
              style={{
                backgroundColor: "white",
              }}
            >
              <TextInput
                numberOfLines={1}
                placeholder="Enter your name"
                placeholderTextColor="#c5c5c5"
                value={name}
                onChangeText={(value) => setName(value)}
                className={` text-xl py-3 px-4 tracking-wider`}
              />
            </View>
          </View>

          {/* ENTER YOUR NAME ENDS HERE */}

          {/* ENTER YOUR EMAIL STARTS HERE */}
          <View className="mt-[20px]">
            <Text
              className="text-white text-xl pb-2 tracking-wide"
              style={{ fontWeight: "bold" }}
            >
              Email
            </Text>

            <View
              className={`w-full "mb-4"  rounded`}
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
                className={` text-xl py-3 px-4 tracking-wider`}
              />
            </View>
          </View>
          {/* ENTER YOUR EMAIL ENDS HERE */}

          {/* ENTER YOUR PHONE NUMBER */}

          <View className="mt-[20px]">
            <Text
              className="text-white text-xl pb-2 tracking-wide"
              style={{ fontWeight: "bold" }}
            >
              Phone number
            </Text>

            <View className="flex-row">
              <View className="w-[24%] flex-row items-center justify-center bg-[#fff] rounded mr-[5px]">
                <CountryPicker
                  closeButtonStyle={{
                    paddingTop: -30,
                  }}
                  closeButtonImage={image.img}
                  countryCode={countryCode}
                  withCallingCode={true}
                  onSelect={(val) => {
                    setCountryCode(val.cca2);
                    setCallingCode(val.callingCode[0]);
                    console.log(val.callingCode[0]);
                  }}
                />
                <AntDesign name="down" size={24} color="#c5c5c5" />
              </View>
              <View
                className={`w-[76%] "mb-4"  rounded`}
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <TextInput
                  numberOfLines={1}
                  placeholder="Enter phone number"
                  placeholderTextColor="#c5c5c5"
                  value={phoneNumber}
                  onChangeText={(value) => setPhoneNumber(value)}
                  className={` text-xl py-3 px-4 tracking-wider`}
                  keyboardType="number-pad"
                />
              </View>
            </View>
          </View>

          {/* ENTER YOUR PHONE NUMBER ENDS HERE */}

          {/* ENTER YOUR PASSWORD STARTS HERE */}
          <View className="mt-[20px]">
            <Text
              className="text-white text-xl pb-2 tracking-wide"
              style={{ fontWeight: "bold" }}
            >
              Password
            </Text>

            <View
              className={`w-full "mb-4"  rounded`}
              style={{
                backgroundColor: "white",
              }}
            >
              <TextInput
                numberOfLines={1}
                placeholder="Enter your password"
                secureTextEntry={false}
                placeholderTextColor="#c5c5c5"
                value={password}
                onChangeText={(value) => setPassword(value)}
                className={` text-xl py-3 px-4 tracking-wider`}
              />
            </View>
          </View>
          {/* ENTER YOUR PASSWORD ENDS HERE */}
          {/* CONFIRM YOUR PASSWORD STARTS HERE */}
          <View className="mt-[20px]">
            <Text
              className="text-white text-xl pb-2 tracking-wide"
              style={{ fontWeight: "bold" }}
            >
              Confirm Password
            </Text>

            <View
              className={`w-full "mb-4"  rounded`}
              style={{
                backgroundColor: "white",
              }}
            >
              <TextInput
                numberOfLines={1}
                placeholder="Confirm your password"
                secureTextEntry={false}
                placeholderTextColor="#c5c5c5"
                value={confrimPassword}
                onChangeText={(value) => setConfirmPassword(value)}
                className={` text-xl py-3 px-4 tracking-wider`}
              />
            </View>
          </View>
          {/* CONFIRM YOUR PASSWORD ENDS HERE */}
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
          </View>
        </View>

        <LinearGradient
          className="px-4 pb-8"
          colors={["rgba(26, 27, 28,0.01)", "rgba(26, 27, 28,1)"]}
          locations={[0, 0.5]}
        >
          {/* SIGN UP BUTTON */}

          <Button1
            buttonProps={{
              fontBold: "bold",
              title: "Signup",
              pbottom: "my-6",
              backgroundColor: "#bd0d50",
              color: "white",
              loading: loading,
              signupFunction: registerUser,
            }}
          />
          {/* SIGN UP BUTTON */}
          <View className="flex-row items-center justify-between">
            <View className="w-[100px] border-b-2 border-white"></View>
            <Text className="text-white text-lg tracking-wider">
              Or Signup with{" "}
            </Text>
            <View className="w-[100px] border-b-2 border-white"></View>
          </View>

          <Button1
            buttonProps={{
              title: "Continue with Google",
              icon: <AntDesign name="google" size={28} color="#6e002b" />,
              backgroundColor: "white",
              pbottom: "my-6",
              color: "#6e002b",
            }}
          />

          <View className="flex flex-row space-x-2 mt-14">
            <Text className="text-white text-lg">Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LogRegScreen", { data: "login" });
              }}
            >
              <Text
                className=" text-lg text-[#6e002b]"
                style={{ fontWeight: "bold" }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View className="w-full h-[200px] bg-[#1A1B1C] absolute top-[860px] -z-10"></View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
