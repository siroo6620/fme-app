import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { normalize } from "../Helpers";

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text {...props} style={styles.button}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: normalize(5),
    backgroundColor: "rgb(1, 148, 68)",
    padding: normalize(13),
    elevation: 3,
    borderRadius: normalize(15),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    fontSize: normalize(16),
    color: "white",
    fontFamily: "PoppinsBold",
    letterSpacing: 1,
  },
});
