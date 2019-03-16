import React, { Component } from "react";

// NativeBase Components
import { View } from "native-base";
import { ScrollView } from "react-native";

import questionStore from "../../stores/questionStore";

// Component
import ListItem from "./ListItem";
//import SearchBar from "../SearchBar";

//my imports
import { observer } from "mobx-react";
import styles from "./styles";

class QuestionList extends Component {
  render() {
    const categoryID = this.props.navigation.getParam("categoryID", {});

    let fetchedItem = questionStore.fetchItemByID(categoryID);
    // console.log("categoryID", categoryID);
    let Items;
    if (fetchedItem) {
      Items = fetchedItem.map(item => {
        return <ListItem questionlist={item} key={item.id} />;
      });
    }

    return (
      <ScrollView>
        <View style={styles.container}>{Items}</View>
      </ScrollView>
    );
  }
}

export default observer(QuestionList);
