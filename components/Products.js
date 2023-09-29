import { View, Text, StyleSheet, Button } from "react-native";
// To get information from navigation we have a property called route and with this you can take information, follow the code.
const Products = ({ route }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Products, id: {route.params.id}</Text>
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
    fontSize: 20,
    color: "black",
  },
});
export default Products;
