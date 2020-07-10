import 'react-native-gesture-handler'
import React, { useEffect, useState, useMemo, useContext } from 'react'
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
import base64, { decode, encode } from 'react-native-base64'
import axios from 'axios'

import { AuthContext } from './app/lib/context'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [userID, setUserID] = useState()

  const authContext = useMemo(() => ({
    logIn: () => {
      setLoggedIn(true)
    },
    logOut: () => {
      AsyncStorage.removeItem('token')
      setLoggedIn(false)
    },
    getUserId: () => {
      const token = AsyncStorage.getItem('token')
      const parts = token.split('.')
      console.log(base64.decode(parts[1]) +  ' hellooo')
    }
  }))

 


  // const getToken = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('token')
  //     if (token) {
  //       return token
  //     }
  //   } catch (e) {
  //     alert(e)
  //   }
  // }

  // const getUserId = (token) => {
  //   const parts = token.split('.')
  //   console.log(base64.decode(parts[1]))
  //   setLoggedIn(true)
  // }

  const Stack = createStackNavigator()

  let [fontsLoaded] = useFonts({
    PoiretOne_400Regular,
    OpenSansCondensed_300Light,
    OpenSansCondensed_700Bold,
    OpenSans_300Light

  })


  // PROFILE TOP TAB NAVIGATION STACK

  function ProfileNavigation({ navigation }) {

    const Tab = createMaterialTopTabNavigator()

    return (
      <>
        <Header navigation={navigation} />
        {/* <Tab.Navigator tabBar={props => <SettingTabContent {...props} />}> */}
        <Tab.Navigator>
          <Tab.Screen name="Bio" component={BioProfileScreen} />
          <Tab.Screen name="Images" component={ImageProfileScreen} />
        </Tab.Navigator>
      </>
    )
  }


  // SETTING TOP TAB NAVIGATION STACK

  function SettingNavigation({ navigation }) {
    const Tab = createMaterialTopTabNavigator()

    return (
      <>
        <Header navigation={navigation} />
        {/* <Tab.Navigator tabBar={props => <SettingTabContent {...props} />}> */}
        <Tab.Navigator>
          <Tab.Screen name="Discovery" component={DiscoverySettingScreen} />
          <Tab.Screen name="Questions" component={QuestionSettingScreen} />
        </Tab.Navigator>
      </>
    )
  }

  // MENU DRAWER NAVIGATION STACK

  function DrawerNavigation() {

    const Drawer = createDrawerNavigator()

    return (
      <Drawer.Navigator drawerContent={props => <DrawerContent setLoggedIn={() => setLoggedIn()} {...props} />}
        screenOptions={{ headerShown: false }} >
        <Drawer.Screen name="Swipe" component={SwipeScreen} />
        <Drawer.Screen name="Messages" component={MessageScreen} />
        <Drawer.Screen name="Profile" component={ProfileNavigation} />
        <Drawer.Screen name="Setting" component={SettingNavigation} />
      </Drawer.Navigator>
    )
  }

  // MAIN NAVIGATION STACK

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (

      <AuthContext.Provider value={authContext}>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false }} >

            {!loggedIn ?
              <>
                <Stack.Screen name="Home" component={WelcomeScreen} />
                <Stack.Screen name='Signup' component={SignUpScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
              </>
              : <Stack.Screen name="Profile" component={DrawerNavigation} />
            }

          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>


    )
  }
}

registerRootComponent(App)

