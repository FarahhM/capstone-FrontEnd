import React, { Component } from "react";

// NativeBase Components
import { View, Card, CardItem, Text } from "native-base";
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
        <Card
          style={{
            borderColor: "#7e0000",
            borderBottomWidth: 20,
            borderTopWidth: 2,
            borderLeftWidth: 2,
            borderRightWidth: 2
          }}
        >
          <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
            <CardItem>
              <Text style={{ alignItems: "center" }}>{question}</Text>
            </CardItem>
          </View>
        </Card>
        <View style={{ marginTop: 10 }}>{commentList}</View>
      </ScrollView>
    );
  }
}

export default observer(QuestionDetail);
