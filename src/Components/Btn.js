import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: "78%",
        height: 50,
        paddingVertical: 5,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: textColor, fontSize: 16 }}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}
