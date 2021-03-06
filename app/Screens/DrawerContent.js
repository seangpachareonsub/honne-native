import React, { useEffect, useState, useContext } from 'react'
import { View, Stylesheet, AsyncStorage } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../lib/context'

export default function DrawerContent(props) {

  const { navigation } = props
  const [user, setUser] = useState()
  const { logOut } = useContext(AuthContext)

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ alignItems: 'center', paddingTop: 30 }}>
          {/* <Avatar.Image source={{ uri: user && user.images[0].picture }} size={120} /> */}
          {/* <Title> {user && `${user.first_name}, ${moment().diff(user.date_of_birth, 'years')}`} </Title> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={{ top: -350 }}>
        <DrawerItem onPress={() => navigation.navigate('Swipe')} label='Browse' labelStyle={{ fontSize: 18 }}
          icon={() => <Icon name='account-heart-outline' color='black' size={30} />} />

        <DrawerItem onPress={() => navigation.navigate('Messages')} label='Messages' labelStyle={{ fontSize: 18 }}
          icon={() => <Icon name='chat-outline' color='black' size={30} />} />

        <DrawerItem onPress={() => navigation.navigate('Profile')} label='Profile' labelStyle={{ fontSize: 18 }}
          icon={() => <Icon name='account-outline' color='black' size={30} />} />

        <DrawerItem label='Settings' onPress={() => navigation.navigate('Setting')} labelStyle={{ fontSize: 18 }}
          icon={() => <Icon name='cogs' color='black' size={30} />} />
      </Drawer.Section>


      <Drawer.Section>
        <DrawerItem label='Sign Out' onPress={logOut}
          icon={() => <Icon name='exit-to-app' color='black' size={30} />} />
      </Drawer.Section>


    </View>
  )
}