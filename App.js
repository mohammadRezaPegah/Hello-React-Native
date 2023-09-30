import { useEffect } from "react";
import { View, Text } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

// Push notifications:
// Here we use expo notification and import that here and also install and import expo device to detect our device(is real or VMware).
// To send test notification use this url https://expo.dev/notifications

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
const App = () => {
  const registerPushNotification = async () => {
    try {
      // Get permission for notification send
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") return;
      // Get token
      const token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "9c1281d0-b257-49a1-ab21-a8e39c76172a",
        })
      ).data;
      console.log("toke:", token);
    } catch (error) {
      console.log("Errors: ", error);
    }
  };

  // Call notification setup in component didmount
  useEffect(() => {
    registerPushNotification();

    // Notification Handeler
    Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification);
    });
  }, []);

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>Cilivo</Text>
      </View>
    </>
  );
};

export default App;
