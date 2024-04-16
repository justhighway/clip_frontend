// screens/HomeStack.js
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/home/HomeScreenTesting2'
import ChatScreen from '../screens/chat/ChatScreen'
import UploadItemScreen from '../screens/UploadItemScreen'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadItem"
        component={UploadItemScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
