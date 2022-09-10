import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { normalize } from "../Helpers";

const InputField = ({ title }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputFontSize}>{title}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholderTextColor="white"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputFontSize: {
    fontFamily: "PoppinsBold",
    fontSize: normalize(16),
    marginVertical: normalize(8),
    color: "rgb(136, 173, 160)",
  },
  input: {
    fontFamily: "PoppinsSemiBold",
    padding: normalize(8),
    backgroundColor: "rgb(209, 255, 235)",
    elevation: 1,
    borderRadius: normalize(8),
  },
});
