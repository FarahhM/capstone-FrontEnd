import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Textarea,
  Form,
  Item,
  Icon
} from "native-base";
import Post from "./../PostComments";
import commentStore from "../../stores/commentStore";
import authStore from "../../stores/authStore";

import { observer } from "mobx-react";

import { withNavigation } from "react-navigation";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      comment: ""
    };
  }

  handleAdd() {
    if (!authStore.user) return this.props.navigation.navigate("Profile", {});
    let c = { comment: this.state.comment };
    commentStore.addComment(c);
  }

  componentDidMount() {
    setInterval(() => {
      commentStore.getComment();
    }, 1000);
  }

  render() {
    let posts;
    if (commentStore.items.comment.length > 0) {
      posts = commentStore.items.comment.map(item => {
        if (item.comment) {
          return <Post key={item.id} keyval={item.id} val={item} />;
        }
      });
    }

    return (
      <View style={styles.container}>
        {/* <View style={styles.header} /> */}

        <ScrollView style={styles.scrollContainer}>{posts}</ScrollView>
        <KeyboardAvoidingView behavior="position">
          <View style={{ alignSelf: "flex-end" }}>
            <Card style={styles.footer}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.textInput}
                onChangeText={comment => this.setState({ comment })}
                value={this.state.comment}
                placeholder="
                >> اكتب تعليقك هنا  "
                placeholderTextColor="#67746D"
                underlineColorAndroid={commentStore.trans}
              />
              <TouchableOpacity
                onPress={() => this.handleAdd()}
                style={styles.addButton}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
  addPost() {
    // console.log(this.state.postText);
    if (this.state.postText) {
      var d = new Date();
      this.state.postList.push[
        {
          date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
          post: this.state.postText
        }
      ];
      // console.log("I'm the list", this.state.postList);
      this.setState({ postList: this.state.postList });
      this.setState({ postText: "" });
      commentPost = this.state.postText;
      // console.log(ss);
      axios
        .post("http://127.0.0.1:8000/api/comment/", { comment: commentPost })
        .then(res => res.data)
        .then(data => data)
        .catch(err => console.log(err));
    }
  }
}
export default withNavigation(observer(Comments));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    alignSelf: "stretch",
    marginTop: 35,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  headerText: {
    fontWeight: "600",
    color: "#252525",
    fontSize: 20,
    padding: 26
  },
  scrollContainer: {
    flex: 1
  },
  footer: {
    marginBottom: 10,

    width: 370
  },
  textInput: {
    textAlign: "right",
    alignSelf: "stretch",
    color: "#252525",
    height: 60,
    marginRight: 10,
    marginLeft: 70,
    backgroundColor: "#fff"
  },
  addButton: {
    position: "absolute",
    // left: 5,
    // bottom: 5,
    backgroundColor: "#7e0000",
    width: 60,
    height: 60,
    // borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  }
});
