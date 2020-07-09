import React, { useState } from 'react'
import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableHighlight, Dimensions, Platform, StatusBar, TextInput, Button } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

import Header from './Header'

export default function MessageScreen({ navigation }) {


  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <View style={styles.matchesContainer}>
          <Text style={styles.headings}> Recent Matches </Text>
          <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
            <Text>hello </Text>
  
          </ScrollView>
        </View>


        <View style={styles.messagesContainer}>
          <Text style={styles.headings}> Messages </Text>
          <ScrollView>
            <Text> hello</Text>
           
            
          </ScrollView>
        </View>

      </SafeAreaView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headings: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  matchesContainer: {
    height: '23%',
    // backgroundColor: 'blue',
    width: '100%',
    paddingTop: 14,
    paddingLeft: 12
  },
  messagesContainer: {
    height: '78%',
    width: '100%',
    paddingTop: 14,
    paddingLeft: 12
  }
})