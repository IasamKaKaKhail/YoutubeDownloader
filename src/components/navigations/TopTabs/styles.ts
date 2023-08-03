import { StyleSheet, Dimensions } from "react-native";
import { blueGrey400 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

const windowWidth = Dimensions.get("window").width;


const ThemeColors = {
  lightBlue: "dodgerblue",
  white: "white",
  black: "black",

  primary: "#191A22",
  secondary: "#FFC831"

}


const styles = StyleSheet.create({
  topTabsContainer: {
    flexDirection:"column",
    justifyContent: "center",
    width: windowWidth,
    backgroundColor: ThemeColors.primary,
  },
  topTabs: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: ThemeColors.primary,
    marginVertical: 10,
    borderRadius: 100,
    overflow: 'hidden',
    transform: [{ scaleX: 1 }],
  },
  singleTab: {
    width: windowWidth * 0.45,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: ThemeColors.white,
    borderRadius:60,

  },
});

export default styles;