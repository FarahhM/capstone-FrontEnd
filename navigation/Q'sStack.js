import { createStackNavigator } from "react-navigation";
import React from "react";
// import ClassificationScreen from "../components/ClassificationList";

// import DetailScreen from "../components/ShopDetail";

// import WelcomeScreen from "../components/Welcome";
// import LoginScreen from "../components/Login";
// import Register from "../components/Register";
// import Log from "../UserStatus";

// import TabBar from "../components/TabBar";
const QuestionsStack = createStackNavigator(
  {
    // Welcome: {
    //   screen: WelcomeScreen,
    //   navigationOptions: {
    //     header: null
    //   }
    // },
    // Classification: ClassificationScreen,
    // TabBar: {
    //   screen: TabBar
    // },
    // Detail: DetailScreen,
    // Login: LoginScreen,
    // Register: Register,
    // Profile: ProfileScreen
  },
  {
    // initialRouteName: "Questions",
    defaultNavigationOptions: {
      // headerRight: <Log />,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black"
      },
      headerTitleStyle: {
        fontFamily: "American Typewriter",

        fontWeight: "300",
        fontSize: 20
      }
    }
  }
);

export default QuestionsStack;
