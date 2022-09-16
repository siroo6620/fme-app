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
import Layout from "../../components/Layout";
import { normalize } from "../../services";
import InputField from "../../components/InputField";
import ButtonCustom from "../../components/ButtonCustom";
import DropDownCountry from "../../components/DropDown";
import { getServiceTypes, postSignupServiceProvider } from "../../requests/serviceProvider";
import { getFarmTypes, postSignupFarmer } from "../../requests/farmer";
import { registerActions } from "../../store/reducers/registerSlice";
import { useSelector, useDispatch } from "react-redux";
import { ShowToast } from "../../services/toastConfig";
import { getCountries } from "../../requests/auth";
import { userRoles } from "../../constants/users";
import Loader from "../../components/Loader";

const SignUp = (props) => {
  const { role } = props.route.params
  
  const { farmTypes, serviceTypes, countries } = useSelector(state => state.register)
  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [cropType, setCropType] = useState("");
  const [serviceType, setServiceType] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [serviceTypes, setServiceTypes] = useState([]);
  // const [countries, setCountries] = useState([])
  // const [farmTypes, setFarmTypes] = useState([]);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const fetchData = async () => {

      try {
        setLoader(true)
        let res = await getFarmTypes()
        if (res.data) dispatch(registerActions.setFarmTypes(res.data))

        res = await getServiceTypes()
        if (res.data) dispatch(registerActions.setServiceTypes(res.data.data))
        
        res = await getCountries()
        if (res.data) dispatch(registerActions.setCountries(res.data.data))

        setLoader(false)
      } catch (e) {
        console.warn(e)
        setLoader(false)
        ShowToast.error("Network Error")
      }
    }

    fetchData()
  }, [])

  const authenticate = async () => {
    if (!name || !countryCode || !phone || !password || !confirmPassword) {
      ShowToast.error("Please provide the necessary information")
      return
    }

    if (isNaN(Number(phone))) {
      ShowToast.error("Invalid phone number entered")
      return
    }

    if (password != confirmPassword) {
      ShowToast.error("Passwords do not match")
      return
    }

    if (role == userRoles.farmer && !cropType) {
      ShowToast.error("Please select crop type")
      return
    }
    
    if (role == userRoles.serviceProvider && !serviceType) {
      ShowToast.error("Please select service type")
      return
    }


    if (role == userRoles.farmer) {
      const data = {
        name,
        phone,
        password,
        password_confirmation: confirmPassword,
        country_code: countryCode.country_code,
        country: countryCode.country,
        farm_type: cropType.farm
      }

      setLoader(true)
      postSignupFarmer(data)
      .then(res => {
        console.warn(res.data)
        if (res.data.success) {
          ShowToast.success("Registeration Successul")
          props.navigation.navigate("VerifyAccount")
        } else {
          ShowToast.error(res.data.error)
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
    
    if (role == userRoles.serviceProvider) {
      const data = {
        name,
        phone,
        password,
        password_confirmation: confirmPassword,
        country_code: countryCode.country_code,
        country: countryCode.country,
        service_type: serviceType.service
      }
      setLoader(true)
      postSignupServiceProvider(data)
      .then(res => {
        console.warn(res.data)
        if (res.data.success) {
          ShowToast.success("Registeration Successul")
          props.navigation.navigate("VerifyAccount")
        } else {
          ShowToast.error(res.data.error)
        }
      })
      .catch(e => {
        console.warn(e)
        ShowToast.error("Something went wrong")
      })
      .finally(() => {
        setLoader(false)
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
      {loader && <Loader visible={loader} />}
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
    marginTop: normalize(30),
    width: "60%",
  },
});
