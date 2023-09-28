import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
  Dimensions,
} from "react-native";
import { useState } from "react";

// Dimensions
// With this api you can get device size
// .get('screen') all of screen size
// .get('window') aplication window size
// Notic: this api on orientation does not show action.
function App() {
  const [modaleVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <Button
          title="press"
          onPress={() => {
            alert(JSON.stringify(Dimensions.get("screen")));
          }}
        />
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
});

export default App;
