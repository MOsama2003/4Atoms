import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { lightgrey, mehroon, grey } from "./Constant";
import { categories } from "./index";
import { useState } from "react";
import { FlatList } from "react-native";

const RoundBtn = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingBottom: 5 }}
      >
        {categories.map((cat, index) => {
          return (
            <View
              key={index}
              className="flex justify-center items-center mr-6"
              style={{
                justifyContent: "space-between",
                padding: 9,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(cat.id)}
                className="p-1 rounded-full shadow "
              >
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    backgroundColor: "#DCDCDC",
                    justifyContent: "center",
                    marginLeft: -5,
                    marginBottom: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#DCDCDC",
                      justifyContent: "center",
                    }}
                    source={cat.image}
                  />
                </View>

                <Text style={{ padding: 7 }}>{cat.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RoundBtn;
