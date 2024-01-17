import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import { Video } from "expo-av";
import { white } from "../Components/Constant";

const Splash = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Login");
    }, 5000);
  }, []);
  return (
    // <ImageBackground
    //   source={require("../../assets/bg-shade.png")}
    //   style={styles.backgroundImage}
    // >
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: white,
      }}
    >
      <Video
        source={require("../../assets/fouratomss.mp4")}
        resizeMode="cover"
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        // isLooping
        style={{ width: 300, height: 300, borderRadius: 20 }}
      />
    </View>
    // </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Splash;
