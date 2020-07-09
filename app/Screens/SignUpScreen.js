import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Dimensions, Platform, StatusBar, TextInput, Button } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

import { Input } from 'react-native-elements'

export default function SignUpScreen({ navigation }) {

  const [registerDetails, setLoginDetails] = useState({
    first_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })



  const handleForm = (text, name) => {
    const credentials = { ...registerDetails, [name]: text }
    setLoginDetails(credentials)
  }

  const handleSignUp = () => {
    console.log(registerDetails)
    axios.post('http://127.0.0.1:8000/api/register', registerDetails)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <SafeAreaView style={styles.mainContainer}>

      <Text style={styles.title}> SIGN UP </Text>


      <View style={[styles.subContainer, { height: '60%' }]}>

        <TextInput style={styles.input} onChangeText={text => handleForm(text, 'first_name')} 
          placeholderTextColor='#7d7d7d' placeholder='First name' />

        <TextInput style={styles.input} onChangeText={text => handleForm(text, 'email')} 
          placeholderTextColor='#7d7d7d'  placeholder='Email' />

        <TextInput style={styles.input} onChangeText={text => handleForm(text, 'password')} 
          placeholderTextColor='#7d7d7d' placeholder='Password' clearTextOnFocus={false} secureTextEntry={true} />

        <TextInput style={styles.input} onChangeText={text => handleForm(text, 'password_confirmation')} 
          placeholderTextColor='#7d7d7d' placeholder='Password confirmation' clearTextOnFocus={false} secureTextEntry={true} />

        <TouchableOpacity onPress={handleSignUp} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}> CONTINUE </Text>
        </TouchableOpacity>
        
      </View>

      <Text onPress={() => navigation.navigate('Login')}  style={styles.signUp}> Already have an account? Login </Text>

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
    left: dimension > 2.75 ? -108 : -120,
    top: 30
  },

  input: {
    width: 320,
    height: 40,
    borderBottomWidth: 1.5,
    borderBottomColor: '#9B969C',
    fontSize: 17,
    paddingBottom: 2,
    top: -40
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