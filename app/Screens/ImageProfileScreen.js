import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Dimensions, Platform, StatusBar, TextInput, Button } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'


export default function ImageProfileScreen({ navigation }) {


  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Images</Text>
      </SafeAreaView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})