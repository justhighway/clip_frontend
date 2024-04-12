import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import RootStack from './src/navigator/RootStack'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from './src/screens/home/MainScreen'

// QueryClient 인스턴스 생성
const queryClient = new QueryClient()

export default function App() {
  return (
    // QueryClientProvider로 QueryClient 제공
    // <QueryClientProvider client={queryClient}>
    //   <NavigationContainer>
    //     <RootStack />
    //   </NavigationContainer>
    // </QueryClientProvider>
    <MainScreen />
  )
}
