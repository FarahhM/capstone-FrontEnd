// handlePress() {
//   let result = likeStore.postLike()
// }

// import likeStore from "../../stores/LikeStore";

import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Body,
  Left,
  Right,
  Button
} from "native-base";
import likeComment from "../../stores/AddLikeStore";

export default class Post extends React.Component {
  onChangeLikeComment(commentID) {
    // console.log(commentID);
    let result = likeComment.postLike(commentID);
  }
  render() {
    return (
      <Content>
        <Body>
          <Card>
            <View key={this.props.postList} style={styles.posts}>
              <CardItem>
                <Left>
                  <TouchableOpacity
                    onPress={this.props.handleDelete}
                    style={styles.postDelete}
                  >
                    <Text style={styles.postDeleteText}>X</Text>
                  </TouchableOpacity>
                </Left>
              </CardItem>
              <CardItem style={styles.postCard}>
                <Right>
                  <Text style={styles.postText}>{this.props.postList}</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Button
                  onPress={() =>
                    this.onChangeLikeComment(this.props.postList.id)
                  }
                  // style={{ backgroundColor: "black" }}
                >
                  <Icon type="FontAwesome" name="thumbs-o-up" />
                </Button>
                {/* <Text style={styles.dateText}>{this.props.val.date}</Text> */}
              </CardItem>
            </View>
          </Card>
        </Body>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    fontSize: 25
  },
  postCard: {
    width: 350 //
  },
  postText: {
    fontSize: 16,
    textAlign: "right",
    marginRight: 0
    // alignItems: "stretch"
  },
  postDelete: {
    marginRight: 90
    // padding: 10
    // marginLeft: 40,
    // right: 10,
    // backgroundColor: "#252525"
  },
  postDeleteText: {
    // color: "white"
  },
  dateText: {
    marginTop: 5,
    fontSize: 10
  }
});
