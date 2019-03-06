import { createStackNavigator } from "react-navigation";
import React from "react";
import LoginScreen from "../components/Login";

const LikesStack = createStackNavigator({
  Login: LoginScreen
});

export default LoginScreen;
