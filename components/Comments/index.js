import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Post from "./../PostComments";
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
import commentList from "../../stores/AddLikeStore";
import axios from "axios";
export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: "",
      postList: []
    };
  }
  handlePress = () => {
    // commentList.addComment(this.state.postText);
    this.addPost();
  };

  // deletePost = key => {
  //   commentList.comments.splice(key, 1);
  //   this.setState({ postList: this.state.postList });
  // };

  render() {
    // let posts = commentList.comments.map(comment => {
    let posts = this.state.postList.map(comment => {
      return (
        <Post
          postList={comment}
          key={comment.id}
          // handleDelete={() => this.deletePost(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>سؤال اليوم</Text>
        </View>

        <KeyboardAvoidingView behavior="position">
          <View>
            <Card style={styles.footer}>
              <TextInput
                multiline={true} //
                numberOfLines={4} //
                style={styles.textInput}
                onChangeText={postText => this.setState({ postText })}
                value={this.state.postText}
                placeholder="
                >> اكتب تعليقك هنا  " //
                placeholderTextColor="#67746D"
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity
                onPress={this.addPost.bind(this)}
                style={styles.addButton}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </Card>
          </View>
        </KeyboardAvoidingView>
        <ScrollView style={styles.scrollContainer}>{posts}</ScrollView>
      </View>
    );
  }
  addPost() {
    console.log(this.state.postText);
    if (this.state.postText) {
      var d = new Date();
      this.state.postList.push[
        {
          date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
          post: this.state.postText
        }
      ];
      console.log("I'm the list", this.state.postList);
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
    // marginBottom: 100
  },
  footer: {
    marginBottom: 25,
    width: 350
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
    backgroundColor: "#252525",
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
