import React from "react";
import { Text, View, TextInput } from "react-native";
function InputField({
  inputProps: { identity,placeholderTextColor,title, placeholder, type, dropShadow, icon, width, flex },
}) {
  return (
    <View>
      <Text
        className="text-white text-xl pb-2 tracking-wide"
        style={{ fontWeight: "bold" }}
      >
        {title}
      </Text>
      <View
        className={`w-full mb-4 ${flex} rounded`}
        style={[
          dropShadow
            ? {
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                zIndex: 999,
                backgroundColor: "#303030",
              }: identity?{
                // backgroundColor: "#626262",
                backgroundColor: "#424141",
              }
            : { backgroundColor: "white" },
        ]}
      >
        <TextInput
          placeholder={placeholder}
          secureTextEntry={type}
          placeholderTextColor={placeholderTextColor}
          className={`${width} text-xl py-3 px-2`}
          style={[
            identity
              ? {
                  color: "white",
                 
                }
              : { color: "gray" },
          ]}
        />
        {icon ? <Text>{icon}</Text> : ""}
      </View>
    </View>
  );
}

export default InputField;
