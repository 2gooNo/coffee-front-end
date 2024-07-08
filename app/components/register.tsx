import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  ViewBase,
  TextInput,
  Pressable,
} from "react-native";
import CoffeeLogo from "@/assets/images/coffeeLogo";
import { Link } from "expo-router";
import { useState } from "react";
import { useAddUserMutation } from "@/generated";
import inputChecker from "@/utils/registerInputChecker";

export default function Register() {
  const [inputsVal, setInputsVal] = useState({
    fullName: "",
    eMail: "",
    passWord: "",
    confirmPassword: "",
  });
  const [addUserMutation] = useAddUserMutation({
    variables: {
      input: {
        fullName: inputsVal.fullName,
        email: inputsVal.eMail,
        password: inputsVal.passWord,
      },
    },
  });
  console.log(inputsVal);

  async function signIn() {
    // const isError = inputChecker(inputsVal);
    // console.log("helloooo", inputChecker(inputsVal));
    try {
      if (inputChecker(inputsVal) == 1) {
        console.log("Please check youre information");
      } else if (inputChecker(inputsVal) == 2) {
        try {
          await addUserMutation();
          console.log("ok");
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.allcontainer}>
      <View style={styles.headerHider}></View>
      <Image
        source={require("../../assets/images/registerBackImg.png")}
        style={{
          width: 428,
          height: 930,
          position: "absolute",
          top: -46.9,
          opacity: 0.2,
        }}
      ></Image>
      <View style={styles.header}>
        <CoffeeLogo></CoffeeLogo>
        <Text style={styles.registerText}>Register your account</Text>
      </View>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.registerInput}
          placeholder="Full Name"
          placeholderTextColor={"#828282"}
          onChangeText={(value) =>
            setInputsVal({ ...inputsVal, fullName: value })
          }
          value={inputsVal.fullName}
        ></TextInput>
        <TextInput
          style={styles.registerInput}
          placeholder="E-mail Address"
          placeholderTextColor={"#828282"}
          onChangeText={(value) => setInputsVal({ ...inputsVal, eMail: value })}
          value={inputsVal.eMail}
        ></TextInput>
        <TextInput
          style={styles.registerInput}
          placeholder="Password"
          placeholderTextColor={"#828282"}
          onChangeText={(value) =>
            setInputsVal({ ...inputsVal, passWord: value })
          }
          value={inputsVal.passWord}
        ></TextInput>
        <TextInput
          style={styles.registerInput}
          placeholder="Confirm Password"
          placeholderTextColor={"#828282"}
          onChangeText={(value) =>
            setInputsVal({ ...inputsVal, confirmPassword: value })
          }
          value={inputsVal.confirmPassword}
        ></TextInput>
        <Pressable onPressIn={() => signIn()} style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </Pressable>
      </View>
      <View style={styles.loginRouterSection}>
        <Text style={styles.loginRouteText}>Already have an account ?</Text>
        <Link href="/login">
          <Text style={styles.loginText}>login</Text>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  allcontainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "relative",
    paddingTop: 70,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  headerHider: {
    position: "absolute",
    top: -46.9,
    height: 46.9,
    width: Dimensions.get("window").width,
    backgroundColor: "#000000",
    zIndex: 3,
  },
  header: {
    gap: 21,
    height: "auto",
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: 24,
  },
  inputSection: { marginTop: 40, gap: 29 },
  registerInput: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 18,
    backgroundColor: "#16181C",
    width: 370,
    height: 70,
    borderRadius: 10,
    paddingLeft: 23,
    alignItems: "center",
    color: "#FFFFFF",
  },

  registerButton: {
    width: 370,
    height: 70,
    backgroundColor: "#CE9760",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 20,
    color: "#543A20",
  },
  loginRouterSection: {
    flexDirection: "row",
    marginTop: 80,
  },
  loginRouteText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#FFFFFF",
    fontSize: 18,
  },
  loginText: {
    color: "#CE9760",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 18,
  },
});
