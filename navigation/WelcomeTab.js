import { createStackNavigator, createAppContainer } from "react-navigation";

import BottomTab from "./BottomTab";
import WelcomePage from "../components/Welcome";
import Slider from "../components/Slider";
import Login from "../components/Login";
import Register from "../components/Register";

const MyNav = createStackNavigator(
  {
    // Intro: Intro,
    Slider: Slider,
    Welcome: { screen: WelcomePage },
    BottomTab: BottomTab,
    Login: Login,

    Register: Register
  },
  {
    initialRouteName: "Slider",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(MyNav);

export default AppContainer;
