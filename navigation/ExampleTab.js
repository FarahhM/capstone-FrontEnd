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
      headerTintColor: "#FFFAF0",
      headerStyle: {
        backgroundColor: "#7e0000"
      },
      headerTitleStyle: {
        fontFamily: "Baskerville",

        fontWeight: "300",
        fontSize: 30
      }
    }
  }
);

export default ProfileStack;
