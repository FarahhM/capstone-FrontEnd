import { createStackNavigator } from "react-navigation";
import React from "react";
import categoryScreen from "../components/Category";

import questionListScreen from "../components/QuestionList";
import questionDetailScreen from "../components/QuestionDetail";
const CategoryStack = createStackNavigator({
  category: categoryScreen,
  QuestionList: questionListScreen,
  QuestionDetail: questionDetailScreen
});

export default CategoryStack;
