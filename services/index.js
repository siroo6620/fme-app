import { Dimensions, Platform, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const scale = width / 375;

export const normalize = (size) => {
  /* 
    Dynamic font 
    
    */
  const newSize = size * scale;

  if (Platform.OS == "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const reSize = () => {
  
};
