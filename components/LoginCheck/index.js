import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import React, { Component } from "react";
import { withNavigation } from "react-navigation";
//Components
import Profile from "../Profile";
import Login from "../Login";
class LoginCheck extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return authStore.user ? <Profile /> : <Login />;
  }
}
export default new withNavigation(observer(LoginCheck));
