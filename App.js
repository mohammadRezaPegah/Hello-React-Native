import { StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { useFonts } from "expo-font";

// Customize font
// If you wanna add customize font to the your application you most first of all installe below package.
// expo-font
// Add your customized font to the project and define that in the component
const App = () => {
  let [fontsloaded] = useFonts({
    "iran-sanse": require("./assets/fonts/IRANSansWeb.ttf"),
  });
  if (!fontsloaded) {
    return (
      <>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="black" />
        </View>
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
