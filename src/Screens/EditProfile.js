import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { grey, white } from "../Components/Constant";
const EditProfile = () => {
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };
  const [togglepassword, setTogglepassword] = useState(false);
  const [profile, setProfile] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFreAtrOzdfbsrEHLCtHyBDY4x80z6RBeVA&usqp=CAU"
  );
  const dummyData = {
    firstName: "Areeha",
    lastName: "Fareed",
    email: "areehaf23@gmail.com",
    country: "Pakistan",
    number: "03072219550",
    password: "123456789",
  };
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <View contentContainerStyle={{ flex: 1 }} style={styles.container}>
        <View style={styles.Topheader}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.icons} onPress={handleGoBack}>
              <Ionicons name="arrow-back" size={24} color={grey} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
              <Ionicons name="notifications-outline" size={24} color={grey} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.ProfileImg}
            source={{
              uri: profile,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setProfile(
                "https://cdn6.f-cdn.com/files/download/38546484/28140e.jpg"
              );
            }}
          >
            <Image
              style={styles.edit}
              source={require("../../assets/pen.png")}
            />
          </TouchableOpacity>
          <Text style={styles.Text}>
            {dummyData.firstName} {dummyData.lastName}
          </Text>
          <View>
            <Text style={styles.textEmail}>{dummyData.email}</Text>
          </View>
        </View>
        <SafeAreaView style={styles.container1}>
          <TextInput
            style={styles.input}
            placeholder={dummyData.firstName}
            placeholderTextColor="#A9A9A9"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder={dummyData.lastName}
            placeholderTextColor="#A9A9A9"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder={dummyData.email}
            placeholderTextColor="#A9A9A9"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder={dummyData.country}
            placeholderTextColor="#A9A9A9"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder={dummyData.number}
            placeholderTextColor="#A9A9A9"
            keyboardType="numeric"
          />

          <SafeAreaView style={styles.password}>
            <TouchableOpacity
              onPress={() => {
                setTogglepassword(!togglepassword);
              }}
            >
              <Text style={styles.changePassword}>Change Password</Text>
            </TouchableOpacity>
          </SafeAreaView>
          {togglepassword ? (
            <SafeAreaView>
              <TextInput
                style={styles.input}
                placeholder="Enter new password"
                placeholderTextColor="#A9A9A9"
                secureTextEntry // This hides the entered text for passwords
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm new password"
                placeholderTextColor="#A9A9A9"
                secureTextEntry // This hides the entered text for passwords
              />
            </SafeAreaView>
          ) : null}
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: "white", fontSize: 16 }}>Update</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container1: {
    width: "80%",
    alignSelf: "center",
    marginBottom: 100,
  },
  main: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#6d2c00",
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
    height: 50,
    paddingVertical: 5,
    marginVertical: 15,
    justifyContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  input: {
    height: 50,
    borderColor: "#6d2c00",
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 15,
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },
  ProfileImg: {
    borderRadius: 120,
    height: 140,
    width: 140,
  },
  imgContainer: {
    padding: 40,
    height: "42%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  edit: {
    height: 40,
    width: 40,
    zIndex: 1,
    marginTop: -40,
    marginLeft: 100,
  },
  Text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
    marginTop: 40,
  },
  Topheader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 10,
  },
  changePassword: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
  password: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayNone: {
    display: "none",
  },
});
export default EditProfile;
