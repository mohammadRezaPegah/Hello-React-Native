import { View } from "react-native";
const App = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ backgroundColor: "blue", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "red", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "brown", width: 100, height: 100 }} />
      </View>
    </>
  );
};

export default App;
