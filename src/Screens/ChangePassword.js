// ChangePassword.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { white, grey, mehroon } from "../Components/Constant";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const ChangePassword = ({ route, navigation }) => {
  const nav = useNavigation();
  const { email, newPassword } = route.params;
  const [newPasswordInput, setNewPasswordInput] = useState("");

  const handleChangePassword = () => {
    // Implement your logic to handle the password change
    // For example, make a network request to update the password on your server

    // After changing the password, navigate back to the login screen
    navigation.navigate("Login");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <StatusBar backgroundColor="white" />
      <TouchableOpacity
        onPress={handleGoBack}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
        }}
      >
        <Ionicons name="arrow-back" size={27} color={grey} />
      </TouchableOpacity>

      <Text style={styles.heading}>Change Password</Text>
      <Text style={styles.text}>
        Enter the new password for your account ({email}).
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPasswordInput}
        onChangeText={(text) => setNewPasswordInput(text)}
      />
      <TouchableOpacity
        style={styles.changeButton}
        onPress={handleChangePassword}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Change Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: white,
    marginTop: 20,
  },
  heading: {
    color: "#6d2c00",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    color: "#4d4d4d",
    textAlign: "center",
  },
  input: {
    borderColor: "#6d2c00",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: "#333333",
    width: "78%",
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  changeButton: {
    backgroundColor: "#6d2c00",
    borderRadius: 100,
    alignItems: "center",
    width: "58%",
    height: 50,
    paddingVertical: 5,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChangePassword;
