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
  )
}




export function TIMEICON(props) {
  return (
    <Svg
      width={screenWidth *0.075}
      height={screenHeight*0.086}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_2)">
        <Path
          d="M8.84 2.5a6.006 6.006 0 00-6.173 6H1.473a.33.33 0 00-.233.567l1.86 1.866a.33.33 0 00.473 0l1.86-1.866a.333.333 0 00-.24-.567H4c0-2.6 2.12-4.7 4.733-4.667 2.48.034 4.567 2.12 4.6 4.6a4.67 4.67 0 01-4.666 4.734 4.597 4.597 0 01-2.854-.987.666.666 0 00-.827 1.047 5.905 5.905 0 003.68 1.273 6.006 6.006 0 006-6.173C14.58 5.2 11.967 2.587 8.84 2.5zM8.5 5.833c-.273 0-.5.227-.5.5v2.454c0 .233.127.453.327.573l2.08 1.233c.24.14.546.06.686-.173a.505.505 0 00-.173-.687L9 8.593V6.327a.502.502 0 00-.5-.494z"
          fill="#101820"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}




