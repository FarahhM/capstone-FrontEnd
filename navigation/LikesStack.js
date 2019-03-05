import { createStackNavigator } from "react-navigation";
import React from "react";
import userLikesScreen from "../components/UserLikes";

const LikesStack = createStackNavigator({
  UserLikes: userLikesScreen
});

export default LikesStack;
