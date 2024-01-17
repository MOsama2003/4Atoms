import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useGallery } from "../Components/GalleryContext";
import { GalleryProvider } from "../Components/GalleryContext";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { grey} from "../Components/Constant";
import { useNavigation } from "@react-navigation/native";

const Gallery = () => {
  const { capturedImages } = useGallery(); // Use the GalleryContext hook
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
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
          <Text style={styles.favText}>Gallery</Text>
          <TouchableOpacity onPress={() => nav.navigate("Notifications")}>
            <Ionicons name="notifications-outline" size={24} color={grey} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={capturedImages}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </TouchableOpacity>
        )}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
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
  topHeader: {
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    margin: 2,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 5,
  },
  favText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Gallery;
