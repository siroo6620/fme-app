import React, { useState } from "react";
import { Text, View, SafeAreaView, Image, Dimensions } from "react-native";
import ButtonCustom from "../components/Button";
import FocusedStatusBar from "../components/FocusedStatusBar";

const { width, height } = Dimensions.get("window");

const scalingFactors = {
  small: 40,
  normal: 30,
  big: 20,
  large: 15,
};
const fontSizes = {
  H1: {
    fontSize: (width / scalingFactors.big).toFixed(2),
    lineHeight: (width / scalingFactors.big).toFixed(2) * 1.3,
  },
  P: {
    fontSize: (width / scalingFactors.normal).toFixed(2),
    lineHeight: (width / scalingFactors.normal).toFixed(2) * 1.3,
  },
  SMALL: {
    fontSize: (width / scalingFactors.small).toFixed(2),
    lineHeight: (width / scalingFactors.small).toFixed(2) * 1.3,
  },
  LARGE: {
    fontSize: (width / scalingFactors.large).toFixed(2),
    lineHeight: (width / scalingFactors.large).toFixed(2) * 1.3,
  },
};
console.log(fontSizes.H1);

const Home = (props) => {
  const [first, setfirst] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, margin: 16 }}>
      <FocusedStatusBar background="black" />
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <Image
            resizeMode="center"
            style={{
              width: 150,
              height: 150,
              alignSelf: "center",
              paddingVertical: 50,
            }}
            source={require("../assets/agriculture.png")}
          />
          <Text
            style={{
              fontSize: parseInt(fontSizes.LARGE.fontSize),
              fontWeight: "800",
              width: "60%",
              paddingVertical: 80,
              color: "rgb(39, 100, 82)",
              lineHeight: parseInt(fontSizes.LARGE.lineHeight),
            }}
          >
            Hi 👋 {"\n"}Welcome to the Farming Made {"\n"}Easy App!
          </Text>
          <View style={{ width: "50%" }}>
            <ButtonCustom
              text="Login"
              onPress={() => props.navigation.navigate("Details")}
            />
            <ButtonCustom
              text="Sign Up"
              onPress={() => props.navigation.navigate("AccountType")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
