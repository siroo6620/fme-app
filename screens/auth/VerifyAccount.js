import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { normalize } from "../../services";
import Loader from "../../components/Loader";
import Layout from "../../components/Layout";
import InputField from "../../components/InputField";
import { ShowToast } from "../../services/toastConfig";
import { postVerifyAccount } from "../../requests/auth";
import ButtonCustom from "../../components/ButtonCustom";
import OTPInputView from "@twotalltotems/react-native-otp-input";

let otpCode = ""

const VerifyAccount = (props) => {
  const [loader, setLoader] = useState(false)

  const customBackHandler = () => {
    ShowToast.error("Please enter otp code before exiting")
  }

  const verify = async ({code}) => {
    if (code) otpCode = code

    if (otpCode.length != 6) {
      ShowToast.error("OTP is incomplete")
      return
    }

    setLoader(true)
    postVerifyAccount({code: otpCode})
    .then(res => {
      // console.warn(res.data)
      if (res.data.success) {
        ShowToast.success("Verification Successful!")
        props.navigation.navigate("Success")
      } else {
        ShowToast.error(res.data.message)
      }
    })
    .catch(e => {
      console.warn(e)
      ShowToast.error("Network Error")
    })
    .finally(() => {
      setLoader(false)
    })
  }

  return (
    <Layout {...props} customBackHandler={customBackHandler}>
      {loader && <Loader visible={loader} />}
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
          {/* <InputTile />
          <InputTile />
          <InputTile />
          <InputTile />
          <InputTile />
          <InputTile /> */}
          <OTPInputView 
            pinCount={6} 
            codeInputFieldStyle={styles.inputTileNew}
            onCodeFilled={(code) => verify({code})}
          />
        </View>

        <View style={styles.button}>
          <ButtonCustom
            // onPress={() => props.navigation.navigate("Success")}
            onPress={verify}
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
    justifyContent: "center",
    marginVertical: normalize(20),
    height: normalize(100),
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

  inputTileNew: {
    backgroundColor: "rgb(209, 255, 235)",
    // width: "14%",
    padding: normalize(13),
    borderRadius: normalize(8),
    textAlign: "center",
    elevation: 1,
    marginHorizontal: normalize(5),
    borderWidth: 0,
    color: "black",
  },
});
