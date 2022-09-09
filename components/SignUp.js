import React from "react";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import ButtonCustom from "./Button";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: "",
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password, email, phone_number } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("username", val)}
        />
        <Text>Country Code</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("password", val)}
        />
        <Text>Phone number</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("email", val)}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("phone_number", val)}
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("phone_number", val)}
        />
        <View
          style={{
            alignSelf: "center",
            justifySelf: "center",
            flexDirection: "row",
            flex: 1,
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <ButtonCustom text="Sign up" onPress={this.signUp} />
          <Text>Forgot Password?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 45,
    backgroundColor: "rgb(211, 254, 235)",
    padding: 4,
    color: "white",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
