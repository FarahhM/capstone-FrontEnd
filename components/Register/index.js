import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Item, Input, Button, Text, Icon, Container, Card } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    title: "Register"
  };

  signupUser() {
    authStore.signupUser(this.state, this.props.navigation);
    console.log(this.state);
  }

  render() {
    return (
      <Container style={{ justifyContent: "center" }}>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <Text
            style={{
              marginTop: 20,
              alignSelf: "center",
              fontSize: 30,
              fontFamily: "AcademyEngravedLetPlain"
            }}
          >
            Fill the following to continue:
          </Text>
          <Item>
            <Icon active name="ios-person-add" style={{ color: "#687373" }} />
            <Input
              placeholder="First Name"
              autoCapitalize="none"
              onChangeText={first_name => this.setState({ first_name })}
            />
          </Item>
          <Item>
            <Icon active name="ios-person-add" style={{ color: "#687373" }} />
            <Input
              placeholder="Last Name"
              autoCapitalize="none"
              onChangeText={last_name => this.setState({ last_name })}
            />
          </Item>
          <Item>
            <Icon active name="ios-person" style={{ color: "#687373" }} />
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item>
            <Icon
              active
              name="email"
              type="Entypo"
              style={{ color: "#687373" }}
            />
            <Input
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item>
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
            style={{
              backgroundColor: "black",
              fontWeight: "bold",
              marginTop: 10
            }}
            onPress={() => this.signupUser()}
          >
            <Text style={{ fontSize: 20 }}>Register</Text>
          </Button>
        </Card>
      </Container>
    );
  }
}
export default observer(Register);
