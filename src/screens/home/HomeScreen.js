// frontend/src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { signOut } from '../../libs/auth' // auth.js 파일 경로에 맞게 수정
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const [accessToken, setAccessToken] = useState('')
  const [uid, setUid] = useState('')
  const [isLoading, setIsLoading] = useState(true) // 새로고침 상태를 나타내는 상태 추가
  const navigation = useNavigation()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedAccessToken = await SecureStore.getItemAsync('accessToken')
        const storedUid = await SecureStore.getItemAsync('uid')
        console.log('storedAccessToken: ', storedAccessToken)
        console.log('storedUid: ', storedUid)
        if (storedAccessToken !== null && storedUid !== null) {
          setAccessToken(storedAccessToken)
          setUid(storedUid)
        } else {
          console.log('Access token or uid not found in SecureStore')
        }
      } catch (error) {
        console.error('Error fetching user data from SecureStore:', error)
      } finally {
        setIsLoading(false) // 데이터 로딩이 완료되면 새로고침 상태를 false로 설정
      }
    }

    fetchUserData()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
      // 로그아웃 후 Secure Store에서 데이터 삭제
      await SecureStore.deleteItemAsync('accessToken')
      await SecureStore.deleteItemAsync('uid')
      // 데이터 삭제 후에 화면 전환
      navigation.replace('SignIn')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const isKakaoLogin = false // 이 부분은 카카오 로그인 여부에 따라 조정해야 합니다.

  // 새로고침 중이면 로딩 표시를 반환
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>로그인 성공</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.tokenContainer}>
        <Text style={styles.tokenText}>{accessToken}</Text>
        <Text style={styles.accessText}>UID: </Text>
        <Text style={styles.tokenText}>{uid}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tokenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#845EC2',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  accessText: {
    fontSize: 22,
    marginBottom: 8,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  tokenText: {
    paddingHorizontal: 20,
  },
  line: {
    backgroundColor: 'black',
    width: '100%',
    height: 2,
    marginTop: 15,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
