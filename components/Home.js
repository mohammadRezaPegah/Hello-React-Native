import { View, Text, StyleSheet, Button } from "react-native";

// To send information to other component with navigation act like below and in the target i explained how works.
const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Button
          title="Products"
          onPress={() => {
            navigation.navigate("Products", { id: 1 });
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
