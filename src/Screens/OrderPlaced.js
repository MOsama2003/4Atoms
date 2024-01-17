import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { mehroon } from "../Components/Constant";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const OrderPlaced = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Home");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="white" />
      <MaterialIcons name="verified" size={90} color={mehroon} />
      <Text>Congrats,Your Order is Placed Successfully!</Text>
    </View>
  );
};

export default OrderPlaced;
