import React from "react";
import { View, Text } from "react-native";

const Button1 = ({
  buttonProps: { width, backgroundColor, color, pright,mleft, title, icon, fontBold,bborder,pbottom},
}) => {
  console.log(pbottom,"chim")
  return (
    <View
      className={`${bborder} ${width} rounded  text-center ${pbottom} py-3`}
      style={[ icon? {backgroundColor:backgroundColor,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:40, paddingRight:40  }:{backgroundColor:backgroundColor} ]}
    >
      { icon ?<Text className={`${pright} ${mleft} mt-1`}>{ icon}</Text>:""}
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
