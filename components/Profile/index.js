import React, { Component } from "react";
// NativeBase Components
import {
  Button,
  CardItem,
  Card,
  Content,
  Container,
  Right,
  Left
} from "native-base";
import { Text, Alert } from "react-native";
import { observer } from "mobx-react";
import styles from "./styles";
import authStore from "../../stores/authStore";
import Loading from "../Loading/index";
import { withNavigation } from "react-navigation";

import LogExample from "../LogExample";

class Profile extends Component {
  componentDidMount() {
    // console.log("Logged in ? ", authStore.loadingUser);
  }
  render() {
    if (authStore.loadingProfile && authStore.profile.length < 1) {
      return <Loading />;
    } else {
      let userProfile = authStore.profile[0];
      // console.log("Inside the user profile", authStore.profile);
      return (
        <Container style={{ justifyContent: "center" }}>
          <Card style={{ borderColor: "#7e0000", borderWidth: 4 }}>
            <CardItem style={styles.cardItem}>
              <Right>
                <Text style={styles.text}>{userProfile.first_name}</Text>
              </Right>
              <Left>
                <Text style={styles.text}>الاسم الأول : </Text>
              </Left>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Right>
                <Text style={styles.text}>{userProfile.last_name}</Text>
              </Right>
              <Left>
                <Text style={styles.text}>الاسم الثاني :</Text>
              </Left>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Right>
                <Text style={styles.text}>{userProfile.username}</Text>
              </Right>
              <Left>
                <Text style={styles.text}>اسم المستخدم :</Text>
              </Left>
            </CardItem>

            <CardItem
              style={{
                marginTop: 20,
                width: "90%"
              }}
            >
              <Right>
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    fontFamily: "Baskerville",
                    marginRight: 5
                  }}
                >
                  {authStore.user.email}
                </Text>
              </Right>
              <Left>
                <Text
                  style={{
                    color: "black",
                    fontSize: 25,
                    fontFamily: "Baskerville",
                    paddingRight: 5
                  }}
                >
                  البريد الإلكتروني:
                </Text>
              </Left>
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

export default observer(Profile);
