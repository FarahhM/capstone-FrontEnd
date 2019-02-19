import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStack";
import QoDStack from "./QoDStack";
import QStack from "./Q'sStack";

const BottomTab = createBottomTabNavigator(
  {
    Questions: QStack,
    Profile: ProfileStack,
    QoD: QoDStack,
    Likes: QoDStack
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
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "#778899",
      style: {
        backgroundColor: "black"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
