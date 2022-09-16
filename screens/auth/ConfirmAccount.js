import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { normalize } from "../../services";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";

const ConfirmAccount = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Verify Account</Text>
        </View>
        <View>
          <Text style={styles.signUpTextSub}>
            Please confirm you own this account, input the verfification code
            sent to your phone number
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
          <ButtonCustom title="Procced" />
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

export default ConfirmAccount;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(10),
    flex: 1,
  },

  signUpTextSub: {
    marginVertical: normalize(10),
    marginTop: normalize(30),
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
    justifyContent: "space-between",
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
