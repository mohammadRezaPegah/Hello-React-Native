import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Text,
  Alert,
} from "react-native";

// Alert
// Exams:
// Alert.alert('title', 'message', btnArray)
// Alert.prompt('title', 'message', callBack function) **just work on IOS**
function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            Alert.alert("title!", "message", [
              {
                text: "Yes",
                onPress: () => {},
              },
              {
                text: "No",
                onPress: () => {},
              },
            ]);
            // Alert.prompt("title!", "message", (text) => alert(text));
          }}
        >
          <Text style={styles.textStyle}>Press here!</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    borderRadius: 15,
    padding: 5,
    elevation: 2, // just support in android
  },
  buttonOpen: {
    backgroundColor: "pink",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
