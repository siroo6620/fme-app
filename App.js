import { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useCachedResources from './services/useCachedResources'
import { normalize } from "./Helpers";
import AuthComponent from "./navigation/authComponent";

const Stack = createNativeStackNavigator();

export default function App() {
  const isCachingComplete = useCachedResources()

  if (!isCachingComplete) {
    return null
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="WelcomeMessage"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Auth" component={AuthComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: normalize(40),
  },
});
