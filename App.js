import Navigator from "./navigators/tabNavigator/navigator";
import StackNavigator from "./navigators/stackNavigators/navigator";
// To use navigation you most import NavigationContainer and add navigation inside that.
// The below navigaition is bottom navigation(like instagram) and for more read the documentions (https://reactnavigation.org/docs)

const App = () => {
  return (
    <>
      <StackNavigator />
      {/* <Navigator /> */}
    </>
  );
};

export default App;
