import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { PoiretOne_400Regular } from '@expo-google-fonts/poiret-one'
import { OpenSans_300Light } from '@expo-google-fonts/open-sans'
import { useFonts, OpenSansCondensed_300Light, OpenSansCondensed_700Bold } from '@expo-google-fonts/open-sans-condensed'
import { AppLoading, registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import WelcomeScreen from './app/Screens/WelcomeScreen'
import LoginScreen from './app/Screens/LoginScreen'
import SignUpScreen from './app/Screens/SignUpScreen'
import ProfileScreen from './app/Screens/ProfileScreen'
import MessageScreen from './app/Screens/MessageScreen'
import SwipeScreen from './app/Screens/SwipeScreen'
import DiscoverySettingScreen from './app/Screens/DiscoverySettingScreen'
import QuestionSettingScreen from './app/Screens/QuestionSettingScreen'
import BioProfileScreen from './app/Screens/BioProfileScreen'
import ImageProfileScreen from './app/Screens/ImageProfileScreen'

import Header from './app/Screens/Header'
import DrawerContent from './app/Screens/DrawerContent'
import SettingTabContent from './app/Screens/SettingTabContent'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import jwt from 'react-native-pure-jwt'


function ProfileNavigation({ navigation }) {

  const Tab = createMaterialTopTabNavigator()

  return (
    <>
      <Header navigation={navigation} />
      {/* <Tab.Navigator tabBar={props => <SettingTabContent {...props} />}> */}
      <Tab.Navigator>
        <Tab.Screen name="Bio" component={BioProfileScreen}/>
        <Tab.Screen name="Images" component={ImageProfileScreen} />
      </Tab.Navigator>
    </>
  )
}


function SettingNavigation({ navigation }) {
  const Tab = createMaterialTopTabNavigator()

  return (
    <>
      <Header navigation={navigation} />
      {/* <Tab.Navigator tabBar={props => <SettingTabContent {...props} />}> */}
      <Tab.Navigator>
        <Tab.Screen name="Discovery" component={DiscoverySettingScreen}/>
        <Tab.Screen name="Questions" component={QuestionSettingScreen} />
      </Tab.Navigator>
    </>
  )
}

function DrawerNavigation() {

  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="Swipe" component={SwipeScreen} />
      <Drawer.Screen name="Messages" component={MessageScreen} />
      <Drawer.Screen name="Profile" component={ProfileNavigation} />
      <Drawer.Screen name="Setting" component={SettingNavigation} />
    </Drawer.Navigator>
  )
}

export default function App() {

  useEffect(() => {
    console.log(isLoggedIn())
  }, [])


  const secret = '2ah73h^5zk2qd^)kyb8$0&md*x0j#59hv3bwt$63e5pu99f&wa'

  const isLoggedIn = async () => {

    const token = await AsyncStorage.getItem('token')
    if (token) {
      jwt.verify(token, secret, function (err, decoded) {
        if (err) AsyncStorage.removeItem('token')
      })
    }
    return token
  }










  const Stack = createStackNavigator()

  let [fontsLoaded] = useFonts({
    PoiretOne_400Regular,
    OpenSansCondensed_300Light,
    OpenSansCondensed_700Bold,
    OpenSans_300Light

  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (

      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name='Signup' component={SignUpScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name="Profile" component={DrawerNavigation} />
        </Stack.Navigator>

      </NavigationContainer>

    )
  }
}

registerRootComponent(App)

