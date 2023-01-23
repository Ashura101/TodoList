import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Navigation } from "react-native-navigation";

class Welcome extends Component {
  // const Welcome = (props) => {

  goToScreen = (screen) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
      },
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Welcome</Text>
        <Button
          title="Sign in"
          onPress={() => this.goToScreen("SignIn")}
        ></Button>
        <Button
          title="Sign out"
          onPress={() => this.goToScreen("SignUp")}
        ></Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Welcome;
