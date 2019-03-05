import React, { Component } from "react";
import { ImageBackground, View, FlatList, GridView } from "react-native";
import { observer } from "mobx-react";
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

class UserLikedComments extends Component {
  render() {
    const { likedComment } = this.props;
    return (
      <Card transparent>
        <CardItem>
          <CardItem>
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
              <View />
              <Text> {likedComment.comment.comment} </Text>
              <View />
            </View>
          </CardItem>
        </CardItem>
      </Card>
    );
  }
}

export default observer(UserLikedComments);
