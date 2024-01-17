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
import Payment from "./Payment2";
import { grey, white } from "../Components/Constant";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-virtualized-view";

const Address = () => {
  const nav = useNavigation();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    number: "",
    country: "",
    province: "",
    city: "",
  });

  const handleInputChange = (text, inputName) => {
    setInfo({
      ...info,
      [inputName]: text,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.Topheader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
        <Text style={styles.address}>Address</Text>
        <ProgressBar
          a1={true}
          a2={false}
          a3={false}
          number1={1}
          number2={2}
          number3={3}
        />
      </View>
      <View style={styles.container1}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your First Name"
          placeholderTextColor="#A9A9A9"
          keyboardType="default"
          value={info.firstName}
          onChangeText={(text) => handleInputChange(text, "firstName")}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Last Name"
          placeholderTextColor="#A9A9A9"
          keyboardType="default"
          value={info.lastName}
          onChangeText={(text) => handleInputChange(text, "lastName")}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="#A9A9A9"
          keyboardType="default"
          value={info.number}
          onChangeText={(text) => handleInputChange(text, "number")}
        />
        <TextInput
          style={styles.input}
          placeholder="Select Country"
          placeholderTextColor="#A9A9A9"
          keyboardType="default"
          value={info.country}
          onChangeText={(text) => handleInputChange(text, "country")}
        />
        <TextInput
          style={styles.input}
          placeholder="Select Province"
          placeholderTextColor="#A9A9A9"
          keyboardType="default"
          value={info.province}
          onChangeText={(text) => handleInputChange(text, "province")}
        />
        <TextInput
          style={styles.input}
          placeholder="Select City"
          placeholderTextColor="#A9A9A9"
          keyboardType="default"
          value={info.city}
          onChangeText={(text) => handleInputChange(text, "city")}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate("MyCart")}
        >
          <Text style={styles.btn}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            nav.navigate("Payment");
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

  container1: {
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: "#6d2c00",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },
});

export default Address;
