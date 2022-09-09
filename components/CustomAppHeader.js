import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const CustomAppHeader = (props) => {
  return (
    <View
      style={{
        height: "10%",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          position: "absolute",
          left: 5,
          backgroundColor: "rgb(211, 254, 235)",
          elevation: 2,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
      >
        {console.log(props.navigation)}
        <Pressable onPress={() => props.navigation.pop()}>
          <Image
            source={require("../assets/arrow-drop-left-line.png")}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
      </View>
      <Image
        source={require("../assets/agriculture.png")}
        style={{ width: 50, height: 50, position: "absolute", right: 4 }}
      />
    </View>
  );
};

export default CustomAppHeader;
