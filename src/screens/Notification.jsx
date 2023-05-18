import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import NotifyBubble from "../components/NotifyBubble";
import { primaryColor } from "../constant";

const Notification = () => {
  const image = {
    img1: require("../images/notifyImg1.png"),
    img2: require("../images/notifyImg2.png"),
    img3: require("../images/notifyImg3.png"),
    img4: require("../images/notifyImg4.png"),
  };

  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: primaryColor,
        }}
      />

      <View className={`bg-[${primaryColor}] h-[80px] justify-center`}>
        <Text className="text-center font-semibold text-lg text-[#fff]">
          Notification
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          // flex: 1,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          paddingBottom: 50,
        }}
      >
        <Text className="font-bold text-lg my-4">Today, April 22</Text>
        <NotifyBubble
          styles={{
            backgroundColor: primaryColor,
          }}
          image={image.img1}
          user="HotUpdate"
          desc="Two ways to get
       your Canada Visa approved faster than ever"
          time="15m ago"
        />

        <NotifyBubble
          styles={{
            marginTop: 20,
            backgroundColor: "#EEF1F4",
          }}
          image={image.img2}
          user="Donald"
          desc="replied to your message in the community"
          time="1h ago"
          textStyles1={{
            color: "#000",
          }}
          textStyles2={{
            color: "#4E4B66",
          }}
        />
        <Text className="font-bold text-lg my-4">Yesterday, April 21</Text>

        <NotifyBubble
          styles={{
            marginTop: 20,
            backgroundColor: "#EEF1F4",
          }}
          image={image.img3}
          user="Maley Botosh"
          desc="sent you a direct message"
          time="1 Day ago"
          textStyles1={{
            color: "#000",
          }}
          textStyles2={{
            color: "#4E4B66",
          }}
        />

        <NotifyBubble
          styles={{
            marginTop: 20,
            backgroundColor: "#EEF1F4",
          }}
          image={image.img4}
          user="Modelyn Saris"
          desc="sent you a direct message"
          time="1 Day ago"
          textStyles1={{
            color: "#000",
          }}
          textStyles2={{
            color: "#4E4B66",
          }}
        />

        <Text className="font-bold text-lg my-4">11 days ago, April 10</Text>

        <NotifyBubble
          styles={{
            marginTop: 20,
            backgroundColor: "#EEF1F4",
          }}
          image={image.img4}
          user="Maley Botosh"
          desc="sent you a direct message"
          time="1 Day ago"
          textStyles1={{
            color: "#000",
          }}
          textStyles2={{
            color: "#4E4B66",
          }}
        />
      </ScrollView>
    </>
  );
};

export default Notification;
