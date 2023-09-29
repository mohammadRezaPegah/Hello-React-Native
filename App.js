import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

// For working with camera or phone gallery U most use outside apis, we have not native api for this.
// For outside components U can use reactnative.directory or if you are using expo, You can use expos apis from docs.expo.dev

// Notic: to use somthing like gallery first of all you most take the permission from the user, now i'll explain this to U.
// for exam V want on component didmount get the user permission.
// for takinhg permision to gallery we have 2 way, one of they is using the expo-image-picker api and the second is using the api permision.
// To use api permision first of all U most install that with below command.
// npx expo install expo-permissions

// permission names:
// Galery: MEDIA_LIBRARY
// location: LOCATION_FOREGROUND

// Now we go to galry access.
const App = () => {
  const [imgUri, setImageUri] = useState();
  const requestPermision = async () => {
    // Get permission by api Permission
    // const permissions = await Permissions.askAsync(
    //   Permissions.MEDIA_LIBRARY,
    //   Permissions.LOCATION_FOREGROUND
    // );
    // console.log(
    //   permissions.permissions.locationForeground.granted,
    //   permissions.permissions.mediaLibrary.granted
    // );
    // Get permission by image expo picker
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

  const selectImage = async () => {
    // Get iamge
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      // if user does not select iamge the below propert will be true.
      // result.canceled;
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
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
        <Pressable
          style={styles.galleryBTN}
          onPress={() => {
            selectImage();
          }}
        >
          <Ionicons name="camera" size={30} color="white" />
        </Pressable>
        <Image source={{ uri: imgUri }} style={{ width: 300, height: 300 }} />
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
