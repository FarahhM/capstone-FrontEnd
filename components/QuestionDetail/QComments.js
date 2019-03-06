import React, { Component } from "react";
import { ImageBackground, View, FlatList, GridView } from "react-native";

// NativeBase Components
import {
  Card,
  CardItem,
  CardContent,
  Thumbnail,
  Text,
  Right
} from "native-base";

// Style
import styles from "./styles";

import { withNavigation } from "react-navigation";

class Comments extends Component {
  render() {
    const { commentList } = this.props;
    return (
      <Card style={{ borderColor: "948F94" }}>
        <CardItem>
          <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
            <Right style={{ alignSelf: "stretch" }}>
              <Text>{commentList.user.username}</Text>
            </Right>
            <Text style={styles.name}> {commentList.comment} </Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(Comments);
