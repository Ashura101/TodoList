import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

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
      <View style={styles.container}>
        <Button title="Increment" onPress={() => this.incrementCount()} />
        <Text style={styles.count}>{count}</Text>
        <Button title="Decrement" onPress={() => this.decrementCount()} />
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
  count: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
