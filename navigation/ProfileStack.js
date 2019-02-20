import { createStackNavigator } from "react-navigation";
import React from "react";

import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import LoginCheck from "../components/LoginCheck";
import RegisterScreen from "../components/Register";
import UserStatus from "../components/UserStatus";

const ProfileStack = createStackNavigator(
  {
    LoginCheck: LoginCheck,
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "LoginCheck",
    defaultNavigationOptions: {
      title: "My Profile",
      headerRight: <UserStatus />,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black"
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
