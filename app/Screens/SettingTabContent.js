import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, onLongPress, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Animated } from 'react-native-reanimated'

export default function SettingTabContent({ state, descriptors, navigation, position }) {

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        // const inputRange = state.routes.map((_, i) => i)
        // const opacity = Animated.interpolate(position, {
        //   inputRange,
        //   outputRange: inputRange.map(i => (i === index ? 1 : 0))
        // })

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {/* <Animated.Text style={{ opacity }}> */}
            <Text >
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '6%',
    borderBottomColor: 'black',
    borderBottomWidth: 1

  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})