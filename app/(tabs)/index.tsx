import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";

export default function HomeScreen() {
  async function TokenChecker() {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      router.navigate("../components/register");
    }
  }
  useEffect(() => {
    TokenChecker();
  }, []);
  return (
    <View style={styles.allcontainer}>
      <View style={styles.headerHider}></View>
      <View style={styles.profileHeader}>
        <View style={styles.profileAndName}>
          {/* <Image
            source={{
              uri: "",
            }}
          ></Image> */}
          <Link href="../components/register">
            <Text>Hello home</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allcontainer: {
    backgroundColor: "#543A20",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "relative",
  },
  headerHider: {
    position: "absolute",
    width: Dimensions.get("window").width,
    top: -46.9,
    backgroundColor: "#543A20",
    height: 46.9,
  },
  profileHeader: {
    width: "auto",
    height: 60,
    marginLeft: 20,
    marginTop: 24.1,
  },
  profileAndName: {
    gap: 14,
    height: 60,
    width: "auto",
  },
});
