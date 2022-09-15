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
import Layout from "../Layout";
import { normalize } from "../../Helpers";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";
import DropDownCountry from "../DropDown";
import { getServiceTypes, postSignupServiceProvider } from "../../requests/serviceProvider";
import { getFarmTypes, postSignupFarmer } from "../../requests/farmer";
import { getCountries } from "../../requests/auth";
import { userRoles } from "../../constants/users";

const SignUp = (props) => {
  const { role } = props.route.params
  const cropTypeList = ["Cassava", "Yam", "Cassava", "Yam", "Cassava"];
  
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [cropType, setCropType] = useState("");
  const [serviceType, setServiceType] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceTypes, setServiceTypes] = useState([]);
  const [countries, setCountries] = useState([])
  const [farmTypes, setFarmTypes] = useState([]);

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
        setServiceTypes(res.data.data);
      })
      .catch((error) => {
        console.warn(error);
      });
    
    getCountries()
      .then((res) => {
        setCountries(res.data.data)
      })
      .catch((error) => {
        console.warn(error);
      });

  }, [])

  const authenticate = async () => {
    if (!name || !countryCode || !phone || !password || !confirmPassword) {
      console.warn("Please provide the necessary information")
      return
    }

    if (isNaN(Number(phone))) {
      console.warn("Invalid phone number entered")
      return
    }

    if (password != confirmPassword) {
      console.warn("Passwords do not match")
      return
    }

    if (role == userRoles.farmer && !cropType) {
      console.warn("Please select crop type")
      return
    }
    
    if (role == userRoles.serviceProvider && !serviceType) {
      console.warn("Please select service type")
      return
    }


    if (role == userRoles.farmer) {

      console.log({
        name,
        phone,
        password,
        password_confirmation: confirmPassword,
        country_code: countryCode.country_code,
        country: countryCode.country,
        farm_type: cropType.farm
      })
      postSignupFarmer({
        name,
        phone,
        password,
        password_confirmation: confirmPassword,
        country_code: countryCode.country_code,
        country: countryCode.country,
        farm_type: cropType.farm
      })
      .then(res => {
        console.warn(res.data)
      })
      .catch(e => {
        console.warn(e)
      })
    }
    
    if (role == userRoles.serviceProvider) {

      postSignupServiceProvider({
        name,
        phone,
        password,
        password_confirmation: confirmPassword,
        country_code: countryCode.country_code,
        country: countryCode.country,
        service_type: serviceType.service
      })
      .then(res => {
        console.warn(res.data)
      })
      .catch(e => {
        console.warn(e)
      })
    }
  };

  const dropDownTile = () => {
    return (
      role === userRoles.farmer ? 
          <DropDownCountry
          searchable="false"
          data={farmTypes}
          title="Crop Type"
          setCountry={setCropType}
          type="cropType"
        /> : 
      role === userRoles.serviceProvider ?
        <DropDownCountry
          searchable="false"
          data={serviceTypes}
          title="Services"
          setCountry={setServiceType}
          type="serviceType"
        /> : null
    )
  }

  return (
    <Layout {...props}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <View>
                <Text style={styles.signUpText}>Sign Up</Text>
              </View>
              <View style={styles.signUpForm}>
                <InputField title="Name" value={[name, setName]} />
                <DropDownCountry
                  setCountry={setCountryCode}
                  searchable="false"
                  data={countries}
                  title="Country Code"
                  type="countries"
                />
                <InputField title="Phone Number" value={[phone, setPhone]} number/>
                {dropDownTile()}
                <InputField title="Password" value={[password, setPassword]} secureTextEntry/>
                <InputField
                  title="Confirm Password"
                  value={[confirmPassword, setConfirmPassword]}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.button}>
                <ButtonCustom
                  title="Procced"
                  onPress={authenticate}
                  // onPress={() => props.navigation.navigate("VerifyAccount")}
                />
              </View>
            </>
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
    marginTop: normalize(10),
    width: "60%",
  },
});
