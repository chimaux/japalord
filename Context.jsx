import { View, Text } from "react-native";
import React, { useState } from "react";
export const GlobalContext = React.createContext();
const Provider = ({ children }) => {
  // side menu nav
  const [menuValue, setMenuValue] = useState("hidden");
  const [screenData, setScreenData] = useState("");
  const [pageData, setPageData] = useState(null);
  // Trucate text fuction starts here
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  // Truncate text function ends here

  //MY COORS START HERE
  const dominantColor = "#6e002b";
  //MY COLORS ENDS HERE
  // const signupFunction = () => {
  //   console.log("navigation");
  // };

  const store = {
    // signupFunction,
    dominantColor,
    truncateText,
    menuValue,
    setMenuValue,
    screenData,
    setScreenData,
    pageData,
    setPageData,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

export default Provider;
