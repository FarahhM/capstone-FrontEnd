import React, { Component } from "react";
import {
  ImageBackground,
  View,
  FlatList,
  GridView,
  TouchableOpacity
} from "react-native";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
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
  handlePress() {
    this.props.navigation.navigate("Question", {
      Question: this.props.likedComment.comment
    });
  }
  render() {
    const { likedComment } = this.props;
    return (
      <Card transparent>
        <CardItem>
          <TouchableOpacity onPress={() => this.handlePress()}>
            <Text> {likedComment.comment.user.username} </Text>

            <Text> {likedComment.comment.comment} </Text>
          </TouchableOpacity>
          <View />
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(UserLikedComments));
