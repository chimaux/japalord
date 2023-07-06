import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { GlobalContext } from "../../Context";

import OtpBox, { screenHeight, screenWidth } from "../components/OtpBox";
import Button1 from "../components/Button1";
import { LinearGradient } from "expo-linear-gradient";
import GobackBTN from "../components/GobackBTN";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Alert } from "react-native";
import axios from "axios";

const CELL_COUNT = 4;

const VerifyEmailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [pageData, setPageData] = useState({});
  const [countdown, setCountdown] = useState(20);
  const [canResend, setCanResend] = useState(false);
  // ACTIVITY INDICATOR
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    setPageData(route.params);
  }, []);

  const { dominantColor } = useContext(GlobalContext);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // PREVENT SWIPE BACK STARTS HERE
  useFocusEffect(
    React.useCallback(() => {
      const disableSwipeGesture = () => {
        // Disable swipe gesture for the screen
        navigation.setOptions({
          gestureEnabled: false,
        });
      };

      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      });

      disableSwipeGesture();

      return () => {
        // Re-enable swipe gesture when leaving the screen
        navigation.setOptions({
          gestureEnabled: true,
        });
      };
    }, [])
  );
  // PREVENT SWIPE BACK ENDS HERE

  // VERIFY EMAIL FUNCTION STARTS HERE
  const verifyEmail = async () => {
    // const verifyEmail = () => {
    setLoading(true);
    try {
      console.log(value, "chipanda");
      const getResponse = await axios.post(
        "https://japa-app.onrender.com/api/v1/users/auths/verify-email",
        {
          code: value,
        }
      );
      if (getResponse.data.status === true) {
        console.log(getResponse.data.status + " " + getResponse.data.message);
        navigation.navigate("EmailVerificationSuccessPage");
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

    // if (pageData.v1 === value) {
    //   console.log(value + " is correct");
    // } else {
    //   console.log(value + " value is wrong");
    // }
  };
  // VERIFY EMAIL FUNCTION ENDS HERE

  // RESEND VERIFICATION STARTS HERE
  const resendVerificationCode = async () => {
    // const verifyEmail = () => {
    setLoading(true);
    try {
      console.log(pageData.fullEmail, "chipanda");
      const getResponse = await axios.post(
        "https://japa-app.onrender.com/api/v1/users/auths/resend-verification",
        {
          email: pageData.fullEmail,
        }
      );
      if (getResponse.data.status === true) {
        console.log(getResponse.data);
        Alert.alert("Success", "Verification code sent successfully");
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

    // if (pageData.v1 === value) {
    //   console.log(value + " is correct");
    // } else {
    //   console.log(value + " value is wrong");
    // }
  };
  // RESEND VERIFICATION ENDS HERE

  return (
    <View className={`relative bg-red-800 `} style={{ height: screenHeight }}>
      <SafeAreaView
        style={{
          backgroundColor: dominantColor,
        }}
      />
      {/* background fix starts here */}
      <View
        className={` bg-[${dominantColor}]`}
        style={{ height: screenHeight / 2 }}
      ></View>
      <View
        className="bg-[#1A1B1C] "
        style={{ height: screenHeight / 2 }}
      ></View>
      {/* background fix ends here */}
      <ScrollView
        className="absolute top-0 bottom-0 right-0 left-0"
        contentContainerStyle={{
          height: screenHeight,
          backgroundColor: dominantColor,
        }}
      >
        <View className="ml-6 mt-12">
          <GobackBTN />
        </View>

        <Text className="text-center text-white text-4xl font-bold tracking-wider my-10">
          Verify your email
        </Text>
        <Text className="text-center text-white text-2xl tracking-wider">
          We’ve sent a code to
        </Text>

        <Text className="my-2 mx-auto text-center text-white text-xl tracking-wider">
          {pageData.truncatedEmail}
        </Text>

        <LinearGradient
          className="flex-1 "
          colors={["rgba(26, 27, 28,0.01)", "rgba(26, 27, 28,1)"]}
          locations={[0, 0.5]}
        >
          <View className="my-12 flex-row  justify-center">
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="default"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

          <View className="mx-4">
            <Button1
              buttonProps={{
                fontBold: "bold",
                title: "Verify",
                backgroundColor: "#bd0d50",
                color: "white",
                functionExec: verifyEmail,
                loading: loading,
              }}
            />
          </View>

          {canResend ? (
            <TouchableOpacity>
              <Text
                className="text-center text-green-500 cursor-pointer my-8 text-xl"
                onPress={resendVerificationCode}
              >
                Send code again 00:{countdown}
              </Text>
            </TouchableOpacity>
          ) : (
            <Text className="text-center text-[#dcdada] my-8 text-xl cursor-not-allowed">
              Send code again 00:{countdown}
            </Text>
          )}
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 0 },
  cell: {
    width: screenWidth * 0.15,
    height: screenHeight * 0.08,
    lineHeight: screenHeight * 0.08,
    backgroundColor: "#fff",
    fontSize: 24,
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
    textAlign: "center",
  },
  focusCell: {
    backgroundColor: "#cccccc",
  },
});

export default VerifyEmailScreen;
