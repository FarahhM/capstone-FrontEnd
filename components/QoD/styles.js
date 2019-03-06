import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderColor: "#7e0000",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  cardItem: {
    borderBottomColor: "#7e0000",
    borderBottomWidth: 30,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  text: {
    fontSize: 20,
    fontFamily: "American Typewriter"
  }
});
export default styles;
