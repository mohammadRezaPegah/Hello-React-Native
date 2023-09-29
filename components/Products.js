import { View, Text, StyleSheet, Button } from "react-native";
const Products = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Products</Text>
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
export default Products;
