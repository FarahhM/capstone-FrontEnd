import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Item, Input, Button, Text, Icon, Container, Card } from "native-base";
import { View, StyleSheet, Image } from "react-native";
// Store
import authStore from "../../stores/authStore";

import { withNavigation } from "react-navigation";
class LogExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  static navigationOptions = {
    title: "Login"
  };

  loginUser() {
    authStore.loginUser(this.state, this.props.navigation);
  }
  componentDidMount() {
    authStore.checkForToken();
  }

  render() {
    if (authStore.user) return this.props.navigation.replace("Profile");
    return (
      <View style={styles.container}>
        {/* <View>
          <Image
            source={require("../../assets/logo2.png")}
            style={{ height: 250, width: 250 }}
          />
        </View> */}
        <View style={styles.inputContainer}>
          <Icon active name="ios-person" style={styles.inputIcon} />
          <Input
            style={styles.inputs}
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon active name="ios-lock" style={styles.inputIcon} />
          <Input
            style={styles.inputs}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        {/* <View style={{ flexDirection: "row", alignItems: "center" }}> */}
        <View style={styles.buttonView}>
          <Button transparent onPress={() => this.loginUser()}>
            <Text
              style={{
                fontSize: 20,

                color: "#948F94",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              Login
            </Text>
          </Button>
        </View>
        <Button
          full
          light
          transparent
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text
            style={{
              color: "#F8EDE6",
              fontSize: 20,
              textDecorationLine: "underline",
              textDecorationColor: "#F8EDE6"
            }}
          >
            New Account
          </Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7e0000"
  },
  inputContainer: {
    borderBottomColor: "#F8EDE6",
    backgroundColor: "#F8EDE6",
    borderRadius: 50,
    borderBottomWidth: 1,
    width: 250,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#F8EDE6",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
    color: "#948F94"
  },

  buttonView: {
    backgroundColor: "#F8EDE6",
    borderRadius: 50,
    borderColor: "#F8EDE6",

    borderWidth: 1,
    width: 250,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withNavigation(observer(LogExample));

