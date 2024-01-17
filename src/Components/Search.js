// Search.js
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { grey, lightGrey } from "./Constant";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const nav = useNavigation();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Navigating to the SearchResults screen with the search text
    nav.navigate("SearchResult", { searchText });
  };

  return (
    <View>
      <TouchableOpacity style={styles.searchContainer} onPress={handleSearch}>
        <TextInput
          style={styles.input}
          value={searchText}
          placeholder="Search"
          onChangeText={(text) => setSearchText(text)}
        />
        <Ionicons name="search" size={24} color={grey} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: lightGrey,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 55,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: grey,
  },
});

export default Search;
