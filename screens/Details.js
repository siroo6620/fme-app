import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import ButtonCustom from "../components/Button";
import CustomAppHeader from "../components/CustomAppHeader";

const Details = (props) => {
  return (
    <View style={{ flex: 1, margin: 16 }}>
      <CustomAppHeader {...props} />
      <View style={{ marginVertical: 30 }}>
        <Text style={{ fontSize: 24 }}>Login</Text>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 14 }}>Phone Number</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 14 }}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <ButtonCustom text="Procced" />
        <Text style={{ alignSelf: "center", paddingLeft: 20 }}>
          Forgot Password?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 45,
    backgroundColor: "rgb(211, 254, 235)",
    marginVertical: 10,
    color: "black",
    paddingHorizontal: 10,
    elevation: 2,
    fontSize: 16,
  },
});

export default Details;
