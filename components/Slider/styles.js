import { StyleSheet, Dimensions } from "react-native";
let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  screenView: {
    backgroundColor: "#4A4949",
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginLeft: 5
  },

  buttonView: {
    padding: 5,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9BF0E0",
    borderWidth: 3,
    marginLeft: 5
  },
  buttonText: {
    color: "#9BF0E0",
    fontSize: 25,
    marginRight: 5,
    marginLeft: 5,
    justifyContent: "center",
    alignSelf: "center"
  }
});
export default styles;
