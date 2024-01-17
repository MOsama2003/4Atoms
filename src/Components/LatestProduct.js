import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { mehroon } from "./Constant";

const LatestProduct = ({ title }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        marginTop: 7,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "600" }}>{title}</Text>
      <Text style={{ fontSize: 14, color: mehroon }}>See All</Text>
    </View>
  );
};

export default LatestProduct;
