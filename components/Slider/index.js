import React, { Component } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
  AppRegistry,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { left, right, Card, CardItem, Button } from "native-base";
import styles from "./styles";
import { underline } from "ansi-colors";
const { width } = Dimensions.get("window");

const slides = [
  { image: require("../../assets/group.png") },
  { image: require("../../assets/thinking.png") },
  { image: require("../../assets/fav.png") },
  { image: require("../../assets/profile.png") }
];
class Slider extends React.Component {
  scrollX = new Animated.Value(0);

  render() {
    let position = Animated.divide(this.scrollX, width);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#7e0000"
        }}
      >
        <View style={styles.screenView}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } }
            ])}
            scrollEventThrottle={16}
          >
            <View style={styles.screenView}>
              <ImageBackground
                source={require("../../assets/group.png")}
                style={{ width: 350, height: 350 }}
              />
              <Text style={styles.text}>Go through different experiences.</Text>
            </View>
            <View style={styles.screenView}>
              <ImageBackground
                source={require("../../assets/thinking.png")}
                style={{ width: 350, height: 350 }}
              />
              <Text style={styles.text}>Share your experience.</Text>
            </View>
            <View style={styles.screenView}>
              <ImageBackground
                source={require("../../assets/fav.png")}
                style={{ width: 350, height: 350 }}
              />
              <Text style={styles.text}>
                You get to save comments to your favorite, so that you can reach
                them later on.
              </Text>
            </View>
            <View style={styles.screenView}>
              <ImageBackground
                source={require("../../assets/profile.png")}
                style={{ width: 350, height: 350 }}
              />
              <Text style={styles.text}>
                Creat an account now so that you get to enjoy all the features!
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row" }}>
          {slides.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],

              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#F8EDE6",
                  margin: 25,
                  marginBottom: 50,
                  borderRadius: 5
                }}
              />
            );
          })}
        </View>
        <Card
          transparent
          style={{
            justifyContent: "center",
            aligItems: "center"
          }}
        >
          <CardItem
            style={{
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 3
            }}
          >
            <TouchableOpacity
              style={styles.touchableLeft}
              onPress={() => this.props.navigation.replace("Login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </CardItem>
          <CardItem
            style={{
              backgroundColor: "F8EDE6",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 3
            }}
          >
            <TouchableOpacity
              style={styles.touchableRight}
              onPress={() => this.props.navigation.replace("Register")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </CardItem>
          <Button
            transparent
            onPress={() => this.props.navigation.replace("Welcome")}
            style={{
              justifyContent: "space-around",
              alignSelf: "center",
              marginBottom: 40
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#FFFAF0",
                textDecorationLine: "underline",
                alignSelf: "center"
              }}
            >
              SKIP FOR NOW
            </Text>
          </Button>
        </Card>
      </View>
    );
  }
}

AppRegistry.registerComponent("slider", () => Slider);
export default Slider;
