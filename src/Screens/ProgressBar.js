import React from "react";
import { View, StyleSheet } from "react-native";
import Number from "../Components/Number";

const ProgressBar = (props) => {
  return (
    <View style={styles.progressSteps}>
      <Number a={props.a1} number={props.number1} />
      <Number a={props.a2} number={props.number2} />
      <Number a={props.a3} number={props.number3} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressSteps: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    top: 60,
  },
  step: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6d2c00",
    marginHorizontal: 5,
  },
  stepText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default ProgressBar;
