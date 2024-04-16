import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

export const getUserUploadedItems = async uid => {
  try {
    const accessToken = await SecureStore.getItemAsync('accessToken')

    const response = await axios.get(
      `http://localhost:3000/items/get-user-items`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          uid: uid,
        },
      },
      console.log(response)
    )

    console.log('front//getUserUploadedItems: ', response)
    return response.data
  } catch (error) {
    console.log('get user uploaded items error: ', error)
    console.error(
      'Get User Uploaded Items Error:',
      error.response ? error.response.data.message : error.message
    )
    throw error
  }
}

export async function addUserItem({
  ITEM_CATEGORY,
  ITEM_NAME,
  ITEM_PRICE,
  ITEM_CONDITION,
  ITEM_DESCRIPTION,
}) {
  try {
    const accessToken = await SecureStore.getItemAsync('accessToken')

    const response = await axios.get(
      `http://localhost:3000/items/add-user-item`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          uid: uid,
          ITEM_CATEGORY: ITEM_CATEGORY,
          ITEM_NAME: ITEM_NAME,
          ITEM_PRICE: ITEM_PRICE,
          ITEM_CONDITION: ITEM_CONDITION,
          ITEM_DESCRIPTION: ITEM_DESCRIPTION,
        },
      },
      console.log(response)
    )

    // 서버 응답 처리
    console.log(response.data) // 서버로부터의 응답 데이터 확인

    // 만약 서버에서 추가된 항목의 ID나 다른 정보를 반환한다면,
    // 클라이언트에서 필요한 추가적인 처리를 할 수 있습니다.
  } catch (error) {
    // 오류 처리
    console.error('Error adding user item:', error)
    // 사용자에게 오류 메시지 표시 또는 다른 처리를 수행할 수 있습니다.
  }
}
