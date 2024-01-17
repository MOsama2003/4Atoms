import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";
import { useNavigation } from "@react-navigation/native";
import { grey, white } from "../Components/Constant";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Payment = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.Topheader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
        <Text style={styles.address}>Payment</Text>
        <ProgressBar
          a1={true}
          a2={true}
          a3={false}
          number1={1}
          number2={2}
          number3={3}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate("Address")}
        >
          <Text style={styles.btn}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            nav.navigate("Checkout");
          }}
        >
          <Text style={styles.btn}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
  },
  buttons: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    margin: 10,
    backgroundColor: "#6d2c00",
    borderRadius: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    top: 10,
  },
  Topheader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 40,
  },
  address: {
    position: "absolute",
    top: 6,
    fontSize: 22,
    fontWeight: "bold",
  },
  btn: {
    color: "white",
  },
});

export default Payment;
