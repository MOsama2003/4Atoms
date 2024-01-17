import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { grey, lightGrey, mehroon } from "../Components/Constant";
import { useState } from "react";

import Search from "../Components/Search";
import RoundBtn from "../Components/RoundBtn";
import LatestProduct from "../Components/LatestProduct";
import Product from "../Components/Product";
import { product } from "../Components/Data";
import { ScrollView } from "react-native-virtualized-view";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
    >
      <StatusBar style="white" />
      {/* heading */}
      <View style={style.header}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: mehroon,
              justifyContent: "space-between",
              paddingHorizontal: 110,
            }}
          >
            FOURATOMS
          </Text>
          <Search />
        </View>
        {/* bell-icon */}
        <Ionicons
          name="ios-notifications"
          size={24}
          color={grey}
          onPress={() => navigation.navigate("Notifications")}
        />
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 15 }}>
          Categories
        </Text>

        {/* Categories */}

        <RoundBtn />
        <LatestProduct title="Latest Product" />
        <Product data={product} />
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: { flexDirection: "row", marginTop: 50 },
});
export default Home;
