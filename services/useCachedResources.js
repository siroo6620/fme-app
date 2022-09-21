import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Asset } from 'expo-asset';
import Images from '../constants/images'

// import Images from '../constants/Images'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts & Assets
        await Promise.all([
            Asset.loadAsync([...Images]),
            Font.loadAsync({
                ...Ionicons.font,
                Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
                PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
                PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
            })
        ])


      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
