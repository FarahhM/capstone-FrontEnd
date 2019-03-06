import React from "react";
import { Icon } from "native-base";
// import Ex from "./ExampleTab";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStack";
import QoDStack from "./QoDStack";
import QStack from "./Q'sStack";
import LikesStack from "./LikesStack";
import LoginStack from "./LoginStack";
import WelcomeTab from "./WelcomeTab";
const BottomTab = createBottomTabNavigator(
  {
    Questions: QStack,

    QoD: QoDStack,
    Profile: ProfileStack,
    Likes: LikesStack
  },
  {
    //account-heart
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "Profile") {
          iconName = "user";
          iconType = "FontAwesome";
        } else if (routeName === "QoD") {
          iconName = "pencil-circle";
          iconType = "MaterialCommunityIcons";
        } else if (routeName === "Questions") {
          iconName = "appstore-o";
          iconType = "AntDesign";
        } else if (routeName === "Likes") {
          iconName = "thumbs-o-up";
          iconType = "FontAwesome";
        }
        //else if (routeName === "Ex") {
        //   iconName = "thumbs-o-up";
        //   iconType = "FontAwesome";
        // }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#FFFAF0",
      inactiveTintColor: "#948F94",
      style: {
        backgroundColor: "#7e0000"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
