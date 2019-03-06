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
  Button,
  Right
} from "native-base";
import commentStore from "../../stores/commentStore";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

export default withNavigation(
  observer(
    class Post extends React.Component {
      state = {
        status: false
      };
      componentDidMount() {
        this.setState({
          status:
            true &&
            commentStore.likedComments.find(
              x => x.comment.id === this.props.keyval
            )
        });
      }
      status = keyval => {
        if (keyval) {
          return (
            <Icon
              type="FontAwesome"
              name="thumbs-o-up"
              style={{ color: "#7e0000" }}
            />
          );
        } else {
          return (
            <Icon
              type="FontAwesome"
              name="thumbs-o-up"
              style={{ color: "black" }}
            />
          );
        }
      };

      deleteItem = key => {
        if (!authStore.user) return this.props.navigation.navigate("Login", {});
        if (key === authStore.user.user_id) {
          commentStore.deleteComment(this.props.keyval);
        } else {
          alert("You are not authorized");
        }
      };
      getCount() {
        let count = this.props.val.likes;

        return count;
      }

      handlePostLike() {
        if (!authStore.user) return this.props.navigation.navigate("Login", {});

        commentStore.postLike({ id: this.props.keyval });
        this.setState({
          status: !this.state.status
        });
      }
      render() {
        return (
          <Content>
            <Body>
              <Card>
                <View key={this.props.keyval} style={styles.posts}>
                  <CardItem>
                    <Left>
                      <TouchableOpacity
                        onPress={() => this.deleteItem(this.props.val.user.id)}
                        style={styles.postDelete}
                      >
                        <Icon type="Feather" name="x" />
                      </TouchableOpacity>
                    </Left>
                    <Right>
                      <Text style={styles.nameSize}>
                        {this.props.val.user.username}
                      </Text>
                    </Right>
                  </CardItem>
                  <CardItem style={styles.postCard}>
                    <Right>
                      <Text style={styles.postText}>
                        {this.props.val.comment}
                      </Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Text>{this.getCount()}</Text>
                    <Button transparent onPress={() => this.handlePostLike()}>
                      <Text>{this.status(this.state.status)}</Text>
                    </Button>
                  </CardItem>
                </View>
              </Card>
            </Body>
          </Content>
        );
      }
    }
  )
);

const styles = StyleSheet.create({
  post: {
    fontSize: 25
  },
  nameSize: {
    fontSize: 15
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
