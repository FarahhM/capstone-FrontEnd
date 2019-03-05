import { StyleSheet, Dimensions } from "react-native";
let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  screenView: {
    backgroundColor: "#7e0000",
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    justifyContent: "flex-start",
    marginTop: 15
  },
  touchableLeft: {
    borderColor: "#FFFAF0",
    borderWidth: 2,
    paddingBottom: 3,
    alignItems: "center",
    padding: 5,
    paddingRight: 130,
    paddingLeft: 130
  },
  touchableRight: {
    borderColor: "#FFFAF0",
    borderWidth: 2,
    paddingBottom: 3,
    padding: 5,
    paddingRight: 115,
    paddingLeft: 115,
    alignItems: "center"
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 25,
    color: "#FFFAF0",
    fontWeight: "400",
    fontFamily: "Baskerville"
  },

  buttonText: {
    justifyContent: "center",
    color: "#FFFAF0",
    alignItems: "center",
    fontSize: 25,
    padding: 5,
    paddingRight: 5
  }
});
export default styles;
//backgroundColor: "#F8EDE6",
