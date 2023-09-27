import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <>
      <View style={styles.bgGreen}>
        <Text style={styles.textWhite}>CILIVO.COM</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  bgGreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  textWhite: {
    color: "#fff",
    fontSize: 35,
  },
});

export default App;
