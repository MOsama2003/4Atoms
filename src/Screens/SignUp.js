import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Btn from "../Components/Btn";
import { mehroon } from "../Components/Constant";
import Field from "../Components/Field";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    // Add validation logic here...
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const authInstance = getAuth();
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
      const user = userCredential.user;

      const actionCodeSettings = {
        handleCodeInApp: true,
        url: 'https://four-atoms.firebaseapp.com',
      };

      await sendEmailVerification(user, actionCodeSettings);
      alert("Verification email sent. Please check your email to verify.");

      // Wait for email verification
      onAuthStateChanged(authInstance, async (user) => {
        if (user && user.emailVerified) {
          // Add user to Firestore after email verification
          const userDocRef = doc(firestore, 'users', user.uid);
          await setDoc(userDocRef, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            // Add any other user data as needed
          });

          alert("User added to Firestore after email verification.");

          // Redirect to login or another screen
          props.navigation.navigate("Login");
        }
      });
    } catch (error) {
      console.error("Error creating account:", error.message);
      alert("Error creating account: " + error.message);
    }
  };

  return (
    <View style={{ alignItems: "center", width: 400 }}>
      <Text
        style={{
          color: mehroon,
          fontSize: 44,
          fontWeight: "bold",
          marginTop: 70,
        }}
      >
        Sign Up
      </Text>
      <Text
        style={{
          color: mehroon,
          fontSize: 19,
          marginTop: 10,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Create a new account
      </Text>
      <View
        style={{
          backgroundColor: "white",
          height: 700,
          width: 410,
          borderTopLeftRadius: 130,
          paddingTop: 50,
          alignItems: "center",
        }}
      >
        <Field
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Field
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Field
          placeholder="Email"
          keyboardType={"email-address"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Field
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Field
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <Btn
          textColor="white"
          bgColor={mehroon}
          btnLabel="Sign Up"
          Press={handleSignUp}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={{ color: mehroon, fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
