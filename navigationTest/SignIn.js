import React, { Component } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default class SignIn extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>SignIn Page</Text>
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
