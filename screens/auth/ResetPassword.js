import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { normalize } from "../../services";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";

const ResetPassword = (props) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Layout {...props}>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Reset Password</Text>
        </View>
        <View style={styles.signUpForm}>
          <InputField title="Phone Number" value={[phone, setPhone]} number/>
          <InputField title="New Password" value={[password, setPassword]} secureTextEntry/>
          <InputField
            title="Confirm New Password"
            value={[confirmPassword, setConfirmPassword]}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.button}>
          <ButtonCustom
            title="Procced"
            onPress={() => props.navigation.navigate("VerifyAccount")}
          />
        </View>
      </View>
    </Layout>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    marginVertical: normalize(10),
    flex: 1,
  },
  signUpText: {
    marginVertical: normalize(5),
    fontFamily: "PoppinsSemiBold",
    fontSize: normalize(30),
    color: "rgb(40, 58, 53)",
    letterSpacing: 1,
  },

  signUpForm: {
    marginTop: normalize(10),
  },
  button: {
    marginTop: normalize(30),
    width: "60%",
  },
});
