import { StyleSheet, Text, View } from "react-native";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { normalize } from "../Helpers";
import SelectDropdown from "react-native-select-dropdown";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const DropDownCountry = forwardRef((props, ref) => {
  const [selectedItem, setSelectedItem] = useState("");

  useImperativeHandle(ref, () => {
    return {
      selctedItem: selectedItem,
    };
  });
  return (
    <View>
      <Text style={styles.inputFontSize}>{props.title}</Text>
      <SelectDropdown
        data={props.data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          props.setCountry(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        defaultButtonText=" "
        defaultValueByIndex={0}
        dropdownStyle={styles.dropdownStyle}
        selectedRowTextStyle={styles.selcetedRowTextStyle}
        rowTextStyle={styles.rowTextStyle}
        search={props.searchable === "true" ? true : ""}
        searchPlaceHolder="Search Country"
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"black"}
              size={14}
            />
          );
        }}
      />
    </View>
  );
});

export default DropDownCountry;

const styles = StyleSheet.create({
  rowTextStyle: {
    fontFamily: "Poppins",
    textAlign: "left",
    fontSize: normalize(16),
    paddingHorizontal: normalize(10),
  },
  selcetedRowTextStyle: {
    color: "rgb(136, 173, 160)",
    fontFamily: "PoppinsBold",
  },
  inputFontSize: {
    fontFamily: "PoppinsBold",
    fontSize: normalize(12),
    marginVertical: normalize(4),
    color: "rgb(136, 173, 160)",
  },
  dropdownStyle: {
    backgroundColor: "white",
    borderRadius: normalize(8),
    paddingHorizontal: normalize(10),
    elevation: 2,
  },
  dropdown1BtnStyle: {
    width: "100%",
    fontFamily: "PoppinsSemiBold",
    padding: normalize(10),
    backgroundColor: "rgb(209, 255, 235)",
    elevation: 1,
    borderRadius: normalize(8),
  },
  dropdown1BtnTxtStyle: {
    color: "black",
    marginVertical: normalize(4),
    fontFamily: "PoppinsSemiBold",
    textAlign: "left",
    fontSize: normalize(12),
  },
});
