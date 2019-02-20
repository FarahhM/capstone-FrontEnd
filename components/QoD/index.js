import React, { Component } from "react";
import { Card, CardItem, Text, View, Content } from "native-base";
import UserStatus from "../UserStatus";
import styles from "./styles";
import Comments from "../Comments";
import qod from "../../stores/qoDStore";

class QoD extends Component {
  static navigationOptions = () => ({
    headerRight: <UserStatus />,

    title: "Question of The Day"
    // headerRight: (
    //   <Button light transparent onPress={() => navigation.navigate("Cart")}>
    //     <Icon type="FontAwesome" name="shopping-bag" color="white" />
    //   </Button>
    // )
  });
  handle() {
    qod.fetchQoD();
  }
  render() {
    this.handle();
    console.log(qod.questionofDay.question);
    return (
      <Content>
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Text style={styles.text}>{qod.questionofDay.question} </Text>
          </CardItem>
        </Card>
        <Comments />
      </Content>
    );
  }
}

export default QoD;
