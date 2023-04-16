

import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { urlFor } from "../sanity";

import { useNavigation } from '@react-navigation/native';



const  LatestUpdateTab= ({ props: { data } }) => {

const navigation = useNavigation()



// Date function starts here

function formatCreatedAt(myDate) {
  const date = new Date(myDate);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);


  if (seconds < 60) {
    return 'just now';
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days === 1) {
    return 'yesterday';
  } else if (days < 7) {
    return `${days} days ago`;
  } else if (months === 1) {
    return 'a month ago';
  } else if (months < 12) {
    return `${months} months ago`;
  } else if (years === 1) {
    return 'a year ago';
  } else {
    return `${years} years ago`;
  }
}



//Date function ends here



// Trucate text fuction starts here
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};
// Truncate text function ends here


// Calculate reading time starts here
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed in words per minute
  const words = text.trim().split(/\s+/).length; // Count the number of words in the text
  const readingTimeMinutes = words / wordsPerMinute; // Calculate the reading time in minutes
  const readingTimeSeconds = readingTimeMinutes * 60; // Convert reading time to seconds
  return Math.ceil(readingTimeSeconds); // Round up to the nearest second
};



const Article = (content) => {
  const readingTimeSeconds = calculateReadingTime(content);
  const readingTimeMinutes = Math.ceil(readingTimeSeconds / 60);
  const readingTimeText = `${readingTimeMinutes} min read`;
  return readingTimeText
}
// Calculate reading time ends here
  
  
return (
<View>
{

  data.map((items) => {
   
    return (
      <TouchableOpacity className="flex-row bg-[#424141] my-2 mx-4 rounded-xl"
      key={items._id.toString()}
      activeOpacity={0.9}
      onPress={()=>{
        navigation.navigate("HotUpdateDetailPage",{id:items._id,title:items.title,content:items.content,image:items.image})
      }}
      >

        <View className="w-[40%]">
          <Image
           
            source={{
              uri: urlFor(items.image).url(),
            }}
            className=" rounded-xl"
            resizeMode="cover"
            style={{ width: "100%", height: 150 }}
          />
        </View>

        <View className="w-[59%] h-[150px] px-2 py-2">
          <View className="text-white flex-1 mb-2 flex-row flex-wrap">
          <Text 
          className="text-white"
          style ={{fontWeight:"bold"}}
          numberOfLines={4}
          >{items.title}</Text>
          </View>


          <View className="flex-row justify-between flex-wrap ">
            <Text className="text-gray-400 mb-[3px]"
            style ={{fontWeight:"bold"}}
            >{Article(items.content)}</Text>
            <Text className="text-gray-400"
            style ={{fontWeight:"bold"}}
            >{formatCreatedAt(items. _createdAt)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  })
}

</View>
)
}

export default LatestUpdateTab



