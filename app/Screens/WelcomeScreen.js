import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'

export default function WelcomeScreen({ navigation }) {

  return (
    <ImageBackground style={styles.image} blurRadius={dimension > 2.75 ? 12 : 2} source={{ uri: 'https://images.unsplash.com/photo-1586073055431-5b31161642f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80' }}>
      <SafeAreaView style={styles.container}>

        <View style={styles.subContainer}>
          <Text style={styles.subtitle}> 本音 </Text>
          <Text style={styles.title}> HONNE </Text>
        </View>




        <View style={{ bottom: -40 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.7}
            style={[styles.button, { backgroundColor: 'whitesmoke' }]}>
            <Text style={[styles.buttonText, { color: 'black' }]}> LOGIN </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}
            activeOpacity={0.7} style={[styles.button, { backgroundColor: '#3d3d3d' }]}>
            <Text style={[styles.buttonText, { color: 'white' }]}> SIGN UP </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.disclaimer}> By registering, you agree to our Terms of Service and our Privacy Policy  </Text>

      </SafeAreaView>
    </ImageBackground>
  )
}

const dimension = Dimensions.get('screen').scale

const primaryColor = '#C3B9AC'

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  subContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '11%'
  },
  title: {
    color: '#2d2d2d',
    fontSize: dimension > 2.75 ? 45 : 55,
    fontFamily: 'PoiretOne_400Regular'
  },
  subtitle: {
    fontSize: dimension > 2.75 ? 32 : 37,
    fontFamily: 'OpenSans_300Light',
    color: 'black'
  },
  button: {
    marginBottom: 30,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 8
  },
  buttonText: {
    fontSize: dimension > 2.75 ? 16 : 18,
    fontFamily: 'OpenSansCondensed_700Bold',
    letterSpacing: 1
  },
  disclaimer: {
    color: 'white',
    fontSize: dimension > 2.75 ? 9.5 : 11.5,
    position: 'absolute',
    bottom: 60
  }
})
