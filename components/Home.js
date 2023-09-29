import { View, Text, StyleSheet, Button } from "react-native";
const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Button
          title="Products"
          onPress={() => {
            navigation.navigate("Products");
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 35,
    color: "black",
  },
});
export default Home;
