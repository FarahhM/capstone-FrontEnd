import { createStackNavigator } from "react-navigation";
import React from "react";
import Ex from "../components/Example";

const ProfileStack = createStackNavigator(
  {
    Ex: Ex
  },
  {
    initialRouteName: "Ex",
    defaultNavigationOptions: {
      title: "My Profile",
      headerTintColor: "#9BF0E0",
      headerStyle: {
        backgroundColor: "#282525"
      },
      headerTitleStyle: {
        fontFamily: "American Typewriter",

        fontWeight: "300",
        fontSize: 30
      }
    }
  }
);

export default ProfileStack;
