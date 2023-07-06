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

import Button1 from "../components/Button1";
import { AntDesign } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import axios from "axios";
import parsePhoneNumber from "libphonenumber-js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

function RegisterScreen() {
  const image = { img: require("../images/close.png") };
  const [countryCode, setCountryCode] = useState("NG");
  const [callingCode, setCallingCode] = useState("+234");

  // NAME STATE
  const [name, setName] = useState("");
  const [nameSuccess, setNameSuccess] = useState("");

  // EMAIL STATE
  const [email, setEmail] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  // PHONE STATE
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberSuccess, setPhoneNumberSuccess] = useState("");

  // PASSWORD STATE
  const [password, setPassword] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  // CONFIRM PASSWORD STATE
  const [confrimPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(null);

  // ACTIVITY INDICATOR
  const [loading, setLoading] = useState(null);

  // NAME VAIDATION STARTS HERE
  const nameValidation = () => {
    const nameRegex = /^[A-Za-z]{3,30}(?:\s[A-Za-z]{3,30})+$/;
    if (!name.trim()) {
      setNameSuccess("Failed");
      Alert.alert("Invalid", "Please enter a name.");
    } else if (!nameRegex.test(name)) {
      setNameSuccess("Failed");
      Alert.alert(
        "Invalid",
        "Name should contain only alphabets and spaces. Also ensure you entered your First name and Last name."
      );
    } else {
      // Valid name, you can perform further actions here
      setNameSuccess("Success");
    }
  };
  // NAME VALIDATION ENDS HERE

  // CONST NAVIGATION STARTS HERE
  const navigation = useNavigation();
  // cONST NAVIGATION ENDS HERE

  //  EMAIL VALIDATION STARTS HERE
  const emailValidation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email validation regex

    if (!email.trim()) {
      setEmailSuccess("Failed");
      Alert.alert("Invalid", "Please enter an email.");
    } else if (!emailRegex.test(email)) {
      setEmailSuccess("Failed");
      Alert.alert(
        "invalid",
        "Invalid email. Please enter a valid email address."
      );
    } else {
      // Valid name and email, you can perform further actions here
      setEmailSuccess("Success");
    }
  };
  //  EMAIL VALIDATION ENDS HERE
  //  PASSWORD VALIDATION STARTS HERE
  const passwordValidation = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password validation regex

    if (!password.trim()) {
      setPasswordSuccess("Failed");
      Alert.alert(
        "Invalid",
        "Password must contain Uppercase letter, lowercase letter, symbol, number and must not be less than 8 characters long."
      );
    } else if (!passwordRegex.test(password)) {
      setPasswordSuccess("Failed");
      Alert.alert(
        "Invalid",
        "Password must contain Uppercase letter, lowercase letter, symbol, number and must not be less than 8 characters long."
      );
    } else {
      // Valid name and email, you can perform further actions here
      setPasswordSuccess("Success");
    }
  };
  //  PASSWORD VALIDATION ENDS HERE

  // MATCH PASSWORD FUNCTION STARTS HERE
  const matchPassword = () => {
    if (password === confrimPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
      Alert.alert("Password", "Password does not match");
    }
  };
  // MATCH PASSWORD FUNCTION ENDS HERE

  // PHONE NUMBER VALIDATION STARTS HERE
  const phoneNumberValidation = () => {
    const newNumber2 = `${callingCode}${phoneNumber}`;
    console.log(newNumber2);

    try {
      const phoneNumber2 = parsePhoneNumber(`${newNumber2}`, `${countryCode}`);
      const isItValid = phoneNumber2.isValid();
      if (isItValid === true) {
        setPhoneNumberSuccess(true);
      } else {
        setPhoneNumberSuccess(false);
        Alert.alert("Invalid", "Invalid phone number");
      }
    } catch {}
  };
  // PHONE NUMBER VALIDATION ENDS HERE

  const registerUser = async () => {
    if (
      nameSuccess === "Success" &&
      emailSuccess === "Success" &&
      phoneNumberSuccess === true &&
      passwordSuccess === "Success" &&
      passwordMatch === true
    ) {
      setLoading(true);
      const newNumber2 = `${callingCode}${phoneNumber}`;
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

        const userData = getResponse.data.data.user;
        if (userData) {
          console.log(userData);
          setName("");
          setEmail("");
          setPassword("");
          setPhoneNumber("");
          setConfirmPassword("");
          // HIDE SOME OF THE CHARACTERS IN THE EMAIL STARTS HERE
          const emailFunction = (email) => {
            if (email !== "undefined") {
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
            }
          };
          const truncatedEmail = emailFunction(userData.email);
          const fullEmail = userData.email;
          console.log(truncatedEmail);
          console.log(userData.email);
          // HIDE SOME OF THE CHARACTERS IN THE EMAIL ENDS HERE

          // const verifyToken = userData.verifyToken;

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

          Alert.alert(
            "Registration successful",
            "Verification code sent successfully, continue to verify your email",
            [
              {
                text: "Continue",
                onPress: () => {
                  navigation.navigate("VerifyEmailScreen", {
                    truncatedEmail,
                    fullEmail,
                  });
                },
              },
            ]
          );
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
    } else {
      setLoading(false);
      Alert.alert("Invalid", "Invalid User inputs");
    }
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((prev) => !prev);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#6e002b]">
      <KeyboardAwareScrollView>
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
                className={`w-full   rounded`}
                style={{
                  backgroundColor: "white",
                }}
              >
                <TextInput
                  numberOfLines={1}
                  placeholder="First name and Last name"
                  placeholderTextColor="#c5c5c5"
                  value={name}
                  onChangeText={(value) => setName(value)}
                  className={` text-xl py-3 px-4 tracking-wider`}
                  onBlur={nameValidation}
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
                className={`w-full   rounded`}
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
                  onBlur={emailValidation}
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
                  className={`w-[76%]   rounded`}
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  <TextInput
                    numberOfLines={1}
                    placeholder="Enter phone number"
                    placeholderTextColor="#c5c5c5"
                    value={phoneNumber}
                    onChangeText={(value) => {
                      console.log(value);
                      setPhoneNumber(value);
                    }}
                    className={` text-xl py-3 px-4 tracking-wider`}
                    keyboardType="number-pad"
                    onBlur={phoneNumberValidation}
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
                className={`w-full   rounded`}
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
                  onBlur={passwordValidation}
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
                className={`w-full   rounded`}
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
                  onBlur={matchPassword}
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
                functionExec: registerUser,
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
              <Text className="text-white text-lg">
                Already have an account?
              </Text>
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
