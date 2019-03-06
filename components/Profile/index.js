import React, { Component } from "react";
// NativeBase Components
import { Button, CardItem, Card, Content, Container } from "native-base";
import { Text, Alert } from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import authStore from "../../stores/authStore";
import Loading from "../Loading/index";
import { withNavigation } from "react-navigation";

import LogExample from "../LogExample";

class Profile extends Component {

  componentDidMount() {
    // if (!authStore.user) return <LogExample />;
    authStore.userInformations();
  }
  render() {
    if (authStore.loading) {
      return <Loading />;
    } else {
      let userProfile = authStore.profile[0];
      return (
        <Container style={{ justifyContent: "center" }}>
          <Card style={{ borderColor: "#BC8F8F" }}>
            <CardItem style={styles.cardItem}>
              <Text style={styles.text}>
                اسم الاول : {"\n"}
                {userProfile.first_name}
              </Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Text style={styles.text}>
                اسم الثاني : {"\n"}
                {userProfile.last_name}
              </Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Text style={styles.text}>
                اسم المستخدم : {"\n"}
                {userProfile.username}
              </Text>
            </CardItem>
            <CardItem
              style={{
                marginTop: 20,
                textAlign: "right",
                marginRight: 0,
                alignSelf: "right",


                width: "90%"
              }}
            >
              <Text style={styles.text}>
                الايميل: {"\n"}
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
          {/* <Button
          transparent
          onPress={() => this.handlePress()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Previous Orders</Text>
        </Button> */}
        </Container>
      );
    }
  }
}

export default withNavigation(observer(Profile));
