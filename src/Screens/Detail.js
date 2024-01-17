import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { grey, lightGrey, mehroon, white } from "../Components/Constant";
import { Ionicons, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";
import ColorPicker from "../Components/ColorPicker";
import { addToCart } from "../../Redux/CartSlice";
import StarRate from "../Components/StarRate";
import FACamera from "./Camera";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../Redux/actions";

const Detail = ({ route }) => {
  const productData = route.params.main;
  const { _id, name, price, rating, img } = productData;

  const favorites = useSelector((state) => state.favorites);

  const handleFavoritePress = () => {
    dispatch(toggleFavorite(productData._id));
    setIsFavorite(!isFavorite);
  };

  const nav = useNavigation();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rate, setRate] = useState(0);
  const dispatch = useDispatch();

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };
  const handleStarPress = (selectedRating) => {
    setRate(selectedRating);
  };
  return (
    <SafeAreaView
      backgroundColor="white"
      style={{ paddingTop: 20, flex: 1, paddingHorizontal: 10 }}
    >
      <StatusBar backgroundColor="white" />
      <View
        style={{
          paddingTop: 0,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {img && (
          <Image
            source={img}
            style={{
              width: 370,
              height: 400,
              borderRadius: 24,
              alignItems: "center",
            }}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          justifyContent: "space-between",
          width: 410,
          paddingHorizontal: 7,
          marginTop: 50,
        }}
      >
        <Ionicons
          onPress={() => {
            nav.goBack(Home);
          }}
          name="arrow-back"
          size={26}
          color={grey}
        />
        <TouchableOpacity onPress={handleFavoritePress}>
          {isFavorite ? (
            <Ionicons name="md-heart-sharp" size={26} color={mehroon} />
          ) : (
            <Ionicons name="md-heart-outline" size={26} color={grey} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20, gap: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 23, color: grey }}>
            {name}
          </Text>
          <Text style={{ fontSize: 16, color: grey, marginTop: 10 }}>
            ${price}
          </Text>
        </View>
        <StarRate rate={rate} onStarPress={handleStarPress} />
        <View style={{ gap: 5 }}>
          <Text>
            You'll find the latest innovation in gym clothing and accessories to
            help you perform at your best
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Size</Text>
          <View style={{ flexDirection: "row", marginVertical: 12 }}>
            <TouchableOpacity
              style={[
                styles.checkBoxContainer,
                selectedSize === "XS" && styles.selectedCheckBox,
              ]}
              onPress={() => handleSizeSelection("XS")}
            >
              <Text style={[selectedSize === "XS" && styles.checkBoxText]}>
                XS
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.checkBoxContainer,
                selectedSize === "S" && styles.selectedCheckBox,
              ]}
              onPress={() => handleSizeSelection("S")}
            >
              <Text style={[selectedSize === "S" && styles.checkBoxText]}>
                S
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.checkBoxContainer,
                selectedSize === "M" && styles.selectedCheckBox,
              ]}
              onPress={() => handleSizeSelection("M")}
            >
              <Text style={[selectedSize === "M" && styles.checkBoxText]}>
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.checkBoxContainer,
                selectedSize === "L" && styles.selectedCheckBox,
              ]}
              onPress={() => handleSizeSelection("L")}
            >
              <Text style={[selectedSize === "L" && styles.checkBoxText]}>
                L
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.checkBoxContainer,
                selectedSize === "XL" && styles.selectedCheckBox,
              ]}
              onPress={() => handleSizeSelection("XL")}
            >
              <Text style={[selectedSize === "XL" && styles.checkBoxText]}>
                XL
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: lightGrey,
              height: 50,
              width: 134,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: grey,
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 12,
              borderRadius: 24,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              style={{
                height: 32,
                width: 32,
                borderRadius: 16,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="minus" color={grey}></Feather>
            </TouchableOpacity>
            <Text>{quantity}</Text>

            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1);
              }}
              style={{
                height: 32,
                width: 32,
                borderRadius: 16,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="plus" color={grey}></Feather>
            </TouchableOpacity>
          </View>
          <ColorPicker />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(addToCart(productData));
              // nav.navigate("MyCart");
            }}
          >
            <Feather name="shopping-cart" size={22} color={white} />
            <Text style={{ marginLeft: 12, color: white }}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="camera"
              onPress={() => {
                nav.navigate("Camera");
              }}
              size={36}
              color={mehroon}
              style={{ marginTop: 17 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  checkBoxContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth: 1,
    marginRight: 12,
    backgroundColor: lightGrey,
    borderColor: grey,
  },
  selectedCheckBox: {
    backgroundColor: mehroon,
  },
  checkBoxText: {
    color: "white",
    fontSize: 12,
  },
  button: {
    marginTop: 17,
    height: 45,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: mehroon,
    width: 300,
  },
});

export default Detail;
