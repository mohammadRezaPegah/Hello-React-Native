import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../components/Home";
import Products from "../../components/Products";
import { FontAwesome } from "@expo/vector-icons";
import StackNavigator from "../stackNavigators/navigator";

// To use navigation you most import NavigationContainer and add navigation inside that.
// The below navigaition is bottom navigation(like instagram) and for more read the documentions (https://reactnavigation.org/docs)

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const color = "blue";
  const size = 24;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Porduct"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="inbox" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigator;
