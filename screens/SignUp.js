import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React from "react";
import Layout from "./Layout";
import { normalize } from "../Helpers";
import InputField from "../components/InputField";
import ButtonCustom from "../components/ButtonCustom";

const SignUp = (props) => {
  return (
    <Layout {...props}>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
        <View style={styles.signUpForm}>
          <InputField title="Name" />
          <InputField title="Country Code" />
          <InputField title="Phone Number" />
          <InputField title="Crop Type" />
          <InputField title="Password" />
          <InputField title="Confirm Password" />
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

export default SignUp;

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
    flex: 1,
    marginTop: normalize(10),
  },
  button: {
    width: "60%",
  },
});
