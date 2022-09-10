import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { normalize } from "../Helpers";

const CustomAppHeader = (props) => {
  return (
    <View style={styles.container}>
      {console.log(props.navigation)}
      <Pressable style={styles.viewLeft} onPress={() => props.navigation.pop()}>
        <Image
          style={styles.image}
          source={require("../assets/icons/arrow-left-s-line.png")}
        />
      </Pressable>
      <View style={styles.viewRight}>
        <Image style={styles.image} source={require("../assets/logo1.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    justifyContent: "space-between",
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
  },

  viewLeft: {
    backgroundColor: "rgb(206, 253, 234)",
    width: "12%",
    height: "55%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(6),
    elevation: normalize(4),
  },
  viewRight: {
    width: "15%",
    height: "50%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontFamily: "Poppins",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
});

export default CustomAppHeader;
