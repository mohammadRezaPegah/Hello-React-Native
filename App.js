import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import { useState } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

// To find phone oriantation we most use outside api(you can find it in reactnative.directory) and called by react-native-community/hooks.
function App() {
  const [modaleVisible, setModalVisible] = useState(false);
  const orientation = useDeviceOrientation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View
          style={{
            width: "100%",
            height: orientation == "portrait" ? "30%" : "100%",
            backgroundColor: "black",
          }}
        ></View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
});

export default App;
