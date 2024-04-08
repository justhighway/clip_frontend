import React from 'react'
import HorizontalLine from './HorizontalLine'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function OAuthButtons() {
  const navigation = useNavigation()
  return (
    <>
      <HorizontalLine />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.push('KakaoLogin', { screen: 'KakaoLogin' })
          }>
          <Image
            style={styles.icon}
            source={require('../../assets/kakao.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <MaterialCommunityIcons name="chat" size={40} color="#FEE500" /> */}
          <Image
            style={styles.icon}
            source={require('../../assets/naver.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <MaterialCommunityIcons name="chat" size={40} color="#FEE500" /> */}
          <Image
            style={styles.icon}
            source={require('../../assets/google.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <MaterialCommunityIcons name="chat" size={40} color="#FEE500" /> */}
          <Image
            style={styles.icon}
            source={require('../../assets/apple.png')}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    height: 48,
    width: 48,
    marginTop: 30,
  },
})
