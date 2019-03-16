import React, { Component } from "react";
import { Root, Spinner } from "native-base";
import { Font } from "expo";
import AppContainer from "./navigation/WelcomeTab";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return <AppContainer />;
  }
}
