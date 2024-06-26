// screens/MainTabs.js
import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import CommunityStack from './CommunityStack'
import ChatStack from './ChatStack'
import MyPageStack from './MyPageStack'
import UploadItemButton from '../components/UploadItemButton'

const Tab = createBottomTabNavigator()

export default function MainTab() {
  const navigation = useNavigation()

  const handleUploadItemPress = () => {
    navigation.navigate('UploadItem', { refreshHome: true })
    console.log('회전')
  }

  return (
    <>
      <View style={styles.block}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#6200ee',
            tabBarIcon: ({ color }) => {
              let iconName

              if (route.name === 'HomeStack') {
                iconName = 'home'
              } else if (route.name === 'CommunityStack') {
                iconName = 'magnify'
              } else if (route.name === 'ChatStack') {
                iconName = 'chat'
              } else if (route.name === 'MyPageStack') {
                iconName = 'account'
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={30}
                  color={color}
                  style={[
                    route.name === 'CommunityStack'
                      ? { marginRight: 30 }
                      : null,
                    route.name === 'ChatStack' ? { marginLeft: 30 } : null,
                  ]}
                />
              )
            },
          })}
          tabBarStyle={{ display: 'flex' }}>
          <Tab.Screen name="HomeStack" component={HomeStack} />
          <Tab.Screen name="CommunityStack" component={CommunityStack} />
          <Tab.Screen name="ChatStack" component={ChatStack} />
          <Tab.Screen name="MyPageStack" component={MyPageStack} />
        </Tab.Navigator>
      </View>
      <UploadItemButton onPress={handleUploadItemPress} />
    </>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
  text: {
    fontSize: 24,
  },
})
