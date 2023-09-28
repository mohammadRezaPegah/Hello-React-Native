import {
  StyleSheet,
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";

// Loading efect
// for loading efect you most use ActivityIndicator component that have 2 prop
// size: small, medium, lage
// color
function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <ActivityIndicator size="large" color="white" />
        <Text numberOfLines={2} style={styles.textWhite}>
          Cilivo
        </Text>
      </SafeAreaView>
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
        textDecorationLine: "none",
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

export default App;
