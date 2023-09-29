import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

// Now we go to location access.
// U most instal expo location from below command
// npx expo install expo-location
const App = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const result = await Location.requestForegroundPermissionsAsync();

      if (!result.granted) {
        alert("You need to enable permision to access to location!");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getLocation();
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
