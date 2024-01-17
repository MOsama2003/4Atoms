import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { grey } from "../Components/Constant";

const notificationsData = [
  {
    id: 1,
    title: "New Item Arived",
    message: "You have a new message!",
    imageUrl:
      "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
    time: "10:00 AM",
    day: "Monday",
  },
  {
    id: 2,
    title: "On the way",
    message: "Don't forget to pick",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WXLePWMZgnCNPsPD2DUsFBx72Zc275vTuQ&usqp=CAU",
    time: "09:30 AM",
    day: "Tuesday",
  },
  {
    id: 3,
    title: "Best Choice",
    message: "thanks for purchasing ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WXLePWMZgnCNPsPD2DUsFBx72Zc275vTuQ&usqp=CAU",
    time: "08:30 AM",
    day: "Tuesday",
  },
  {
    id: 5,
    title: "Deal",
    message: "Don't miss this deal",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WXLePWMZgnCNPsPD2DUsFBx72Zc275vTuQ&usqp=CAU",
    time: "09:30 AM",
    day: "Tuesday",
  },
  {
    id: 6,
    title: "Reminder",
    message: "Don't forget your appointment tomorrow.",
    imageUrl:
      "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
    time: "09:30 AM",
    day: "Tuesday",
  },
  {
    id: 4,
    title: "Delivered",
    message: "Thanks for trusting ",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuLfPjYJMR1paUHj-rCx4RFcidVMLG9UIpA&usqp=CAU",
    time: "06:00 PM",
    day: "Friday",
  },
  {
    id: 8,
    title: "Best Choice",
    message: "You made a Best choice",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuLfPjYJMR1paUHj-rCx4RFcidVMLG9UIpA&usqp=CAU",
    time: "02:30 AM",
    day: "Thursday",
  },
  {
    id: 7,
    title: "Reminder",
    message: "Don't forget your appointment tomorrow.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuLfPjYJMR1paUHj-rCx4RFcidVMLG9UIpA&usqp=CAU",
    time: "09:30 AM",
    day: "Tuesday",
  },
  {
    id: 9,
    title: "Reminder",
    message: "Don't forget your appointment tomorrow.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXi2R6IKHI1YFdOI4PwTJyctES_i7VZEig5w&usqp=CAU",
    time: "09:30 AM",
    day: "Tuesday",
  },
  {
    id: 10,
    title: "Reminder",
    message: "Don't forget your appointment tomorrow.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXi2R6IKHI1YFdOI4PwTJyctES_i7VZEig5w&usqp=CAU",
    time: "09:30 AM",
    day: "Tuesday",
  },
];
const renderItem = ({ item }) => {
  const words = item.message.split(" ");

  let truncatedMessage = item.message;
  if (words.length > 2) {
    const truncatedWords = words.slice(0, 3);
    truncatedMessage = truncatedWords.join(" ") + "...";
  }

  return (
    <View style={styles.container1}>
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{truncatedMessage}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.day}>{item.day}</Text>
      </View>
    </View>
  );
};

const renderSeparator = () => <View style={{ height: 0 }} />;

const Notifications = () => {
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopHeader}>
        <View>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color={grey} />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              style={{ display: "none" }}
              size={24}
              color={grey}
            />
          </TouchableOpacity> */}
        </View>
        <Text style={styles.orderText}>Notifications</Text>
      </View>
      <FlatList
        data={notificationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  TopHeader: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
  },

  orderText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
    justifyContent: "space-between",
    paddingHorizontal: 110,
  },
  container1: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    position: "relative",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {
    fontSize: 13,
    color: "gray",
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 7,
  },
  timeContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    right: 10,
  },
  time: {
    fontSize: 14,
    marginRight: 5,
  },
  day: {
    fontSize: 14,
    color: "gray",
  },
});

export default Notifications;
