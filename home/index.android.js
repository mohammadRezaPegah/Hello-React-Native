import { StyleSheet, Text, View, Platform } from "react-native";
function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textWhite}>Hello Android!</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "android" ? "green" : "blue",
  },
  textWhite: {
    color: "#fff",
    fontSize: 35,
    textDecorationLine: "underline",
  },
});

export default Home;
