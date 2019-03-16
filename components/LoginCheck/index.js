import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import React, { Component } from "react";

//Components
import Profile from "../Profile";
import Login from "../Login";
import QoD from "../QoD";
class LoginCheck extends Component {
  render() {
    return !authStore.loadingUser ? <Profile /> : <Login />;
  }
}
export default observer(LoginCheck);
