import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../components/Home";
import Products from "../../components/Products";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          //   options={{
          //     title: "Your Home",
          //     headerStyle: {
          //       backgroundColor: "black",
          //     },
          //     headerTintColor: "white",
          //   }}
        />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
