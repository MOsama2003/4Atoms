import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { white, grey } from "../Components/Constant";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigation();

  const handleSendInstruction = async () => {
    try {
      // Simulate sending reset instructions (log a message instead)
      console.log(`Reset instructions sent to ${email}`);

      // Simulate generating a new password
      const newPassword = Math.random().toString(36).slice(-8); // Example: generate an 8-character random password

      // Log the new password (you can use it or implement your logic to handle it)
      console.log(`New password generated for ${email}: ${newPassword}`);

      // Navigate to the ChangePassword screen with the generated password
      nav.navigate("ChangePassword", { email, newPassword });
    } catch (error) {
      console.error("Error handling reset instructions:", error);
    }
  };
  const handleGoBack = () => {
    nav.goBack();
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
      <View style={styles.img}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/worker-with-doubts_1012-193.jpg?size=626&ext=jpg&ga=GA1.1.1345385583.1685465115&semt=ais",
          }}
          style={styles.image}
        />
      </View>
      <View>
        <View style={styles.forgotText}>
          <Text style={styles.heading}>Forgot Password?</Text>
          <View style={styles.textBelowForget}>
            <Text style={styles.text}>
              We can send you the details on how to reset it
            </Text>
            <Text style={styles.text}>Please Enter your e-mail/username</Text>
          </View>
        </View>
      </View>

      <TextInput
        style={{
          borderRadius: 100,
          color: "#6d2c00",
          paddingHorizontal: 20,
          marginTop: 40,
          width: "78%",
          height: 50,
          backgroundColor: "#DCDCDC",
          marginVertical: 10,
        }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Please Enter your e-mail/username"
      ></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: "#6d2c00",
          borderRadius: 100,
          alignItems: "center",
          width: "58%",
          height: 50,
          paddingVertical: 5,
          marginVertical: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleSendInstruction}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Send Instruction</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    resizeMode: "cover",
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
    marginVertical: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: white,
    marginTop: 20,
  },
  heading: {
    color: "#6d2c00",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#4d4d4d",
    textAlign: "left",
  },
  img: {
    marginTop: "10%",
  },
  forgotText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    marginTop: 40,
  },
  textBelowForget: {
    display: "flex",
    alignItems: "flex-start",
    height: "70%",
    justifyContent: "center",
  },
});

export default ForgotPassword;
