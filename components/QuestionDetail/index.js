import React, { Component } from "react";

// NativeBase Components
import { View, CardItem, Text } from "native-base";
import { ScrollView } from "react-native";

import questionStore from "../../stores/questionStore";

// Component
import Comments from "./QComments";
//import SearchBar from "../SearchBar";

//my imports
import { observer } from "mobx-react";
import styles from "./styles";

class QuestionDetail extends Component {
  render() {
    const comments = this.props.navigation.getParam("Detail", {}).comment;

    const question = this.props.navigation.getParam("Detail", {}).question;
    let commentList;
    if (comments) {
      commentList = comments.map(item => {
        return <Comments commentList={item} key={item.id} />;
      });
    }

    return (
      <ScrollView>
        <CardItem>
          <Text>{question}</Text>
        </CardItem>
        <View style={styles.container}>{commentList}</View>
      </ScrollView>
    );
  }
}

export default observer(QuestionDetail);
