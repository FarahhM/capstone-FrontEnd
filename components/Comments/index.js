// import postComment from "../../stores/LikeStore";

// handlePress() {
//   postComment.addComment(this.state.postText);
// }

// onChange() {}

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

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      postText: ""
    };
  }
  render() {
    let posts = this.state.postList.map((val, key) => {
      return (
        <Post
          key={key}
          keyval={key}
          val={val}
          handleDelete={() => this.deletePost(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>سؤال اليوم</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{posts}</ScrollView>
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
      </View>
    );
  }

  addPost() {
    if (this.state.postText) {
      var d = new Date();
      this.state.postList.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        post: this.state.postText
      });
      this.setState({ postList: this.state.postList });
      this.setState({ postText: "" });
    }
  }
  deletePost(key) {
    this.state.postList.splice(key, 1);
    this.setState({ postList: this.state.postList });
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
