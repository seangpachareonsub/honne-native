import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Dimensions, Platform, StatusBar, TextInput, Button } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

import Header from './Header'

export default function ProfileScreen({ navigation }) {


  return (
    <>
    <Header navigation={navigation} />
    <SafeAreaView style={styles.container}>
      <Text> Profile </Text>
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