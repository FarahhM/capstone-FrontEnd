import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Item, Input, Button, Text, Icon, Container, Card } from "native-base";
import { View, StyleSheet, Image } from "react-native";
// Store
import authStore from "../../stores/authStore";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    title: "Register"
  };

  signupUser() {
    authStore.signupUser(this.state, this.props.navigation);
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../assets/logo2.png")}
            style={{ height: 200, width: 200, marginTop: 10 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon active name="ios-person-add" style={styles.inputIcon} />
          <Input
            style={styles.inputs}
            placeholder="First Name"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon active name="ios-person-add" style={styles.inputIcon} />
          <Input
            style={styles.inputs}
            placeholder="Last Name"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </View>
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
          <Icon active name="email" type="Entypo" style={styles.inputIcon} />
          <Input
            style={styles.inputs}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
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
        <View style={styles.buttonView}>
          <Button transparent onPress={() => this.signupUser()}>
            <Text
              style={{
                fontSize: 20,
                color: "#9BF0E0",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              Register
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A4949"
  },
  inputContainer: {
    borderBottomColor: "#9BF0E0",
    backgroundColor: "#9BF0E0",
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
    borderBottomColor: "#9BF0E0",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
    color: "#687373"
  },

  buttonView: {
    backgroundColor: "#4A4949",
    borderRadius: 50,
    borderColor: "#9BF0E0",

    borderWidth: 1,
    width: 250,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default observer(Register);