import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../Context";

const Button1 = ({
  buttonProps: {
    width,
    backgroundColor,
    color,
    pright,
    mleft,
    title,
    icon,
    fontBold,
    bborder,
    pbottom,
    signupFunction,
    name,
    loading,
  },
}) => {
  const { setMenuValue } = useContext(GlobalContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === "Signup") {
          signupFunction();
        } else if (title === "Verify") {
          navigation.navigate("EmailVerificationSuccessPage");
        } else if (title === "Get code") {
          navigation.navigate("ForgetPasscodeVerify");
        } else if (title === "Change Password") {
          navigation.navigate("ResetPasswordPage");
        } else if (title === "Reset password") {
          navigation.navigate("PasswordChangeSuccess");
        } else if (name === "PremiumPackages") {
          navigation.navigate("PremiumPackages");
          setMenuValue("hidden");
        } else {
          console.log("login");
        }
      }}
      className={` ${bborder} ${width} rounded  text-center ${pbottom} py-3`}
      style={[
        icon
          ? {
              backgroundColor: backgroundColor,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 40,
              paddingRight: 40,
            }
          : { backgroundColor: backgroundColor },
      ]}
    >
      {icon ? <Text className={`${pright} ${mleft} mt-1`}>{icon}</Text> : ""}

      {loading ? (
        <ActivityIndicator color="#fff" size={30} />
      ) : (
        <Text
          className="text-center text-xl tracking-wider"
          style={{ color: color, fontWeight: fontBold }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button1;
