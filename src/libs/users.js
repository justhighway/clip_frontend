import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

export const getUser = async uid => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${uid}`)
    console.log('Get User Response:', response.data)
    return response.data.uid
  } catch (error) {
    console.error(
      'Get User Error:',
      error.response ? error.response.data.message : error.message
    )
    throw error
  }
}

export const setUserProfile = async (uid, userName, userPicture) => {
  try {
    const accessToken = await SecureStore.getItemAsync('accessToken')
    const uid = await SecureStore.getItemAsync('uid')

    const response = await axios.post(
      'http://localhost:3000/users/setUserProfile',
      { uid, userName, userPicture },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    console.log('Set User Profile Response:', response.data)
    return response.data
  } catch (error) {
    console.error(
      'Set User Profile Error:',
      error.response ? error.response.data.message : error.message
    )
    throw error
  }
}
