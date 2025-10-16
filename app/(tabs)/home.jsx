import { View, Text, Image, Platform, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import { ImageBackground } from "react-native-web";
import { BlurView } from "expo-blur";

const home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#2b2b2b" }}>
      <View className="flex items-center  ">
        <View className=" bg-[#5f5f5f] w-11/12 rounded-lg shadow-lg justify-between items-center flex flex-row p-2 ">
          <View className="flex flex-row">
            <Text
              className={`text-base h-10 pt-[${
                Platform.OS == "android" ? 8 : 10
              }] align-middle text-white`}
            >
              {" "}
              Welcome to{" "}
            </Text>
            <Image resizeMode="cover" className={"w-20 h-12"} source={logo} />
          </View>
        </View>
      </View>
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          className="my-4 w-full h-52 items-center justify-center"
          source={banner}
        >
          <BlurView
            intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark"
            className="w-full p-4 shadow-lg "
          >
            <Text className=" text-center text-3xl font-bold text-white ">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
