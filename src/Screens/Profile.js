import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { AntDesign, Feather, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { white } from "../Components/Constant";

export default function Profile() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.profileImg}
          source={{
            uri: "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
          }}
        />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>Areeha Fareed</Text>
          <Text style={styles.profileNo}>+92 05465790</Text>
        </View>
      </View>
      <View style={styles.menuContainerOutside}>
        <View style={styles.menuContainer}>
          <View style={styles.menuLine}>
            <View style={styles.menuLine1}>
              <View style={styles.icon}>
                <AntDesign name="user" size={24} color="black" />
              </View>
              <Text style={styles.textLine}>Edit Profile</Text>
            </View>
            <TouchableOpacity onPress={() => nav.navigate("EditProfile")}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.menuLine}>
            <View style={styles.menuLine1}>
              <View style={styles.icon}>
                <MaterialIcons name="linear-scale" size={24} color="black" />
              </View>
              <Text style={styles.textLine}>Size and Preferences</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.menuLine}>
            <View style={styles.menuLine1}>
              <View style={styles.icon}>
                <Feather name="package" size={24} color="black" />
              </View>
              <Text style={styles.textLine}>My Orders</Text>
            </View>
            <TouchableOpacity onPress={() => nav.navigate("MyOrders")}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.menuLine}>
            <View style={styles.menuLine1}>
              <View style={styles.icon}>
                <AntDesign name="picture" size={24} color="black" />
              </View>
              <Text style={styles.textLine}>My Gallery</Text>
            </View>
            <TouchableOpacity onPress={() => nav.navigate("Gallery")}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.menuLine}>
            <View style={styles.menuLine1}>
              <View style={styles.icon}>
                <Entypo name="help" size={24} color="black" />
              </View>
              <Text style={styles.textLine}>Help and Feedback</Text>
            </View>
            <TouchableOpacity onPress={() => nav.navigate("Feedback")}>
              <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  imgContainer: {
    padding: 40,
    backgroundColor: "#4d4d4d",
    height: "42%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    borderWidth: 4,
    borderColor: "#39FF14",
    borderRadius: 120,
    height: 120,
    width: 120,
  },
  profileText: {
    marginTop: 20,
    alignItems: "center",
  },
  profileName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
  },
  profileNo: {
    color: "white",
    fontSize: 18,
  },
  menuLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuLine1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuContainer: {
    width: "85%",
    height: "65%",
    justifyContent: "space-around",
    marginTop: "8%",
  },
  menuContainerOutside: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "58%",
    backgroundColor: white,
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#D3D3D3",
    borderRadius: 100,
    padding: 9,
  },
  textLine: {
    fontWeight: "600",
    marginLeft: 10,
    fontSize: 15,
  },
});
