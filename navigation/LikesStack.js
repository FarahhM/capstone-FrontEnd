import { createStackNavigator } from "react-navigation";
import React from "react";
import userLikesScreen from "../components/UserLikes";
import userCommentQuestionScreen from "../components/Question";
import userLikedCommentsScreen from "../components/UserLikes/userLikedComments";
const LikesStack = createStackNavigator({
  UserLikes: userLikesScreen,
  userLikedComments: userLikedCommentsScreen,
  Question: userCommentQuestionScreen
});

export default LikesStack;
