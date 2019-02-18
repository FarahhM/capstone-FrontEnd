import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "native-base";
class Welcome extends Component {
  render() {
    return (
      <Container style={{ justifyContent: "center" }}>
        <Text>WELCOME PAGE!!!</Text>
      </Container>
    );
  }
}

export default Welcome;
