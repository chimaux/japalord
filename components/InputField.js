import React from "react";
import { Text, View, TextInput } from "react-native";
function InputField({inputProps:{title,placeholder,type}}) {
  return (
    <View>
      <Text className="text-white text-xl pb-2 tracking-wide" style={{fontWeight:"bold"}}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={type}
        className="bg-white rounded text-xl py-3 px-2 mb-4 text-zinc-400"
      />
    </View>
  );
}

export default InputField;
