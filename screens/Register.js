import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import CustomAppHeader from "../components/CustomAppHeader";
import React from "react";
import ButtonCustom from "../components/Button";

import CountryPicker from "rn-country-dropdown-picker";

const Register = (props) => {
  const handleSelection = (e) => {
    console.log(e);
  };
  return (
    <View style={{ flex: 1, margin: 16 }}>
      <CustomAppHeader {...props} />
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 24 }}>Register</Text>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 14 }}>Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 14 }}>Country Code</Text>
          <CountryPicker
            InputFieldStyle={styles.ContainerStyle}
            DropdownContainerStyle={styles.myDropdownContainerStyle}
            DropdownRowStyle={styles.myDropdownRowStyle}
            Placeholder="choose country ..."
            DropdownCountryTextStyle={styles.myDropdownCountryTextStyle}
            countryNameStyle={styles.mycountryNameStyle}
            flagSize={24}
            selectedItem={handleSelection}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 14 }}>Phone Number</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 14 }}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 14 }}>Confirm Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ButtonCustom text="Procced" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 45,
    backgroundColor: "rgb(211, 254, 235)",
    marginVertical: 10,
    color: "black",
    paddingHorizontal: 10,
    elevation: 2,
    fontSize: 16,
  },

  ContainerStyle: {
    backgroundColor: "rgb(211, 254, 235)",
    paddingHorizontal: 4,
  },
});
export default Register;
