import { TouchableOpacity, Text, StyleSheet } from "react-native";
const Number = (props) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.step,
          { backgroundColor: props.a ? "#6d2c00" : "Transparent" },
        ]}
        activeOpacity={0.8}
      >
        <Text style={styles.stepText}>{props.number}</Text>
      </TouchableOpacity>
    </>
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
export default Number;
