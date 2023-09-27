import { StyleSheet, Text, View } from "react-native";
// What is ract native API: api is a component that does not show you anythings but do something for you like `Stylesheet`. <--comment
// Stylesheet is a api than make a configure you css styles. <--comment
// Stylesheet.create: this method create styles for you. <--comment
// Stylesheet.compose: This method merges to object(style classes) to gether. <--comment
function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textWhite}>CILIVO.COM</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
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

// const container = StyleSheet.compose(
//   {
//     flex: 1,
//     justifyContent: "center",
//   },
//   {
//     alignItems: "center",
//     backgroundColor: "green",
//   }
// );

export default App;
