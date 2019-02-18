import React, { Component } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";

//Components
import Logout from "../Logout";
import Login from "../LogIcon";
class userStatus extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return authStore.user ? <Logout /> : <Login />;
  }
}
export default new observer(userStatus);
