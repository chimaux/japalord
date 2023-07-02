import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Pressable } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CommunityChat from "../screens/CommunityChat";
import DirectMessage from "../screens/DirectMessage";
import Notification from "../screens/Notification";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import * as OutlineIcons from "react-native-heroicons/outline";
import Dashboard from "../screens/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationStack from "./NavigationStack";
export const deviceWidth = Dimensions.get("window").width;
import HomeStack from "./HomeStack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GlobalContext } from "../../Context";
import { useContext } from "react";
import backBack from "../components/backBack";

console.log(deviceWidth);
export const height = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const BottomTab = () => {
  const navigation = useNavigation();
  const { screenData, setScreenData } = useContext(GlobalContext);
  console.log(screenData, "1");
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#6E002B",
          borderTopWidth: 1,
          borderTopColor: "#6E002B",
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`relative  ${
                  focused ? "bg-[#9c657aa1]" : ""
                }  flex items-center  py-2 rounded-lg ml-4`}
                style={{
                  width: deviceWidth * 0.23,
                }}
              >
                <View className="flex items-center ">
                  <View className=" rounded-full  p-[5px] border-2 border-[#ffffff71]">
                    <OutlineIcons.HomeIcon
                      color="#fff"
                      size={deviceWidth * 0.06}
                    />
                  </View>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#fff",
                    }}
                  >
                    Home
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="CommunityChat"
        component={CommunityChat}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`relative  ${
                  focused ? "bg-[#9c657aa1]" : ""
                }  flex items-center py-2 rounded-lg`}
                style={{
                  width: deviceWidth * 0.23,
                }}
              >
                <View className="flex items-center ">
                  <View className=" rounded-full p-[5px] border-2 border-[#ffffff71]">
                    <OutlineIcons.UserGroupIcon
                      color="#fff"
                      size={deviceWidth * 0.06}
                    />
                  </View>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#fff",
                    }}
                  >
                    Community
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="DirectMessage"
        component={DirectMessage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`relative  ${
                  focused ? "bg-[#9c657aa1]" : ""
                }  flex items-center py-2 rounded-lg`}
                style={{
                  width: deviceWidth * 0.23,
                }}
              >
                <View className="flex items-center ">
                  <View className=" rounded-full p-[5px] border-2 border-[#ffffff71]">
                    <OutlineIcons.ChatBubbleLeftIcon
                      color="#fff"
                      size={deviceWidth * 0.06}
                    />
                  </View>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#fff",
                    }}
                  >
                    Message
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                className={`relative  ${
                  focused ? "bg-[#9c657aa1]" : ""
                }  flex items-center py-2 rounded-lg mr-4`}
                style={{
                  width: deviceWidth * 0.23,
                }}
              >
                <View className="flex items-center">
                  <View className=" rounded-full p-[5px] border-2 border-[#ffffff71]">
                    <OutlineIcons.BellIcon
                      color="#fff"
                      size={deviceWidth * 0.06}
                    />
                  </View>
                  <Text
                    style={{
                      fontWeight: "500",
                      color: "#fff",
                    }}
                  >
                    Notification
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />

      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
