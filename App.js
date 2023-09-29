import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

// For working with camera or phone gallery U most use outside apis, we have not native api for this.
// For outside components U can use reactnative.directory or if you are using expo, You can use expos apis from docs.expo.dev

// Notic: to use somthing like gallery first of all you most take the permission from the user, now i'll explain this to U.
// for exam V want on component didmount get the user permission.
// for takinhg permision to gallery we have 2 way, one of they is using the expo-image-picker api and the second is using the api permision(native)
const App = () => {
  const requestPermision = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permision to access to library!");
  };
  useEffect(() => {
    requestPermision();
  }, []);
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
});

export default App;
