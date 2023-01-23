import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CounterApp extends Component {
 
  constructor(){
    super();
    this.state={
      count:0,
      message: "",
      afterCounter: 0
    }
  }
  stateUpdate=()=>{    

    if(this.state.count<69)
    {
      let newCount= this.state.count+1;
      this.setState({count: newCount});
    }
    else{
      this.setState({count: 69});
      this.setState({message: "lol"});

      
      this.state.afterCounter+=1;
      if(this.state.afterCounter>5)
      {
        this.setState({message: "bro Chill! It's over"});
      }
    }
  }
  render(){
    return(
      <View style = {styles.container}>
        <View style={styles.lolView}>
          <Text style={styles.counter}>{this.state.message}</Text>
        </View>

        <View style={styles.counterView}>
          <Text style={styles.counter}>{this.state.count}</Text>
          <TouchableOpacity style={styles.button} 
            onPress={()=>this.stateUpdate()}>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 50,
    justifyContent:"center",
    alignItems: "center",
    flexDirection:"column"
  },
  lolView:{
    flex: 1,
    justifyContent: "flex-end"
  },
  counterView:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  counter:{
    fontSize: 50,
    fontWeight: "bold"
  },
  button:{
    padding: 30,
    backgroundColor: "red",
    borderRadius: 100
  }
})

export default CounterApp;
