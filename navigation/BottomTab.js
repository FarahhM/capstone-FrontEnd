import React from "react";
import { Icon } from "native-base";
import Ex from "./ExampleTab";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStack";
import QoDStack from "./QoDStack";
import QStack from "./Q'sStack";

const BottomTab = createBottomTabNavigator(
  {
    QoD: QoDStack,
    Questions: QStack,
    Profile: ProfileStack,
    Likes: QoDStack,
    Ex: Ex
  },
  {
    //account-heart
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "Profile") {
          iconName = "user";
          iconType = "FontAwesome";
        } else if (routeName === "QoD") {
          iconName = "pencil-circle";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "Questions") {
          iconName = "appstore-o";
          iconType = "AntDesign";
        } else if (routeName === "Likes") {
          iconName = "thumbs-o-up";
          iconType = "FontAwesome";
        } else if (routeName === "Ex") {
          iconName = "thumbs-o-up";
          iconType = "FontAwesome";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "#9BF0E0",
      style: {
        backgroundColor: "#282525"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
