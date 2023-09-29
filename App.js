import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import useLocation from "./hooks/useLocation";
// Now we want to make our personal hook, for exam we want to make a hook for all the locations code that we wort in prev commit.
// First of all creat hooks directory.

const App = () => {
  const location = useLocation();
  let [fontsloaded] = useFonts({
    "iran-sanse": require("./assets/fonts/IRANSansWeb.ttf"),
  });
  if (!fontsloaded) {
    return (
      <>
        <View style={styles.container}></View>
      </>
    );
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>سیلیوو - ارتباط بدون واسطه</Text>
        <Text>{JSON.stringify(location)}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "iran-sanse",
  },
  galleryBTN: {
    width: "50%",
    height: 50,
    margin: 2,
    padding: 5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
