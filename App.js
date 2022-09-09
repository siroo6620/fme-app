import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Register from "./screens/Register";
import AccountType from "./screens/AccountType";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "transparent" },
};

const App = () => {
  const [loaded] = useFonts({
    Light: require("./assets/fonts/Poppins-Light.ttf"),
    Regular: require("./assets/fonts/Poppins-Regular.ttf"),
    Medium: require("./assets/fonts/Poppins-Medium.ttf"),
    SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    Thin: require("./assets/fonts/Poppins-Thin.ttf"),
    ExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    Bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AccountType" component={AccountType} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
