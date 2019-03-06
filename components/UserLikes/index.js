import React, { Component } from "react";

// NativeBase Components
import { View } from "native-base";
import { ScrollView } from "react-native";

//my imports

import { observer } from "mobx-react";
import commentStore from "../../stores/commentStore";
import UserLikedComments from "./userLikedComments";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class UserLikes extends Component {
  componentDidMount() {
    commentStore.getLike();
  }
  render() {
    if (!authStore.user) return this.props.navigation.navigate("Login", {});
    let Items;
    if (commentStore.likedComments.length > 0) {
      Items = commentStore.likedComments.map(item => {
        if (item.comment) {
          return (
            <UserLikedComments likedComment={item} key={item.comment.id} />
          );
        }
      });
    }

    return (
      <ScrollView>
        <View>{Items}</View>
      </ScrollView>
    );
  }
}

export default withNavigation(observer(UserLikes));
