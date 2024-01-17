import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { grey } from "../Components/Constant";
const Feedback = () => {
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.Topheader}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icons} onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color={grey} />
          </TouchableOpacity>
          <Text style={styles.orderText}>Feedback/Suggestion</Text>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textcontainer}>
        <View style={styles.text}>
          <Text style={{ fontSize: 17 }}>How can we do better?</Text>

          <Text style={{ fontSize: 15 }}>
            Our developers are working hard to improve the app experience!
            Please quickly tell us here a{" "}
            <Text style={{ color: "#6d2c00", fontWeight: "bold" }}>
              bug/app suggestion
            </Text>{" "}
            or you can also share Feedback
          </Text>
          <Text style={{ fontSize: 14 }}>
            Please let us know about the issue
          </Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={10}
            placeholder="Write a bit more to help us understand the issue."
            placeholderTextColor="#d9d9d9"
          />
          <TextInput
            style={styles.input2}
            numberOfLines={1}
            placeholder="Enter Your Email"
            placeholderTextColor="#d9d9d9"
          />
          <TouchableOpacity style={styles.wideButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wideButton: {
    width: "70%",
    height: 50,
    backgroundColor: "#6d2c00",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  textcontainer: {
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
    marginTop: 15,
    padding: 15,
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: "95%",
    marginTop: 15,
    marginBottom: 4,
  },
  Topheader: {
    alignItems: "center",
    width: "100%",
    marginTop: 45,
  },
  orderText: {
    fontSize: 24,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 15,
    padding: 8,
    marginTop: 20,
    textAlignVertical: "top",
  },
  input2: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 15,
    padding: 8,
    marginTop: 10,
  },
});
export default Feedback;
