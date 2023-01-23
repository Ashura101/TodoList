import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FLexBoxWork = () =>
{
    return(
        <View style={styles.container}>
          <View style={styles.firstThreeLines}>
            <View style={styles.topLine}>
                <View style={styles.firstLinebox}></View>
                <View style={styles.firstLinebox}></View>
                <View style={styles.firstLinebox}></View>
                <View style={styles.firstLinebox}></View>
            </View>
            <View style={styles.secondLine}>
              <View style={styles.sBox1}></View>
              <View style={styles.sBox2}></View>
            </View>
            <View style={styles.thirdLine}>
              <View style={styles.line3Box1}></View>
              <View style={styles.line3Box2}></View>
            </View>
          </View>
          <View style={styles.line4}>
            <View style={styles.line4Box1}></View>
            
            <View style={styles.line4Box2}></View>
            
            <View style={styles.line4Box3}></View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow"
    },

    firstThreeLines: {
      flex: 0.4,
      flexDirection: "column",
      // justifyContent: "space-between"
    },

    // CSS For Line Number 1 Start
    topLine: {
      flex: 0.33,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    firstLinebox: {
      backgroundColor: "red",
      flex: 1,
      margin: 4
    },
   // CSS For Line Number 1 End

   // CSS For Line Number 2 Start
    secondLine: {
      flex: 0.33,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    sBox1: {
      flex: 0.5,
      backgroundColor: "red",
      margin: 4
    },
    sBox2: {
      flex: 0.25,
      backgroundColor: "red",
      margin: 4
    },
    // CSS For Line Number 2 End

    // CSS For Line Number 3 Start

    thirdLine: {
      flex: 0.33,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    line3Box1: {
      flex: 0.5,
      backgroundColor: "red",
      margin: 4
    },
    line3Box2: {
      flex: 0.25,
      backgroundColor: "red",
      margin: 4
    },

    // CSS For Line Number 3 End

    // CSS For Line Number 4 Start

    line4: {
      flex: 0.6,
      flexDirection: "column",
      justifyContent: "space-between"
    },
    line4Box1: {
      flex: 0.5,
      backgroundColor: "red",
      margin: 4
    },
    line4Box2: {
      flex: 0.3,
      backgroundColor: "red",
      margin: 4
    },
    line4Box3: {
      flex: 0.2,
      backgroundColor: "red",
      margin: 4
    }

    // CSS For Line Number 4 End
})

export default FlexBoxWork;