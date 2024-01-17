import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { grey, mehroon } from "../Components/Constant";

const Otp = () => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  const otpValidate = () => {
    let otp = "1234";
    let enteredOtp = f1 + f2 + f3 + f4;
    if (enteredOtp == otp) {
      Alert.alert("OTP Matched");
    } else {
      Alert.alert("Incorrect OTP");
    }
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>OTP VERIFICATION</Text>
        <Text style={{ alignSelf: "center", paddingHorizontal: 60 }}>
          (Enter the verification code we have sent you on your email address)
        </Text>
        <View style={styles.OptView}>
          <TextInput
            ref={et1}
            style={[
              styles.inputView,
              { borderColor: f1.length >= 1 ? mehroon : "#000" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={f1}
            onChangeText={(txt) => {
              setF1(txt);
              if (txt.length >= 1) {
                et2.current.focus();
              }
            }}
          />
          <TextInput
            ref={et2}
            style={[
              styles.inputView,
              { borderColor: f2.length >= 1 ? mehroon : "#000" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={f2}
            onChangeText={(txt) => {
              setF2(txt);
              if (txt.length >= 1) {
                et3.current.focus();
              } else if (txt.length < 1) {
                et1.current.focus();
              }
            }}
          />
          <TextInput
            ref={et3}
            style={[
              styles.inputView,
              { borderColor: f3.length >= 1 ? mehroon : "#000" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={f3}
            onChangeText={(txt) => {
              setF3(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et2.current.focus();
              }
            }}
          />
          <TextInput
            ref={et4}
            style={[
              styles.inputView,
              { borderColor: f4.length >= 1 ? mehroon : "#000" },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={f4}
            onChangeText={(txt) => {
              setF4(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et3.current.focus();
              }
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 30,
          }}
        >
          <Text>Don't share this code</Text>
        </View>

        <TouchableOpacity
          disabled={
            f1 !== "" && f2 !== "" && f3 !== "" && f4 !== "" ? false : true
          }
          style={[
            styles.verifyOtpBtn,
            {
              backgroundColor:
                f1 !== "" && f2 !== "" && f3 !== "" && f4 !== ""
                  ? mehroon
                  : "#949494",
            },
          ]}
          onPress={() => {
            otpValidate();
          }}
        >
          <Text style={styles.BtnTxt}>Verify</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: count == 0 ? mehroon : grey,
            }}
            onPress={() => {
              setCount(60);
            }}
          >
            Resend{" "}
          </Text>
          {count !== 0 && (
            <Text style={{ fontSize: 15 }}>{count + "seconds"}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  title: {
    marginTop: 140,
    fontSize: 30,
    fontWeight: "700",
    alignSelf: "center",
    color: grey,
  },
  OptView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  inputView: {
    width: 60,
    height: 60,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  verifyOtpBtn: {
    width: "90%",
    height: 55,
    alignSelf: "center",
    backgroundColor: mehroon,
    borderRadius: 20,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  BtnTxt: {
    color: "white",
    fontSize: 20,
  },
});
export default Otp;
