import React, { useState, useEffect } from 'react'
import { AsyncStorage, StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Dimensions, Platform, StatusBar, TextInput, Button } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

import axios from 'axios'

export default function LoginScreen({ navigation }) {

  const [jsonToken, setJSONToken] = useState()

  const setToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (e) {
      alert(e)
    }
  }

  const getToken = async() => {
    try {
      const token = await AsyncStorage.getItem('token')
      if (token) setJSONToken(token)
    } catch (e) {
      alert(e)
    }
  }

  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' })

  const handleForm = (text, name) => {
    const credentials = { ...loginDetails, [name]: text }
    setLoginDetails(credentials)
  }

  const handleLogin = () => {
    axios.post('http://127.0.0.1:8000/api/login', loginDetails)
      .then(res => {
        // console.log(res.data.token)
        // navigation.navigate('Profile')
        setToken(res.data.token)
      })
      .catch(err => console.log(err))
  }

  return (
    <SafeAreaView style={styles.mainContainer}>

      <Text style={styles.title}> LOGIN </Text>

      <Text> this is token = {jsonToken} </Text>

      <View style={[styles.subContainer, { height: '60%' }]}>
        <TextInput onChangeText={text => handleForm(text, 'email')}
          style={styles.input} placeholderTextColor='#7d7d7d' placeholder='Email' />


        <TextInput style={[styles.input, { top: -20 }]} onChangeText={text => handleForm(text, 'password')}
          secureTextEntry={true} placeholderTextColor='#7d7d7d' clearTextOnFocus={false} placeholder='Password' />

        <TouchableOpacity onPress={handleLogin} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>

        <Text style={{ top: -35 }}> Forgot your password? </Text>

      </View>

      <Text onPress={() => navigation.navigate('Signup')} style={styles.signUp}> Don't have an account? Sign up </Text>

    </SafeAreaView>
  )
}

const dimension = Dimensions.get('screen').scale


const styles = StyleSheet.create({

  mainContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#E6EAEF'
  },
  subContainer: {
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'OpenSansCondensed_700Bold',
    fontSize: 35,
    left: dimension > 2.75 ? -122 : -130,
    top: 70
  },

  input: {
    width: 320,
    height: 40,
    borderBottomWidth: 1.5,
    borderBottomColor: '#9B969C',
    fontSize: 17,
    paddingBottom: 2
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 320,
    height: 50
  },
  buttonText: {
    color: 'white',
    fontSize: dimension > 2.75 ? 16 : 18,
    fontFamily: 'OpenSansCondensed_700Bold',
    letterSpacing: 1
  },
  signUp: {
    position: 'absolute',
    bottom: 50
  }
})