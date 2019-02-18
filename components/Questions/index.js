import React, { Component } from "react";
import { Card, CardItem, Text, View, Content } from "native-base";
import UserStatus from "../UserStatus";
import styles from "./styles";
class Questions extends Component {
  static navigationOptions = () => ({
    headerRight: <UserStatus />,

    title: "Question of The Day"
    // headerRight: (
    //   <Button light transparent onPress={() => navigation.navigate("Cart")}>
    //     <Icon type="FontAwesome" name="shopping-bag" color="white" />
    //   </Button>
    // )
  });
  render() {
    return (
      <Card style={styles.card}>
        <CardItem style={styles.cardItem}>
          <Text style={styles.text}>
            Question of the day will be displayed here!
          </Text>
        </CardItem>
      </Card>
    );
  }
}

export default Questions;
