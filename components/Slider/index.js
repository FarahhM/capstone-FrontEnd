import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { left, right, Card, CardItem, Button, View } from "native-base";
// import PagerTab from "../PagerTab";
import styles from "./styles";
class Slider extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        scrollIndicatorInsets={{ top: 10, left: 10, bottom: 10, right: 10 }}
      >
        <View style={styles.screenView}>
          <ImageBackground
            source={require("../../assets/group.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View style={styles.screenView}>
          <ImageBackground
            source={require("../../assets/thinking.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View style={styles.screenView}>
          <ImageBackground
            source={require("../../assets/fav.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View style={styles.screenView}>
          <ImageBackground
            source={require("../../assets/profile.png")}
            style={{ width: 350, height: 350 }}
          />
          <Card
            transparent
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30
            }}
          >
            <CardItem
              style={{
                backgroundColor: "transparent",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => this.props.navigation.replace("Login")}
              >
                <View style={styles.buttonView}>
                  <Button
                    transparent
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50
                    }}
                  >
                    <Text style={styles.buttonText}>Login</Text>
                  </Button>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.touchable}
                onPress={() => this.props.navigation.replace("Register")}
              >
                <View style={styles.buttonView}>
                  <Button
                    transparent
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50
                    }}
                  >
                    <Text style={styles.buttonText}>Register</Text>
                  </Button>
                </View>
              </TouchableOpacity>
            </CardItem>
            <CardItem
              style={{
                backgroundColor: "transparent",
                justifyContent: "center"
              }}
            >
              <Button
                transparent
                onPress={() => this.props.navigation.replace("Welcome")}
              >
                <View>
                  <Text style={{ fontSize: 18, color: "#9BF0E0" }}>
                    SKIP FOR NOW
                  </Text>
                </View>
              </Button>
            </CardItem>
          </Card>
        </View>
        {/* <View style={styles.screenView}>
          <PagerTab />
        </View> */}
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent("slider", () => Slider);
export default Slider;
