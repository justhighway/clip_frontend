import React from 'react'
import RootStack from './src/navigator/RootStack'
import { NavigationContainer } from '@react-navigation/native'

import UserContextProvider from './contexts/UserContext'

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}
