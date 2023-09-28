import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  ScrollView,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from "react-native";
import { useState } from "react";
// What is ract native API: api is a component that does not show you anythings but do something for you like `Stylesheet`. <--comment
// Stylesheet is a api than make a configure you css styles. <--comment
// Stylesheet.create: this method create styles for you. <--comment
// Stylesheet.compose: This method merges to object(style classes) to gether. <--comment

// Platform: this api is a platform detector(web. andeoid, ios) and called like below code. <--comment
// Platform.OS <--comment
// Platform.OS detector is good for small deference betwqeen platforms like color, but if the deference are lagest this don't use this and read below comment. <--comment
// Platform.select() <-comment
// Also if the component between platforms ahve a basic deference again Platform.select() is not a good choise, follow below. <--comment
// Create optimzed component for any platform and use react native To use them(native file extentions). <--comment
// You just need to make a directory and make components with equal name for any plat form with the platform extionstion(test.android.js) and import the class(below code) and react native will detect to what file most be load on any platform. <--comment
// import Home from "./home";

// Images:
// 1. Staitc images: there are the important and useful images like logo and is better that use theme static, but most be in you app local.
// 2. Network images: the images that maybe change like user image or product image or ... and loaded by intenet connection.

// ImageBackground:
// It's like text and you can write any thiing in that but you can also have a background image.

// TextEdit(input):
// When you wanna take some information at user, you can use this.

// Button
// The first notic is that this component is defrence shown between android and IOS.
// The second notic is that you cant costmize this component very much.
// The thirdth notic is that we didn't use that and almost every time use touchable component.

// Touchable
// This components are so useful
// U can add any thing inside this component and make that touchable
// But if you wanna have any costimze reaction to touch(like long press) this component does not help you and you most use pressable component.

// ScrollView
// If your page is largest than a page and nedd to scroll on that you nost use ScrollView Component

// SafeAreaView
// This component helps you to the content does not go under the phone top/below element(like battery percentage), and just works on IOS(>=11) devises.
// In android you can use StatusBar Component or give the view Component margin/padding by yourself.

// StatusBar
// Have hidden property that default is false and by true value the phone status bar will be hided

// RefreshControl
// If you wanna referesh app by scrolling up(like safari) you most use this component.
function App() {
  const [text, setText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const img = { uri: "https://picsum.photos/300/300" };

  // RefershControl
  // return (
  //   <>
  //     <SafeAreaView style={styles.container}>
  //       <StatusBar hidden={true} />
  //       <ScrollView
  //         refreshControl={
  //           <RefreshControl
  //             refreshing={refreshing}
  //             onRefresh={() => {
  //               setRefreshing(true);
  //               setTimeout(() => {
  //                 setRefreshing(false);
  //                 setText("Reloaded");
  //               }, 1500);
  //             }}
  //           />
  //         }
  //       >
  //         <TextInput
  //           value={text}
  //           onChangeText={setText}
  //           style={styles.input}
  //         ></TextInput>
  //         <Text numberOfLines={2} style={styles.textWhite}>
  //           {text}
  //         </Text>
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //       </ScrollView>
  //     </SafeAreaView>
  //   </>
  // );

  // SafeAreaView and StatusBar
  // return (
  //   <>
  //     <SafeAreaView style={styles.container}>
  //       <StatusBar hidden={true} />
  //       <ScrollView>
  //         <TextInput
  //           value={text}
  //           onChangeText={setText}
  //           style={styles.input}
  //         ></TextInput>
  //         <Text numberOfLines={2} style={styles.textWhite}>
  //           {text}
  //         </Text>
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //       </ScrollView>
  //     </SafeAreaView>
  //   </>
  // );

  // ScrollView
  // return (
  //   <>
  //     <View style={styles.container}>
  //       <ScrollView>
  //         <TextInput
  //           value={text}
  //           onChangeText={setText}
  //           style={styles.input}
  //         ></TextInput>
  //         <Text numberOfLines={2} style={styles.textWhite}>
  //           {text}
  //         </Text>
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //         <Image
  //           source={img}
  //           style={{ width: 300, height: 300, marginTop: 15 }}
  //         />
  //       </ScrollView>
  //     </View>
  //   </>
  // );

  // Pressable
  // return (
  //   <>
  //     <View style={styles.container}>
  //       <TextInput
  //         value={text}
  //         onChangeText={setText}
  //         style={styles.input}
  //       ></TextInput>
  //       <Text numberOfLines={2} style={styles.textWhite}>
  //         {text}
  //       </Text>
  //       {/** Pressable basic */}
  //       {/* <Pressable
  //         onPress={() => {
  //           setText("");
  //         }}
  //       >
  //         <Text style={styles.textButton}>pressable</Text>
  //       </Pressable> */}

  //       {/** Pressable In/Out */}
  //       {/* <Pressable
  //         onPressIn={() => {
  //           setText("In");
  //         }}
  //         onPressOut={() => {
  //           setText("Out");
  //         }}
  //       >
  //         <Text style={styles.textButton}>pressable</Text>
  //       </Pressable> */}

  //       {/** Pressable LongPress(500ms) */}
  //       <Pressable
  //         onLongPress={() => {
  //           setText("Long press...");
  //         }}
  //         onPressIn={() => {
  //           setText("In");
  //         }}
  //         onPressOut={() => {
  //           setText("Out");
  //         }}
  //       >
  //         <Text style={styles.textButton}>pressable</Text>
  //       </Pressable>
  //     </View>
  //   </>
  // );

  // Touchable
  // return (
  //   <>
  //     <View style={styles.container}>
  //       <TextInput
  //         value={text}
  //         onChangeText={setText}
  //         style={styles.input}
  //       ></TextInput>
  //       <Text numberOfLines={2} style={styles.textWhite}>
  //         {text}
  //       </Text>
  //       {/** on click does not have any animated reaction */}
  //       {/* <TouchableWithoutFeedback
  //         onPress={() => {
  //           setText("");
  //         }}
  //       >
  //         <Text style={styles.textButton}>clear</Text>
  //       </TouchableWithoutFeedback> */}

  //       {/** on click will hilight */}
  //       {/* <TouchableHighlight
  //         onPress={() => {
  //           setText("");
  //         }}
  //       >
  //         <Text style={styles.textButton}>highlight</Text>
  //       </TouchableHighlight> */}

  //       {/** on click will change opacit */}
  //       <TouchableOpacity
  //         onPress={() => {
  //           setText("");
  //         }}
  //       >
  //         <Text style={styles.textButton}>Opacity</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </>
  // );

  // Button
  // return (
  //   <>
  //     <View style={styles.container}>
  //       <TextInput
  //         value={text}
  //         onChangeText={setText}
  //         style={styles.input}
  //       ></TextInput>
  //       <Text numberOfLines={2} style={styles.textWhite}>
  //         {text}
  //       </Text>
  //       <Button
  //         title="clear"
  //         color="red"
  //         onPress={() => {
  //           setText("");
  //         }}
  //       ></Button>
  //     </View>
  //   </>
  // );

  // TextINput
  // return (
  //   <>
  //     <View style={styles.container}>
  //       <TextInput
  //         value={text}
  //         onChangeText={setText}
  //         style={styles.input}
  //       ></TextInput>
  //       <Text numberOfLines={2} style={styles.textWhite}>
  //         {text}
  //       </Text>
  //     </View>
  //   </>
  // );

  // Image
  // return (
  //   <>
  //     <View style={styles.container}>
  //       {/* Network Image */}
  //       <Image
  //         source={{
  //           uri: "https://picsum.photos/100/100",
  //         }}
  //         style={styles.indexImage}
  //       />
  //       {/* Static Image */}
  //       {/* <Image
  //         source={require("./assets/favicon.png")}
  //         style={styles.indexImage}
  //       /> */}
  //       <Text style={styles.textWhite}>CILIVO</Text>
  //       {/* <Text style={styles.textWhite}>{Platform.OS}</Text> */}
  //     </View>
  //   </>
  // );

  // ImaeBackground
  // return (
  //   <>
  //     <View style={styles.container}>
  //       <ImageBackground
  //         source={{
  //           uri: "https://picsum.photos/300/300",
  //         }}
  //         style={styles.bgImage}
  //       >
  //         <Text style={styles.textWhite}>CILIVO</Text>
  //       </ImageBackground>
  //     </View>
  //   </>
  // );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "android" ? "green" : "blue",
  },
  textWhite: {
    color: "#fff",
    ...Platform.select({
      android: {
        fontSize: 35,
        textDecorationLine: "none",
      },
      ios: {
        fontSize: 40,
        textDecorationLine: "none",
      },
      web: {
        fontSize: 40,
        textDecorationLine: "none",
      },
    }),
  },
  indexImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    // borderRadius: 100 / 2, <--circle
    // borderWidth: 2,
    // borderColor: "white",
    // resizeMode: "contain",
    // resizeMode: "strech",
    // resizeMode: "repeat",
  },
  bgImage: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    height: 40,
    width: 250,
    margin: 12,
    padding: 5,
    fontSize: 24,
    color: "black",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "gray",
  },
  textButton: {
    backgroundColor: "blue",
    color: "white",
    padding: 5,
    width: 100,
    height: 30,
    textAlign: "center",
    borderRadius: 15,
  },
});

// const container = StyleSheet.compose(
//   {
//     flex: 1,
//     justifyContent: "center",
//   },
//   {
//     alignItems: "center",
//     backgroundColor: "green",
//   }
// );

export default App;
