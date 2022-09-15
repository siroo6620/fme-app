import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomAppHeader from "../components/CustomAppHeader";
import ButtonCustom from "../components/Button";

const AccountType = (props) => {
  return (
    <View style={{ margin: 16 }}>
      <CustomAppHeader {...props} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          resizeMode="center"
          style={{
            width: 120,
            height: 120,
            alignSelf: "center",
            paddingVertical: 90,
          }}
          source={require("../assets/agriculture.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "green",
              marginVertical: 10,
              paddingVertical: 10,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <Image
              resizeMode="center"
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginVertical: 4,
                marginHorizontal: 10,
              }}
              source={require("../assets/agriculture.png")}
            />
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 24,
                color: "white",
              }}
            >
              Farmer
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              backgroundColor: "green",
              marginVertical: 10,
              paddingVertical: 10,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <Image
              resizeMode="center"
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginVertical: 4,
                marginHorizontal: 10,
              }}
              source={require("../assets/agriculture.png")}
            />
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 24,
                color: "white",
              }}
            >
              Service Provider
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              alignItems: "center",
              backgroundColor: "green",
              marginVertical: 10,
              paddingVertical: 10,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <Image
              resizeMode="center"
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                marginVertical: 4,
                marginHorizontal: 10,
              }}
              source={require("../assets/agriculture.png")}
            />
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 24,
                color: "white",
              }}
            >
              Agent
            </Text>
          </View>
        </View>
      </View>
      <View>
        <ButtonCustom
          text="next"
          onPress={() => props.navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

export default AccountType;

const styles = StyleSheet.create({});
