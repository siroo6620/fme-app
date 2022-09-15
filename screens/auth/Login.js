import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, {useState, useEffect } from "react";
import Layout from "../Layout";
import { normalize } from "../../Helpers";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";
import {postLogin} from "../../requests/auth"

const Login = (props) => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const authenticate = async () => {
    if (!phone || !password) {
      return
    }
    postLogin({phone, password})
    .then(res => {
      console.warn(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Layout {...props}>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Login</Text>
        </View>
        <View style={styles.signUpForm}>
          <InputField title="Phone Number" value={[phone, setPhone]} number/>
          <InputField title="Password" value={[password, setPassword]} secureTextEntry/>
        </View>
        <View style={styles.button}>
          <ButtonCustom title="Procced" onPress={authenticate}/>
        </View>
        <Pressable
          style={styles.forgetPasswordContainer}
          onPress={() => props.navigation.navigate("ResetPassword")}
        >
          <Text style={styles.forgetPassword}>Forgot Password ?</Text>
        </Pressable>
      </View>
    </Layout>
  );
};

export default Login;

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
  forgetPassword: {
    letterSpacing: 0.5,
    fontFamily: "PoppinsSemiBold",
    color: "rgb(40, 58, 53)",
  },
  forgetPasswordContainer: {
    paddingTop: normalize(20),
  },
});
