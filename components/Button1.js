import React from "react";
import { View, Text } from "react-native";

const Button1 = ({
  buttonProps: { backgroundColor, color, boxShadow, title, icon, fontBold },
}) => {
  return (
    <View
      className="rounded w-full text-center my-10 py-3"
      style={[ icon? {backgroundColor:backgroundColor,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:40, paddingRight:40  }:{backgroundColor:backgroundColor} ]}
    >
      { icon ?<Text className="mt-1">{ icon}</Text>:""}
      <Text
        className="text-center text-xl tracking-wider"
        style={{ color: color, fontWeight: fontBold }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Button1;
