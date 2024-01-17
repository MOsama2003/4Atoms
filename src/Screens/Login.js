import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons/";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Btn from "../Components/Btn";
import Field from "../Components/Field";
import { mehroon } from "../Components/Constant";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const nav = useNavigation();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      const authInstance = getAuth();

      // Trim leading/trailing whitespaces from the email
      const trimmedEmail = email.trim();

      const userCredential = await signInWithEmailAndPassword(
        authInstance,
        trimmedEmail,
        password
      );
      const user = userCredential.user;

      // Check if the user's email is verified (optional)
      if (user && !user.emailVerified) {
        alert("Please verify your email before logging in.");
        return;
      }

      // Redirect to the main screen or another screen upon successful login
      nav.navigate("Bottom");
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ alignItems: "center", width: 400 }}>
        <View style={{ width: "50%", height: "29%", alignItems: "center" }}>
          <Image
            style={{
              width: "100%",
              height: "70%",
              marginTop: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
            source={require("../../assets/FOURATOM-TransparentBG.png")}
          />
        </View>

        <Text
          style={{
            fontSize: 23,
            color: mehroon,
            marginTop: 70,
          }}
        >
          Welcome To FOUR ATOMS
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 30,
          }}
        >
          UNLEASH YOUR ATHLETE
        </Text>
        <Field
          placeholder="Email"
          keyboardType={"email-address"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View
          style={{
            borderRadius: 100,
            color: mehroon,
            paddingHorizontal: 20,
            marginTop: 20,
            width: "78%",
            height: 50,
            backgroundColor: "rgb(220, 220, 220)",
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <TextInput
            placeholder="Password"
            secureTextEntry={showPassword}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={mehroon}
          />
          <TouchableOpacity onPress={togglePassword}>
            {showPassword ? (
              <Entypo name="eye" size={24} />
            ) : (
              <Entypo name="eye-with-line" size={24} />
            )}
          </TouchableOpacity>
        </View>

        <Btn
          textColor="white"
          bgColor={mehroon}
          btnLabel="LOGIN"
          Press={handleLogin}
        />
        <View
          style={{
            alignItems: "center",
            width: "78%",
            paddingRight: 16,
            marginBottom: 80,
          }}
        >
          <TouchableOpacity onPress={() => nav.navigate("ForgotPassword")}>
            <Text style={{ color: mehroon, fontSize: 15 }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => nav.navigate("SignUp")}>
            <Text style={{ color: mehroon, fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
