// frontend/src/libs/auth.js
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

export const signIn = async ({ email, password }) => {
  try {
    const response = await axios.post('http://localhost:3000/users/signin', {
      userEmail: email,
      userPassword: password,
    })
    if (response.data) {
      const { accessToken, refreshToken, uid } = response.data
      // SecureStore로 토큰 및 uid 저장
      // await SecureStore.setItemAsync('accessToken', accessToken)
      // await SecureStore.setItemAsync('refreshToken', refreshToken)
      // await SecureStore.setItemAsync('uid', uid)
      return { accessToken, refreshToken, uid }
    } else {
      throw new Error('Invalid response from server')
    }
  } catch (error) {
    console.error(
      'Sign In Error:',
      error.response ? error.response.data.message : error.message
    )
    throw error
  }
}

export const signUp = async ({ email, password, name }) => {
  try {
    const response = await axios.post('http://localhost:3000/users/signup', {
      userEmail: email,
      userPassword: password,
      userName: name,
    })
    if (response.data) {
      console.log('로그인 성공: ', response.data)
    } else {
      throw new Error('Invalid response from server')
    }
  } catch (error) {
    console.error(
      'Sign Up Error:',
      error.response ? error.response.data.message : error.message
    )
    throw error
  }
}

export const signOut = async () => {
  try {
    await SecureStore.deleteItemAsync('accessToken')
    await SecureStore.deleteItemAsync('refreshToken')
    await SecureStore.deleteItemAsync('uid')
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}
