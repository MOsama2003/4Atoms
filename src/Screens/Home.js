import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { grey, mehroon } from "../Components/Constant";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Search from "../Components/Search";
import RoundBtn from "../Components/RoundBtn";
import LatestProduct from "../Components/LatestProduct";
import Product from "../Components/Product";
import firebase from "firebase/app"; 

const Home = () => {
  const navigation = useNavigation();
  const [latestProducts, setLatestProducts] = useState([]);

    // Reference to the "products" collection
    const productsRef = firebase.firestore().collection("products");

    // Query to get the last 6 products ordered by a timestamp
    const query = productsRef.orderBy("timestamp", "desc").limit(6);

    // Subscribe to the query snapshot changes
    const unsubscribe = query.onSnapshot((snapshot) => {
      const productsData = [];
      snapshot.forEach((doc) => {
        const product = doc.data();
        productsData.push(product);
      });
      setLatestProducts(productsData);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      {/* Heading */}
      <View style={styles.header}>
        <View>
          <Text style={styles.heading}>FOURATOMS</Text>
          <Search />
        </View>
        {/* Bell Icon */}
        <Ionicons
          name="ios-notifications"
          size={28}
          color={grey}
          onPress={() => navigation.navigate("Notifications")}
        />
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 15 }}>
          Categories
        </Text>

        {/* Categories */}
        <RoundBtn />
        <LatestProduct title="Latest Product" />
        <Product data={latestProducts} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 22,
    color: mehroon,
    paddingHorizontal: 20,
  },
});

export default Home;
