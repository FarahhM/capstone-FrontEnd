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
  Right,
  Icon,
  Content,
  Container,
  ListView
} from "native-base";

class UserLikedComments extends Component {
  render() {
    const { likedComment } = this.props;
    return (
      <Card style={{ borderColor: "#948F94", borderWidth: 2 }}>
        <CardItem>
          <CardItem>
            <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
              <View />
              {/* <Right>
                <Text> {likedComment.comment.user.username} </Text>
              </Right> */}
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
