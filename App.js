import { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { normalize } from "./Helpers";
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import VerifyAccount from "./screens/VerifyAccount";
import ResetPassword from "./screens/ResetPassword";
import ConfirmAccount from "./screens/ConfirmAccount";
import WelcomeMessage from "./screens/WelcomeMessage";
import Success from "./screens/Success";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
          PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
          PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  if (appIsReady) {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="WelcomeMessage"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="WelcomeMessage" component={WelcomeMessage} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
            <Stack.Screen name="Success" component={Success} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: normalize(40),
  },
});
