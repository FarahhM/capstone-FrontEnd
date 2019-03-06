import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

// Store
import categoryStore from "../../stores/categoryStore";

// Component
import CategoryItem from "./CategoryItem";

class Category extends Component {
  //-------------------------Navegation Header-----------------------------------//
  //   static navigationOptions = ({ navigation }) => ({
  //     title: "-----------",
  //     headerRight: (
  //       <Button light transparent onPress={() => navigation.navigate("----------")}>
  //         <Icon type="FontAwesome" name="-----------" color="white" />
  //       </Button>
  //     )
  //   });
  //-------------------------------------------------------------------------//

  render() {
    const category = categoryStore.category;
    let Items;
    if (category) {
      Items = category.map(item => (
        <CategoryItem category={item} key={item.id} />
      ));
    }
    console.log("items------", Items);
    return (
      <Content>
        <List>{Items}</List>
      </Content>
    );
  }
}

export default observer(Category);
