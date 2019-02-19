import React, { Component } from "react";
import { ImageBackground, View, Image } from "react-native";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";

// Navigation
import { withNavigation } from "react-navigation";

// Style
import styles from "./styles";

class CategoryItem extends Component {
  handlePress() {
    this.props.navigation.navigate("QuestionList", {
      categoryID: this.props.category.id
    });
  }
  render() {
    return (
      <Card style={{ borderColor: "#BC8F8F" }}>
        <CardItem
          button
          style={styles.transparent}
          onPress={() => this.handlePress(this.props.category)}
        >
          <ImageBackground
            source={{ uri: this.props.category.backgroundImage }}
            style={{ width: 350, height: 240, flex: 1 }}
          >
            <Text style={styles.text}>{this.props.category.name}</Text>
          </ImageBackground>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(CategoryItem);
