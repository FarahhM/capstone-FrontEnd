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
  ListView,
  Right
} from "native-base";

// Style
import styles from "./styles";

import { withNavigation } from "react-navigation";

class Comments extends Component {
  render() {
    const { commentList } = this.props;
    return (
      <Card transparent>
        <CardItem>
          <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
            <View style={styles.line} />
            <Right>
              <Text style={styles.nameSize}>{commentList.user.username}</Text>
            </Right>
            <Text style={styles.name}> {commentList.comment} </Text>
            <View style={styles.line} />
          </View>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(Comments);
