import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../components/Home";
import Products from "../../components/Products";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

// To use navigation you most import NavigationContainer and add navigation inside that.
// The below navigaition is bottom navigation(like instagram) and for more read the documentions (https://reactnavigation.org/docs)

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const color = "blue";
  const size = 24;
  return (
    <>
      <NavigationContainer>
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
            component={Products}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="inbox" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigator;
