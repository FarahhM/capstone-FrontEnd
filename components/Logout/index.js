import React, { Component } from "react";
import { observer } from "mobx-react";

// Navigation
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, Icon } from "native-base";

//Store

import authStore from "../../stores/authStore";

class Logout extends Component {
  navigate() {
    if (authStore.user) {
      authStore.logoutUser(this.props.navigation);
    } else {
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <Button light transparent onPress={() => this.navigate()}>
        <Text>
          <Icon
            type="MaterialCommunityIcons"
            name="logout"
            style={{ color: "white" }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(Logout));
