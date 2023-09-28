import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Text,
  Alert,
  Modal,
  View,
  Image,
} from "react-native";
import { useState } from "react";
// Alert
// Exams:
// Alert.alert('title', 'message', btnArray)
// Alert.prompt('title', 'message', callBack function) **just work on IOS**

// Modal
// First of all u need a state
function App() {
  const [modaleVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modaleVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed");
            setModalVisible(!modaleVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={{ uri: "https://picsum.photos/200/200" }}
                style={{ width: 200, height: 200, marginBottom: 10 }}
              ></Image>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modaleVisible);
                }}
              >
                <Text style={styles.textStyle}>Close!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            setModalVisible(!modaleVisible);
          }}
        >
          <Text style={styles.textStyle}>Modal show!</Text>
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
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    // Andeoid
    elevation: 4,

    // IOS
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default App;
