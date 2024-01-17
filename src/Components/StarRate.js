// StarRate.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const StarRate = ({ rate, onStarPress }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => onStarPress(i)}>
          <AntDesign
            name={i <= rate ? "star" : "staro"}
            size={15}
            color={i <= rate ? "gold" : "grey"}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
      {renderStars()}
      <Text>(10)</Text>
    </View>
  );
};

export default StarRate;
