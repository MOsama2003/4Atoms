// MyCart.js
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { white, grey, mehroon, lightGrey } from "../Components/Constant";
import {
  decrementQuantity,
  incrementQuantity,
  deleteCartItem,
} from "../../Redux/CartSlice";

import Home from "./Home";
import Address from "./Address";

const MyCart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);

  // Maintain an array to track the checked state for each item
  const [checkedItems, setCheckedItems] = useState(
    Array(storeData.length).fill(false)
  );
  // State to hold the total amount, shipping fee, and final total
  const [totalAmount, setTotalAmount] = useState(0);
  const shippingFee = 5.0;
  const finalTotal = totalAmount + shippingFee;

  // Calculate total amount whenever storeData or checkedItems change
  useEffect(() => {
    calculateTotalAmount();
  }, [storeData, checkedItems]);

  const calculateTotalAmount = () => {
    let amount = 0;
    storeData.forEach((element, index) => {
      amount += checkedItems[index] ? element.price * element.quantity : 0;
    });
    setTotalAmount(amount);
  };

  const handleCheckBoxClick = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const canCheckout = checkedItems.some((isChecked) => isChecked);

  const handleCheckout = () => {
    if (canCheckout) {
      nav.navigate("Address");
    } else {
      // Show a message to inform the user to select items
      alert("Please select items before checkout.");
    }
  };
  const handleQuantityChange = (item, operation) => {
    if (operation === "increment") {
      dispatch(incrementQuantity(item));
    } else if (operation === "decrement") {
      dispatch(decrementQuantity(item));
    }
  };

  const handleDelete = () => {
    const selectedItemsToDelete = storeData.filter(
      (_, index) => checkedItems[index]
    );
    selectedItemsToDelete.forEach((item) => {
      dispatch(deleteCartItem(item));
    });
    setCheckedItems(Array(storeData.length).fill(false));
  };
  // checkbox functionality
  const CustomCheckbox = ({ isChecked, onClick, color }) => (
    <TouchableOpacity
      onPress={onClick}
      style={{
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
      }}
    >
      {isChecked && (
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 3,
            backgroundColor: color,
          }}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: white,
        gap: 10,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "600",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        My Cart
      </Text>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 10,
          marginTop: 40,
        }}
      >
        <Ionicons
          onPress={() => {
            nav.goBack(Home);
          }}
          name="arrow-back"
          size={25}
          color={grey}
        />
        <TouchableOpacity onPress={handleDelete}>
          <MaterialIcons name="delete" size={24} color={grey} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={storeData}
        renderItem={({ item, index }) => (
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
                  marginTop: 7,
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    marginLeft: 60,
                  }}
                >
                  <CustomCheckbox
                    isChecked={checkedItems[index]}
                    onClick={() => handleCheckBoxClick(index)}
                    color={checkedItems[index] ? mehroon : grey}
                  />
                </View>
              </View>
              <Text>Size: XL</Text>
              <Text>Color: White</Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 50,
                }}
              >
                {/* Quantity container */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 7,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      handleQuantityChange(item, "decrement");
                    }}
                  >
                    <AntDesign name="minuscircleo" size={24} color="black" />
                  </TouchableOpacity>

                  <Text>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      if (item.quantity == 6) {
                      } else {
                        handleQuantityChange(item, "increment");
                      }
                    }}
                  >
                    <AntDesign name="pluscircleo" size={24} color={grey} />
                  </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16 }}>${item.price}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <View style={{ marginBottom: 40 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Total Cost</Text>
          <Text>${totalAmount}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: "#E3E3E3",
            borderBottomWidth: 2,
            paddingTop: 10,
          }}
        >
          <Text>Shipping Fee</Text>
          <Text>${shippingFee}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Total</Text>
          <Text>${finalTotal}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            style={{
              height: 45,
              marginTop: 17,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              backgroundColor: mehroon,
              width: 200,
            }}
            onPress={handleCheckout}
          >
            <Text style={{ marginLeft: 12, color: white, fontWeight: "700" }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyCart;
