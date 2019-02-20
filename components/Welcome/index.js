import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  Animated,
  Easing,
  Image,
  TouchableOpacity
} from "react-native";
import { Button, Card, CardItem } from "native-base";
// Navigation
import { withNavigation } from "react-navigation";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateValue: new Animated.Value(0),
      fadeValue: new Animated.Value(0)
    };
  }
  rotateAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.rotateValue, {
        toValue: 100, //rotation value from 0 to 100
        duration: 2000, //2000 milliseconds
        easing: Easing.linear //to convey physically believable motion in animations
      })
    ]).start(() => {});
  };
  // fadeAnimation = () => {
  //   this.position = Animated.timing(this.state.fadeValue, {
  //     toValue: 1,
  //     duration: 3000
  //   }).start();
  // };
  componentDidMount() {
    this.rotateAnimation();
    setTimeout(() => {
      this.props.navigation.replace("BottomTab");
    }, 2500);
    // this.fadeAnimation();
  }

  render() {
    const interpolatedRotateAnimation = this.state.rotateValue.interpolate({
      inputRange: [0, 100],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require("../../images/Qoftheday.png")}
          style={[
            styles.imageView,
            { transform: [{ rotate: interpolatedRotateAnimation }] }
          ]}
        />
        {/* <Card
          transparent
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
          }}
        >
          <CardItem
            style={{ backgroundColor: "transparent", justifyContent: "center" }}
          >
            <TouchableOpacity transparent style={styles.leftButton}>
              <View style={styles.textContainer}>
                <Text style={{ color: "white", fontSize: 15 }}>Login</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity transparent style={styles.rightButton}>
              <View style={styles.textContainer}>
                <Text style={{ color: "white", fontSize: 15 }}>Register</Text>
              </View>
            </TouchableOpacity>
          </CardItem>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 15 }}>Skip for now</Text>
          </TouchableOpacity>
        </Card> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  imageView: {
    width: 200,
    height: 200,
    backgroundColor: "transparent"
  },
  leftButton: {
    marginLeft: 70,
    marginRight: 20,
    padding: 10,
    borderColor: "white"
  },
  rightButton: {
    marginRight: 60,
    marginLeft: 20,
    padding: 10
  },
  textContainer: {
    borderColor: "#FFE4E1",
    borderWidth: 1,
    padding: 10
  }
});
export default withNavigation(Welcome);
