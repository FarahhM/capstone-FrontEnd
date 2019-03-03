import React from "react";
import { observer } from "mobx-react";

// Navigation
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, Icon } from "native-base";

//Store

import authStore from "../../stores/authStore";

class LogIcon extends React.Component {
  navigate() {
    if (authStore.user) {
      this.props.navigation.navigate("QoDStack");
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
            name="login"
            style={{ color: "#9BF0E0" }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(LogIcon));
