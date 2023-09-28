import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
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
function App() {
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
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://picsum.photos/300/300",
          }}
          style={styles.bgImage}
        >
          <Text style={styles.textWhite}>CILIVO</Text>
        </ImageBackground>
      </View>
    </>
  );
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
