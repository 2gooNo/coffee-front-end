import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import CoffeeLogo from "@/assets/images/coffeeLogo";
import { Link } from "expo-router";
import { useGetOneUserLazyQuery, useGetOneUserQuery } from "@/generated";
import { useState } from "react";
import logInInputChecker from "@/utils/loginInputsChecker";
import { router } from "expo-router";

export default function Login() {
  const [inputVals, setInputsVal] = useState({
    eMail: "",
    passWord: "",
  });
  const [getData, { loading, data, error }] = useGetOneUserLazyQuery();

  async function signIn() {
    try {
      if (logInInputChecker(inputVals) == 1) {
        console.log("Please check youre information");
      } else if (logInInputChecker(inputVals) == 2) {
        try {
          getData({
            variables: {
              input: {
                email: inputVals.eMail,
                password: inputVals.passWord,
              },
            },
          });
          console.log("data", data);
          // router.replace(`./home/${data}`);
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
        <Text style={styles.registerText}>Welcome to login</Text>
      </View>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.registerInput}
          placeholder="E-mail Address"
          placeholderTextColor={"#828282"}
          onChangeText={(value) => setInputsVal({ ...inputVals, eMail: value })}
          value={inputVals.eMail}
        ></TextInput>
        <TextInput
          style={styles.registerInput}
          placeholder="Password"
          placeholderTextColor={"#828282"}
          onChangeText={(value) =>
            setInputsVal({ ...inputVals, passWord: value })
          }
          value={inputVals.passWord}
        ></TextInput>
        <View style={styles.buttonAndForgotPass}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <Pressable onPressIn={() => signIn()} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.loginRouterSection}>
        <Text style={styles.loginRouteText}>Don’t have an account ?</Text>
        <Link href="./register">
          <Text style={styles.loginText}>register</Text>
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
    paddingTop: 150,
    alignItems: "center",
    backgroundColor: "#000000",
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
    gap: 5,
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
  forgotPassword: {
    color: "#CE9760",
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Poppins",
  },
  buttonAndForgotPass: {
    gap: 21,
    width: "auto",
    height: "auto",
    alignItems: "flex-end",
  },
});
