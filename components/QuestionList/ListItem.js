import React, { Component } from "react";
import { ImageBackground, View, FlatList, GridView } from "react-native";

// NativeBase Components
import {
  Card,
  CardItem,
  CardContent,
  Thumbnail,
  Text,
  Left,
  Icon,
  Content,
  Container,
  ListView
} from "native-base";

// Style
import styles from "./styles";

import { withNavigation } from "react-navigation";

class ListItem extends Component {
  handlePress() {
    this.props.navigation.navigate("QuestionDetail", {
      Detail: this.props.questionlist
    });
  }
  render() {
    const { questionlist } = this.props;
    return (
      <Card
        style={{
          borderColor: "#7e0000",
          borderBottomWidth: 20,
          borderTopWidth: 2,
          borderLeftWidth: 2,
          borderRightWidth: 2
        }}
      >
        <CardItem button onPress={() => this.handlePress()}>
          <CardItem>
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
              <View style={styles.line} />
              <Text style={styles.name}> {questionlist.question} </Text>
              <View style={styles.line} />
            </View>
          </CardItem>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(ListItem);
