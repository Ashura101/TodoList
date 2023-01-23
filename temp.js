import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Flexing = () => 
{
   return(
    <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('./assets/img1.jpg')}>
    <View style={styles.container}>
      <View style={{ backgroundColor: "red" }}><Text style={styles.textStyle}>Number 1</Text></View>
      <View style={{ backgroundColor: "blue" }}><Text style={styles.textStyle}>Number 2</Text></View>
      <View style={{ backgroundColor: "green" }}><Text style={styles.textStyle}>Number 5</Text></View>
    </View> 
    </ImageBackground>
   )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    padding: 30,
    // alignItems: "center",
    // backgroundColor: "black",
    justifyContent: "space-around"
      },

    textStyle: {
      fontSize: 25,
      textAlign: "center",
      color: "white"
    },
    imgBackground: {
      // width: '100%',
      // height: '100%',
      flex: 1 
    }
})

export default Flexing;
