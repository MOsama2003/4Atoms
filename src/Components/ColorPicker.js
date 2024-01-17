import { lightGrey, white, mehroon, WhiteSmoke, grey } from "./Constant";

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ColorPicker = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const colorOptions = [WhiteSmoke, mehroon]; // Add more color options as needed

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text>Color</Text>
        <Feather
          name={isDropdownVisible ? "chevron-up" : "chevron-down"}
          size={24}
          color={grey}
        />
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={styles.colorOptionsContainer}>
          {colorOptions.map((color) => (
            <TouchableOpacity
              key={color}
              onPress={() => handleColorSelection(color)}
              style={[styles.colorOption, { backgroundColor: color }]}
            >
              {selectedColor === color && (
                <Feather name="check" size={16} color="black" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: lightGrey,
    borderRadius: 24,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: grey,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 24,
    width: 134,
    height: 50,
  },
  colorOptionsContainer: {
    flexDirection: "column",
    marginTop: 2,
    alignItems: "center",
  },
  colorOption: {
    width: 120,
    height: 30,
    borderRadius: 15,
    marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default ColorPicker;
