import React, { Component } from "react";
import {
  ImageBackground,
  View,
  FlatList,
  GridView,
  TouchableOpacity
} from "react-native";

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

class Question extends Component {
  render() {
    let item = this.props.navigation.getParam("Question", {}).question;
    // console.log("comment props", item);
    return (
      <Card transparent>
        <CardItem>
          <CardItem>
            <View>
              <View style={{ flex: 1, width: "100%", alignItems: "center" }} />
              <Text> {item.question} </Text>
            </View>
          </CardItem>
        </CardItem>
      </Card>
    );
  }
}

export default Question;
