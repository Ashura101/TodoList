import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default class SignUp extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>SignUp Page</Text>
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
