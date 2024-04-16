import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BoardScreen from '../screens/community/BoardScreen'
import PostListScreen from '../screens/community/PostListScreen'
import PostScreen from '../screens/community/PostScreen'

const Stack = createNativeStackNavigator()

export default function CommunityStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Board"
        component={BoardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}
