import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header({ navigation }) {

  return (
    <View style={styles.header}>
      <Icon onPress={() => navigation.openDrawer()}
        name='text' color='white' size={40} style={{ top: 40, left: 20 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#121212',
    height: '10%'
  }
})