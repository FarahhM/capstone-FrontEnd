import React, { Component } from "react";
// NativeBase Components
import { Button, CardItem, Card, Content, Container } from "native-base";
import { Text, Alert } from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Profile extends Component {
  render() {
    return (
      <Container style={{ justifyContent: "center" }}>
        <Text style={styles.container}>User Information:</Text>
        <Card style={{ borderColor: "#BC8F8F" }}>
          <CardItem style={styles.cardItem}>
            <Text style={styles.text}>
              Username:{"\n"}
              {authStore.user.username}
            </Text>
          </CardItem>
          <CardItem
            style={{
              marginTop: 20,

              alignSelf: "center",

              width: "90%"
            }}
          >
            <Text style={styles.text}>
              Email: {"\n"}
              {authStore.user.email}
            </Text>
          </CardItem>
          <CardItem
            style={{
              marginTop: 30,
              alignSelf: "center",
              justifyContent: "center",
              width: "100%"
            }}
          />
        </Card>
        <Button
          transparent
          onPress={() => this.handlePress()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Previous Orders</Text>
        </Button>
      </Container>
    );
  }
}

export default withNavigation(observer(Profile));
