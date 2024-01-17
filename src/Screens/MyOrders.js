import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { grey } from "../Components/Constant";

const MyOrders = () => {
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };
  const [itemStatus, setItemStatus] = useState(false);
  const orders = [
    {
      id: 1,
      itemImg:
        "https://www.mrporter.com/variants/images/3633577411310824/in/w960_q60.jpg",
      itemName: "Jacket",
      itemPrice: "$120",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 2,
      itemImg:
        "data:image/jpeg;base64,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",
      itemName: "Track Suit",
      itemPrice: "$250",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "4-1-24",
      dateOfPurchase: "2-1-24",
    },
    {
      id: 3,
      itemImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuLfPjYJMR1paUHj-rCx4RFcidVMLG9UIpA&usqp=CAU",
      itemName: "Track Suit",
      itemPrice: "$40",
      status: "On the way",
      quantity: 1,
      deliveryDate: "12-2-23",
      dateOfPurchase: "2-2-23",
    },
    {
      id: 4,
      itemImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Beeqn8lv8BQMJohhdoZUxSkt9oHmJ6grOQ&usqp=CAU",
      itemName: "Trousers",
      itemPrice: "$10",
      status: "Delivered",
      quantity: 15,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 5,
      itemImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcBg71rSUtYQO1UboINaXRRrWF024664K7w&usqp=CAU",
      itemName: "Shirt",
      itemPrice: "$120",
      status: "On the way",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 6,
      itemImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXi2R6IKHI1YFdOI4PwTJyctES_i7VZEig5w&usqp=CAU",
      itemName: "Shorts",
      itemPrice: "$280",
      status: "Delivered",
      quantity: 1,
      deliveryDate: "12-12-12",
      dateOfPurchase: "2-12-12",
    },
    {
      id: 7,
      itemImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WXLePWMZgnCNPsPD2DUsFBx72Zc275vTuQ&usqp=CAU",
      itemName: "Nike Shoes",
      itemPrice: "$500",
      status: "On the way",
      quantity: 2,
      deliveryDate: "2-8-12",
      dateOfPurchase: "22-7-12",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        {item.itemImg && (
          <Image
            style={styles.image}
            source={{
              uri: item.itemImg,
            }}
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.itemName}</Text>
          <Text style={styles.price}>
            <Text style={{ color: "#000000", fontSize: 13 }}>
              {item.quantity} item,{" "}
            </Text>
            <Text style={{ color: "#000000", fontSize: 13 }}>Total: </Text>
            {item.itemPrice}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.color}>Order Again</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statusCapsule}>
          <Text style={styles.capsuleText}>{item.status}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 10 }}>
            <Text
              style={{ color: "#808080", fontWeight: "normal", fontSize: 10 }}
            >
              Transaction Date:{" "}
            </Text>
            {item.dateOfPurchase}
          </Text>
          <Text style={{ fontSize: 10 }}>
            <Text
              style={{ color: "#808080", fontWeight: "normal", fontSize: 10 }}
            >
              Shipping Date:{" "}
            </Text>
            {item.deliveryDate}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container1}>
      <View style={styles.topHeader}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={24}
              color={grey}
              onPress={handleGoBack}
            />
          </TouchableOpacity>
          <Text style={styles.orderText}>My Orders</Text>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.container1}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ height: 3, backgroundColor: "white" }} />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: "95%",
    marginTop: 40,
    marginBottom: 10,
  },
  color: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  topHeader: {
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  orderText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardImage: {
    marginLeft: 10,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  container1: {
    flex: 1,
    padding: 5,
  },
  capsuleText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontStyle: "italic",
    textAlign: "center",
    color: "white",
    fontSize: 12,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    alignContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 2,
    borderStyle: "solid",
    borderWidth: 0.2,
    borderColor: "gray",
    borderTopWidth: 0,
  },

  button: {
    backgroundColor: "#6a6a6a",
    width: 100,
    padding: 2,
    borderRadius: 100,
    marginTop: 5,
    alignItems: "center",
  },
  statusCapsule: {
    backgroundColor: "#6a6a6a",
    paddingHorizontal: 8,
    paddingVertical: 1,
    position: "absolute",
    right: 8,
    top: 15,
    borderRadius: 15,
  },
});

export default MyOrders;
