import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "black",
    alignSelf: "center",
    fontSize: 35,
    fontFamily: "AcademyEngravedLetPlain",
    marginBottom: 5
  },
  cardItem: {
    marginTop: 20,
    alignSelf: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "90%"
  },
  text: {
    color: "black",
    fontSize: 25,
    fontFamily: "AcademyEngravedLetPlain"
  },
  button: {
    alignSelf: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 20
  },
  buttonText: {
    color: "black",
    fontSize: 25,
    fontFamily: "AcademyEngravedLetPlain",
    textDecorationLine: "underline",
    textDecorationColor: "#BC8F8F"
  }
});
export default styles;
