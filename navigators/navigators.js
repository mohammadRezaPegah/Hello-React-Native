import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./tabNavigator/navigator";
import StackNavigator from "./stackNavigators/navigator";

// To use navigation you most import NavigationContainer and add navigation inside that.
// The below navigaition is bottom navigation(like instagram) and for more read the documentions (https://reactnavigation.org/docs)

const Navigators = () => {
  return (
    <>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <Navigator />
      </NavigationContainer>
    </>
  );
};

export default Navigators;
