import { useState, useEffect, useCallback } from "react";
import { StyleSheet } from "react-native";

import { NetworkProvider, ReduxNetworkProvider } from "react-native-offline"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import useCachedResources from './services/useCachedResources'
import { PersistGate } from "redux-persist/integration/react"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthComponent from "./navigation/authComponent";
import { toastConfig } from "./services/toastConfig";
import Toast from "react-native-toast-message";
import { store, persistor} from './store'
import { normalize } from "./services"
import { Provider } from "react-redux"

const Stack = createNativeStackNavigator();

export default function App() {
  const isCachingComplete = useCachedResources()

  if (!isCachingComplete) {
    return null
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ReduxNetworkProvider>
              <NetworkProvider>
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
              </NetworkProvider>
            </ReduxNetworkProvider>
          </PersistGate>
        </Provider>
        <Toast config={toastConfig} visibilityTime={3000} position="bottom"/>
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
