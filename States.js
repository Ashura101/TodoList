import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const States = () => {

    const [age, setAge] = useState(10);
    const [name, setName] = useState("Ayush");

    let newName = "";

    useEffect(()=>{
      // alert("arey wawah")
    },[age])

    const ageFunction = () => {
        setAge(age+1);
    }

    const storeTextInput = (value) =>{
      newName = value;
    }

    const nameFunction = (newName) => {
      if(newName == "Ayush" || newName == "ayush")
      {
        setName("Ayush")
        setAge(23)
      }
      setName(newName);
  }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hi I am {name}, {age} year old</Text>
            <TouchableOpacity style={styles.button} onPress={()=>ageFunction()}>
              <Text style={styles.buttonText}>Change Age!</Text>
            </TouchableOpacity>

            <TextInput style={styles.inputField} placeholder='New Name'
              onChangeText={(value) => storeTextInput(value)}>
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={()=>nameFunction(newName)}>
              <Text style={styles.buttonText}>Change Name!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textShadowRadius: 50,
    textShadowColor: "black"
  },
  button:{
    padding: 10
  },
  buttonText:{
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 50
  },
  inputField:{
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    width: 200,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems:"center",
    borderRadius: 50
  }
})

export default States;
