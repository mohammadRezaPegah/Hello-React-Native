import { StyleSheet, Text, View, Platform } from "react-native";
// What is ract native API: api is a component that does not show you anythings but do something for you like `Stylesheet`. <--comment
// Stylesheet is a api than make a configure you css styles. <--comment
// Stylesheet.create: this method create styles for you. <--comment
// Stylesheet.compose: This method merges to object(style classes) to gether. <--comment

// Platform: this api is a platform detector(web. andeoid, ios) and called like below code. <--comment
// Platform.OS <--comment
// Platform.OS detector is good for small deference betwqeen platforms like color, but if the deference are lagest this don't use this and read below comment. <--comment
// Platform.select() <-comment
// Also if the component between platforms ahve a basic deference again Platform.select() is not a good choise, follow below. <--comment
// Create optimzed component for any platform and use react native To use them(in next commit). <--comment
function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textWhite}>CILIVO.COM</Text>
        <Text style={styles.textWhite}>{Platform.OS}</Text>
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
    ...Platform.select({
      android: {
        fontSize: 35,
        textDecorationLine: "underline",
      },
      ios: {
        fontSize: 40,
        textDecorationLine: "none",
      },
      web: {
        fontSize: 40,
        textDecorationLine: "none",
      },
    }),
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
