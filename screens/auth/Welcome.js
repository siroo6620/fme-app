import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import CustomAppHeader from "../../components/CustomAppHeader";
import { normalize } from "../../Helpers";
import { userRoles } from "../../constants/users";

const Welcome = (props) => {
  return (
    <View style={styles.container}>
      <CustomAppHeader {...props} />
      <View style={styles.textImageContainer}>
        <Image style={styles.image} source={require("../../assets/rice.png")} />
        <Text style={styles.text}>What will you be using the FME App for?</Text>
      </View>
      <View style={styles.tileContainer}>
        <Tile
          navigation={props.navigation}
          title="Farmer"
          source={require("../../assets/Farmer.png")}
          role={userRoles.farmer}
        />
        <Tile
          navigation={props.navigation}
          title="Service Provider"
          source={require("../../assets/Officeworker.png")}
          role={userRoles.serviceProvider}
        />
        <Tile
          navigation={props.navigation}
          title="Agent"
          source={require("../../assets/Mechanic.png")}
          role={userRoles.agent}
        />
      </View>
    </View>
  );
};

const Tile = ({ title, source, navigation, role }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SignUp", { role })}
      style={styles.tileContent}
    >
      <View style={styles.tileImageContainer}>
        <Image style={styles.tileImage} source={source} />
      </View>
      <Text style={styles.tileText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: normalize(20),
  },
  textImageContainer: {
    paddingTop: normalize(40),
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    resizeMode: "contain",
  },

  text: {
    fontFamily: "PoppinsSemiBold",
    fontSize: normalize(24),
    textAlign: "center",
    color: "rgb(40, 58, 53)",
  },

  tileContainer: {
    paddingTop: normalize(30),
    flex: 1,
  },
  tileContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(1, 148, 68)",
    padding: normalize(15),
    borderRadius: normalize(10),
    marginVertical: normalize(10),
  },
  tileImageContainer: {
    marginRight: normalize(15),
    padding: normalize(5),
    backgroundColor: "white",
    borderRadius: normalize(5),
  },
  tileImage: {},
  tileText: {
    color: "white",
    marginRight: normalize(10),
    fontSize: normalize(20),
  },
});

export default Welcome;
