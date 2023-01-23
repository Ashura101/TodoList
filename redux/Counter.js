import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Counter extends Component {
  state = { count: 0 };

  decrementCount = () => {
    let { count } = this.state;
    count--;
    this.setState({ count });
  };
  incrementCount() {
    let { count } = this.state;
    count++;
    this.setState({
      count,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <View styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
      </View>
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
