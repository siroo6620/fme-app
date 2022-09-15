import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { normalize } from "../Helpers";

const ButtonCustom = (props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
        <Text {...props} style={styles.button}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(5),
    backgroundColor: "rgb(1, 148, 68)",
    padding: normalize(13),
    elevation: 3,
    borderRadius: normalize(15),
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: normalize(16),
    color: "white",
    fontFamily: "PoppinsBold",
    letterSpacing: 1,
  },
});
