import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Item, Input, Button, Text, Icon, Container, Card } from "native-base";

// Store
import authStore from "../../stores/authStore";

import { withNavigation } from "react-navigation";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  static navigationOptions = {
    title: "Login"
  };

  loginUser() {
    authStore.loginUser(this.state, this.props.navigation);
  }
  componentDidMount() {
    authStore.checkForToken();
  }

  render() {
    if (authStore.user) return this.props.navigation.replace("Profile");
    return (
      <Container
        style={{
          justifyContent: "center"
        }}
      >
        <Card style={{ borderColor: "black" }}>
          <Text
            style={{
              marginTop: 20,
              alignSelf: "center",
              fontSize: 35,
              fontFamily: "AcademyEngravedLetPlain"
            }}
          >
            Welcome back!
          </Text>
          <Item>
            <Icon active name="ios-person" style={{ color: "#687373" }} />
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item last>
            <Icon active name="ios-lock" style={{ color: "#687373" }} />
            <Input
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            full
            style={{ backgroundColor: "black" }}
            onPress={() => this.loginUser()}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
          </Button>
          <Button
            full
            light
            transparent
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text
              style={{
                color: "#687373",
                fontSize: 20,
                textDecorationLine: "underline",
                textDecorationColor: "black"
              }}
            >
              New Account
            </Text>
          </Button>
        </Card>
      </Container>
    );
  }
}
export default withNavigation(observer(Login));
