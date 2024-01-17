// SearchResults.js
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { product } from "../Components/Data";
import { lightGrey, grey, white } from "../Components/Constant";
// Assuming you have a product array
import { responsiveHeight } from "react-native-responsive-dimensions";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const SearchResult = ({ route }) => {
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };

  const { searchText } = route.params;

  // Filtering products based on the search text
  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <SafeAreaView style={{ paddingTop: 20, flex: 1, paddingHorizontal: 10 }}>
      <StatusBar style="white" />
      <TouchableOpacity onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color={grey} />
      </TouchableOpacity>
      {/* Display the filtered products */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: lightGrey,
              marginVertical: 10,
              height: responsiveHeight(23),
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 0.4,
                marginHorizontal: 10,
              }}
            >
              <Image
                source={item.img}
                style={{
                  width: 150,
                  height: 160,
                  resizeMode: "contain",
                  borderRadius: 20,
                }}
              />
            </View>
            <View
              style={{
                flex: 0.57,
                height: 170,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginTop: 15,
                  marginVertical: 5,
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  {item.name}
                </Text>
              </View>

              <Text style={{ fontSize: 16 }}>${item.price}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchResult;
