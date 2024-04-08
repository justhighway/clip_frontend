import { Pressable, Text } from 'react-native'
import * as KakaoLogins from '@react-native-seoul/kakao-login'

export const KakaoLoginExample = async () => {
  const loginWithKakao = async () => {
    const token = await KakaoLogins.login()
    //로그인하기
    const profile = await KakaoLogins.getProfile()
    //프로필 가져오기

    console.log(token, profile)
  }

  return (
    <Pressable onPress={loginWithKakao}>
      <Text>click me</Text>
    </Pressable>
  )
}
