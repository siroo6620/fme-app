import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Layout from "./Layout";
import { normalize } from "../Helpers";
import InputField from "../components/InputField";
import ButtonCustom from "../components/ButtonCustom";

const VerifyAccount = (props) => {
  return (
    <Layout {...props}>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Verify Account</Text>
        </View>
        <View>
          <Text style={styles.signUpTextSub}>
            Enter the Six digit code sent to your phone number
          </Text>
        </View>
        <View style={styles.otp}>
          <InputTile />
          <InputTile />
          <InputTile />
          <InputTile />
          <InputTile />
          <InputTile />
        </View>

        <View style={styles.button}>
          <ButtonCustom
            onPress={() => props.navigation.navigate("Success")}
            title="Procced"
          />
        </View>
      </View>
    </Layout>
  );
};

const InputTile = () => {
  return (
    <TextInput
      style={styles.inputTile}
      autoComplete="sms-otp"
      maxLength={1}
      textContentType="oneTimeCode"
    />
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(10),
    flex: 1,
  },

  signUpTextSub: {
    marginVertical: normalize(5),
    fontFamily: "PoppinsSemiBold",
    fontSize: normalize(17),
    color: "rgb(88, 137, 119)",
    letterSpacing: 0.5,
  },
  signUpText: {
    marginVertical: normalize(5),
    fontFamily: "PoppinsSemiBold",
    fontSize: normalize(30),
    color: "rgb(40, 58, 53)",
    letterSpacing: 1,
  },

  button: {
    marginTop: normalize(30),
    width: "60%",
  },

  otp: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: normalize(20),
  },

  inputTile: {
    backgroundColor: "rgb(209, 255, 235)",
    width: "14%",
    padding: normalize(13),
    borderRadius: normalize(8),
    textAlign: "center",
    elevation: 1,
    marginHorizontal: normalize(5),
  },
});
