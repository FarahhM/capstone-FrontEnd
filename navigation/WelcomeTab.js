import { createStackNavigator, createAppContainer } from "react-navigation";

import BottomTab from "./BottomTab";
import WelcomePage from "../components/Welcome";
import Slider from "../components/Slider";
import Login from "../components/Login";
import Register from "../components/Register";
import QoD from "../components/QoD";
const MyNav = createStackNavigator(
  {
    // Intro: Intro,
    Slider: Slider,
    Welcome: { screen: WelcomePage },
    BottomTab: BottomTab,
    Login: Login,
    QoD: QoD,
    Register: Register
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
