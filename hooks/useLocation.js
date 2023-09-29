import { useEffect, useState } from "react";
import * as Location from "expo-location";

// Now we go to location access.
// U most instal expo location from below command
// npx expo install expo-location
export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    try {
      const result = await Location.requestForegroundPermissionsAsync();

      if (!result.granted) {
        alert("You need to enable permision to access to location!");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
