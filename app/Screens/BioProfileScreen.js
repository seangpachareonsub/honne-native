import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, AsyncStorage, Text, View, SafeAreaView, TouchableHighlight, Dimensions, Platform, StatusBar, TextInput, Button } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

import { AuthContext } from '../lib/context'


export default function BioProfileScreen({ navigation }) {

  const { getUserId } = useContext(AuthContext)


  useEffect(() => {
    getUserId()
  }, [])


  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Bio</Text>
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