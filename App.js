import React from 'react'
import RootStack from './src/navigator/RootStack'
import { NavigationContainer } from '@react-navigation/native'

import UserContextProvider from './contexts/UserContext'
import HomeScreenTesting2 from './src/screens/home/HomeScreenTesting2'

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
    // <HomeScreenTesting2 />
  )
}
