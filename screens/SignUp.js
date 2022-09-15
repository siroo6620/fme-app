import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React, {useState, useEffect} from "react";
import Layout from "./Layout";
import { normalize } from "../Helpers";
import InputField from "../components/InputField";
import ButtonCustom from "../components/ButtonCustom";
import { getFarmTypes } from "../requests/farmer";
import { getServiceTypes } from "../requests/serviceProvider";

const SignUp = (props) => {
  const [name, setName] = useState("")
  const [countryCode, setCountryCode] = useState("")
  const [phone, setPhone] = useState("")
  const [cropType, setCropType] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [serviceTypes, setServiceTypes] = useState([])
  const [farmTypes, setFarmTypes] = useState([])

  const authTypes = ['farmer', 'serviceProvider', 'agent']

  useEffect(() => {
    getFarmTypes()
    .then(res => {
      setFarmTypes(res.data)
    })
    .catch(error => {
      console.warn(error)
    })
    
    getServiceTypes()
    .then(res => {
      setServiceTypes(res.data)
    })
    .catch(error => {
      console.warn(error)
    })

  }, [])

  const authenticate = async () => {

  }

  return (
    <Layout {...props}>
      <View style={styles.container}>
        <View>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
        <View style={styles.signUpForm}>
          <InputField title="Name" value={[name, setName]}/>
          <InputField title="Country Code" value={[countryCode, setCountryCode]}/>
          <InputField title="Phone Number" value={[phone, setPhone]}/>
          <InputField title="Crop Type" value={[cropType, setCropType]}/>
          <InputField title="Password" value={[password, setPassword]}/>
          <InputField title="Confirm Password" value={[confirmPassword, setConfirmPassword]}/>
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
