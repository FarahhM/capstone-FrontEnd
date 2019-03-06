import { createStackNavigator } from "react-navigation";
import React from "react";

import Log from "../components/LogIcon";
import WelcomeScreen from "../components/Welcome";
import CommentsScreen from "../components/Comments/";
import PostScreen from "../components/PostComments";
import QoD from "../components/QoD";
import Login from "../components/Login";

import WelcomeTab from "./WelcomeTab";
const QoDStack = createStackNavigator(
  {
    // Welcome: {
    //   screen: WelcomeScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    QoD: QoD,
    Comments: CommentsScreen,

    Login: Login,
    PostComments: PostScreen
  },
  {
    initialRouteName: "QoD",
    defaultNavigationOptions: {
      headerRight: <Log />,
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

export default QoDStack;
