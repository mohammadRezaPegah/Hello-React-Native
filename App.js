import { View } from "react-native";
const App = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "blue",
            width: 100,
            height: 300,
            alignSelf: "flex-start",
          }}
        />
        <View style={{ backgroundColor: "red", width: 100, height: 200 }} />
        <View style={{ backgroundColor: "brown", width: 100, height: 100 }} />
      </View>
    </>
  );
};

export default App;
