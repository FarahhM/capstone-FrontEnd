import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "black",
    alignSelf: "center",
    fontSize: 35,
    fontFamily: "Baskerville",
    marginBottom: 5
  },
  cardItem: {
    marginTop: 20,
    alignSelf: "stretch"
    // textAlign: "right",

    // borderBottomColor: "black",
    // borderBottomWidth: 1,
    // width: "90%"
  },
  text: {
    color: "black",
    fontSize: 25,
    marginBottom: 10
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 20
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontFamily: "Baskerville",
    textDecorationLine: "underline",
    textDecorationColor: "black"
  }
});
export default styles;
