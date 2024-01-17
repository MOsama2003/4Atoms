import React from "react";
import { View, Text, TextInput } from "react-native";
import { mehroon } from "./Constant";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: mehroon,
        paddingHorizontal: 20,
        marginTop: 20,
        width: "78%",
        height: 50,
        backgroundColor: "rgb(220, 220, 220)",
        marginVertical: 10,
      }}
      placeholderTextColor={mehroon}
    ></TextInput>
  );
};

export default Field;
