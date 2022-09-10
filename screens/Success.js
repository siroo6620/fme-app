import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { normalize } from "../Helpers";
import { useFocusEffect } from "@react-navigation/native";
import ButtonCustom from "../components/ButtonCustom";

const Success = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageMain}
          resizeMode="cover"
          source={require("../assets/logo1.png")}
        />
      </View>
      <Text>Success Logo not Found </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gap: {
    margin: normalize(30),
  },
  buttonContainer: {
    width: "60%",
  },
  button: {
    margin: normalize(10),
  },
  textContainer: {
    width: "60%",
  },
  text: {
    letterSpacing: 1,
    fontFamily: "PoppinsBold",
    fontSize: normalize(30),
    color: "rgb(40, 58, 53)",
  },

  container: {
    flex: 1,
    padding: normalize(15),
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: normalize(40),
  },
  imageMain: {
    width: normalize(100),
    height: normalize(100),
  },
});

export default Success;
