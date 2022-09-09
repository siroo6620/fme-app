import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  View,
  Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonCustom from "./components/Button";
import CustomNavigationBar from "./components/CustomAppBar";
import SignUp from "./components/SignUp";

function HomeScreen({ navigation }) {
  const handler = () => {};
  return (
    <View>
      <View>
        <Image
          style={{
            width: 150,
            height: 150,
            margin: 20,
            alignSelf: "center",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          source={require("./assets/agriculture.png")}
        />
        <Text style={styles.text}>
          Hi 👋 {"\n"}Welcome to the {"\n"}Farming Made{"\n"}Easy App!
        </Text>
        <View style={{ paddingTop: "15%" }}>
          <ButtonCustom
            text={"Login"}
            onPress={() => navigation.navigate("Details")}
          />
          <ButtonCustom text={"Register"} />
        </View>
      </View>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 30,
        padding: 16,
      }}
    >
      <Text
        textAlign="left"
        style={{
          fontSize: 30,
          textAlign: "left",
          color: "rgb(73, 97, 89)",
          fontWeight: "bold",
        }}
      >
        Sign Up
      </Text>
      <SignUp />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.container} hidden={false}>
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 35,
    fontWeight: "500",
    textAlign: "left",
    margin: 16,
    color: "green",
  },
});
