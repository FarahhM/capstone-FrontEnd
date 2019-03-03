import { createStackNavigator } from "react-navigation";
import React from "react";
// import ClassificationScreen from "../components/ClassificationList";

// import DetailScreen from "../components/ShopDetail";

import WelcomeScreen from "../components/Welcome";
import CommentsScreen from "../components/Comments/";
import PostScreen from "../components/PostComments";
import QoD from "../components/QoD";

const QoDStack = createStackNavigator(
  {
    // Welcome: {
    //   screen: WelcomeScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    QoD: QoD,
    Comments: CommentsScreen
    // PostComments: PostScreen
  },
  {
    initialRouteName: "QoD",
    defaultNavigationOptions: {
      // headerRight: <Log />,
      headerTintColor: "#9BF0E0",
      headerStyle: {
        backgroundColor: "#282525"
      },
      headerTitleStyle: {
        fontFamily: "American Typewriter",

        fontWeight: "300",
        fontSize: 20
      }
    }
  }
);

export default QoDStack;
