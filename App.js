// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Detail from "./src/Screens/Detail";
import Home from "./src/Screens/Home";
import MyCart from "./src/Screens/MyCart";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import OrderPlaced from "./src/Screens/OrderPlaced";
import ProgressBar from "./src/Screens/ProgressBar";
import Otp from "./src/Screens/Otp";
import Splash from "./src/Screens/Splash";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons/";
import { grey } from "./src/Components/Constant";
import Favourite from "./src/Screens/Favourite";
import Profile from "./src/Screens/Profile";
import Payment from "./src/Screens/Payment2";
import Checkout from "./src/Screens/Checkout";
import Address from "./src/Screens/Address";
import EditProfile from "./src/Screens/EditProfile";
import MyOrders from "./src/Screens/MyOrders";
import Feedback from "./src/Screens/Feedback";
import Notifications from "./src/Screens/Notifications";
import ForgotPassword from "./src/Screens/ForgotPassword";
import ChangePassword from "./src/Screens/ChangePassword";
import SearchResult from "./src/Screens/SearchResult";
import FACamera from "./src/Screens/Camera";
import Gallery from "./src/Screens/Gallery";
import { GalleryProvider } from "./src/Components/GalleryContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "white",
  },
};

function App() {
  function Bottom() {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={grey}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={25}
                color={grey}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={MyCart}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "cart" : "cart-outline"}
                  size={26}
                  color={grey}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={grey}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <GalleryProvider>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              // options={{
              //   headerShown: false,
              // }}
            />
            <Stack.Screen
              name="Bottom"
              component={Bottom}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="SearchResult" component={SearchResult} />
            <Stack.Screen name="ProgressBar" component={ProgressBar} />
            <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
            <Stack.Screen name="Favourite" component={Favourite} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="Camera" component={FACamera} />
            <Stack.Screen name="Gallery" component={Gallery} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GalleryProvider>
  );
}

export default App;
