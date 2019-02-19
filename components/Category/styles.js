import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
    backgroundColor: "rgba(52, 52, 52, 0.07)",
    fontSize: 44,
    fontWeight: "bold",
    opacity: 2,
    fontFamily: "AcademyEngravedLetPlain",
    position: "absolute"
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row"
  },

  background: {
    width: 390,
    height: 240,
    flex: 1
  }
});
export default styles;
