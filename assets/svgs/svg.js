import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { View, Text, Dimensions } from "react-native";

export  const screenWidth = Dimensions.get("window").width;
 export const screenHeight = Dimensions.get("window").height;

export function BG_SVG({children,props}) {
  return (

    <Svg
    width={screenWidth*0.9}
    height={screenHeight*0.31}
    viewBox="0 0 382 232"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
   
    <Path
      d="M252.134 0H22.984C15.347 0 .07 4.522.07 22.608v179.903C-.658 212.34 3.998 232 28.44 232h327.356c8.73-.655 26.189-5.772 26.189-21.5V99c0-17-3.424-37.5-30.485-37.5h-28c-7.5 0-19.106 0-31-5-5.456-2.294-18.5-11-17-36.5.647-11-9-20-23.366-20z"
      fill="#101820"
    />
     {children}
    <Path fill="#101820" d="M0 200H75V232H0z" />
    <Path fill="#101820" d="M307 200H382V232H307z" />
  </Svg>
    // <Svg
    //   width={screenWidth*0.9}
    //   height={screenHeight*0.31}
    //   viewBox="0 0 382 232"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <G clipPath="url(#clip0_1_52)">
    //     <Path
    //       d="M252.134 0H22.984C15.347 0 .07 4.522.07 22.608v179.903C-.658 212.34 3.998 232 28.44 232h327.356c8.73-.655 26.189-5.772 26.189-21.5V99c0-17-3.424-37.5-30.485-37.5h-28c-7.5 0-19.106 0-31-5-5.456-2.294-18.5-11-17-36.5.647-11-9-20-23.366-20z"
    //       fill="#101820"
    //     />
    //   </G>
    //   {children}
    //   <Defs>
    //     <ClipPath id="clip0_1_52">
    //       <Path fill="#fff" d="M0 0H381.985V232H0z" />
    //     </ClipPath>
    //   </Defs>
    // </Svg>
  )
}

