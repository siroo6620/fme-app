import { View, Text, Image, Pressable } from "react-native";
import { Appbar } from "react-native-paper";

function CustomNavigationBar(props) {
  {
    console.log(props.navigation);
  }
  return (
    <Appbar.Header
      statusBarHeight={16}
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        textAlign: "center",
        elevation: 10,
        marginBottom: 16,
        elevation: 7,
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <View
          style={{
            backgroundColor: "rgb( 207, 252, 235)",
            width: 40,
            height: 40,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            elevation: 2,
          }}
        >
          <Pressable
            style={{
              flex: 1,
              alignSelf: "center",
              justifySelf: "center",
            }}
            onPress={() => props.navigation.pop()}
          >
            <Image
              height="40"
              width="40"
              style={{
                flex: 1,
                alignSelf: "center",
                justifySelf: "center",
              }}
              source={require("../assets/arrow-drop-left-line.png")}
            />
          </Pressable>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            elevation: 10,
          }}
        >
          <Image
            height="40"
            width="40"
            style={{
              alignSelf: "center",
              justifySelf: "center",
              height: 40,
              width: 40,
            }}
            source={require("../assets/agriculture.png")}
          />
        </View>
      </View>
    </Appbar.Header>
  );
}

export default CustomNavigationBar;
