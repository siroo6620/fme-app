import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, {useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { normalize } from "../../services";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";
import { ShowToast } from "../../services/toastConfig";
import {postLogin} from "../../requests/auth"
import Loader from "../../components/Loader";


const Login = (props) => {
  const [loader, setLoader] = useState(false)

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const authenticate = async () => {
    if (!phone || !password) {
      ShowToast.error("Please provide necessary information")
      return
    }
    
    setLoader(true)
    postLogin({phone, password})
    .then(res => {
      if (res.data.code === 401 && res.data.success) { // invalid phone / password
        ShowToast.error(res.data.message)
      } else if (res.data.code === 401 && !res.data.success) { //verify account
        ShowToast.error(res.data.message)
        props.navigation.navigate("VerifyAccount", { fromLogin: true })
      } else if (res.data.code === 200) {
        ShowToast.success("Login Successful")
        console.warn(res.data)
      }
      // console.warn(res.data)
    })
    .catch(err => {
      console.warn(err)
      ShowToast.error("Network Error")
    })
    .finally(() => {
      setLoader(false)
    })
  }

  return (
    <Layout {...props}>
      {loader && <Loader visible={loader} />}
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
