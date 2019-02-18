import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStack";
import Questions from "./Q'sStack";

const BottomTab = createBottomTabNavigator(
  {
    Questions: Questions,
    You: ProfileStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "Questions") {
          iconName = "comment-question-outline";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "You") {
          iconName = "account-heart";
          iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: true,
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
