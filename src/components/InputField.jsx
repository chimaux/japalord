import React from "react";
import { Text, View, TextInput } from "react-native";
function InputField({
  inputProps: { identity,placeholderTextColor,title, placeholder, designType, dropShadow, icon, width, flex, type },
}) {
  return (
    <View>
{title?
      <Text
      className="text-white text-xl pb-2 tracking-wide"
      style={{ fontWeight: "bold" }}
    >
      {title}
    </Text>
    :""
}
      <View
        className={`w-full ${title? "mb-4":""} ${flex} rounded`}
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
        <View className="pl-2">
        {icon && designType === "type1" ? <Text>{icon}</Text> : ""}
        </View>
        <TextInput
        numberOfLines={1}
          placeholder={placeholder}
          secureTextEntry={type}
          placeholderTextColor={placeholderTextColor}
          className={`${width} text-xl py-3 px-4 tracking-wider`}
          style={[
            identity
              ? {
                  color: "#d3d1d1",
                 
                }
              : { color: "gray" },
          ]}
        />
        {icon && designType === "type2" ? <Text>{icon}</Text> : ""}
      </View>
    </View>
  );
}

export default InputField;
