import * as React from "react";
import { StyleSheet, View } from "react-native";

// import { Feather as Icon } from "@expo/vector-icons";
import { Icon } from "native-base";
// type TabBarProps = {
//   color: string,
//   backgroundColor: string,
//   borderColor: string
// }

export const TABBAR_HEIGHT = 45;
export const TAB_WIDTH = 75;
export const TABBAR_WIDTH = TAB_WIDTH * 2;

export default class TabBar extends React.Component {
  render() {
    // React.Node {
    const { color, borderColor, backgroundColor } = this.props;
    const tabStyle = {
      backgroundColor,
      borderColor
    };
    return (
      <View style={styles.tabs}>
        <View style={[styles.tab, styles.firstTab, tabStyle]}>
          <Icon name="ios-person" from="Ionicons" size={35} {...{ color }} />
        </View>
        <View style={[styles.tab, tabStyle]}>
          <Icon name="ios-person-add" from="Ionicons" {...{ color }} />
        </View>
        {/* <View style={[styles.tab, styles.lastTab, tabStyle]}>
          <Icon name="chrome" size={35} {...{ color }} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    height: TABBAR_HEIGHT
  },
  tab: {
    width: TAB_WIDTH,
    justifyContent: "center",
    alignItems: "center"
  },
  firstTab: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1
  },
  lastTab: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderLeftWidth: 1
  }
});
