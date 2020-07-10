import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Dimensions, Platform, StatusBar, TextInput, Button } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

import Header from './Header'

export default function SwipeScreen({ navigation }) {

  const [user, setUser] = useState()

  useEffect(() => {
    navigation.navigate('Profile')

    axios.get('http://127.0.0.1:8000/api/users/1')
      .then(res => setUser(res.data))
  }, [])

  return (
    <>
    <Header navigation={navigation} />
    <SafeAreaView style={styles.container}>
      <Text> Swipe me </Text>
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