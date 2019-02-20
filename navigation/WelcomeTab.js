import { createStackNavigator, createAppContainer } from "react-navigation";

import BottomTab from "./BottomTab";
import WelcomePage from "../components/Welcome";
import Intro from "../components/introSlider";
const MyNav = createStackNavigator(
  {
    Intro: Intro,
    BottomTab: BottomTab,
    Welcome: { screen: WelcomePage }
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(MyNav);

export default AppContainer;
