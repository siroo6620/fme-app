import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { normalize } from "../Helpers";
import InputField from "../components/InputField";
import ButtonCustom from "../components/ButtonCustom";
import { getFarmTypes } from "../requests/farmer";
import DropDownCountry from "./DropDown";
import { getServiceTypes } from "../requests/serviceProvider";

const SignUp = (props) => {
  const countries = [
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
    "Egypt",
    "Canada",
    "Australia",
    "Ireland",
  ];
  const cropTypeList = ["Cassava", "Yam", "Cassava", "Yam", "Cassava"];

  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [cropType, setCropType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceTypes, setServiceTypes] = useState([]);
  const [farmTypes, setFarmTypes] = useState([]);

  const authTypes = ["farmer", "serviceProvider", "agent"];

  useEffect(() => {
    getFarmTypes()
      .then((res) => {
        setFarmTypes(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });

    getServiceTypes()
      .then((res) => {
        setServiceTypes(res.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const authenticate = async () => {};

  return (
    <Layout {...props}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <Text style={styles.signUpText}>Sign Up</Text>
            </View>
            <View style={styles.signUpForm}>
              <InputField title="Name" value={[name, setName]} />
              {/* <InputField
            title="Country Code"
            value={[countryCode, setCountryCode]}
          /> */}
              <DropDownCountry
                setCountry={setCountryCode}
                searchable="true"
                data={countries}
                title="Country Code"
              />
              <InputField title="Phone Number" value={[phone, setPhone]} />
              <DropDownCountry
                searchable="false"
                data={cropType}
                title="Crop Type"
                setCountry={setCropType}
              />
              <InputField title="Password" value={[password, setPassword]} />
              <InputField
                title="Confirm Password"
                value={[confirmPassword, setConfirmPassword]}
              />
            </View>
            <View style={styles.button}>
              <ButtonCustom
                title="Procced"
                onPress={() => props.navigation.navigate("VerifyAccount")}
              />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
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
