import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomButton from './CustomButton'

export default function SignButtons({ isSignUp, onSubmit, loading }) {
  const navigation = useNavigation()

  // SignIn, SignUp 스크린에서 버튼 타이틀 바꿔주기
  const primaryTitle = isSignUp ? '회원가입' : '로그인'
  const secondaryTitle = isSignUp ? '로그인' : '회원가입'

  // SignIn, SignUp 스크린에서 버튼 액션 바꿔주기
  const onSecondaryButtonPress = () => {
    isSignUp
      ? navigation.goBack() // signUp일 때 뒤로 가기
      : navigation.push('SignIn', { isSignUp: true }) // 아니면 isSignUp true 주면서 push
  }

  // isLoading(param)이면 버튼 대신 ActivityIndicator
  if (loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color="#845EC2" />
      </View>
    )
  }

  return (
    <View style={styles.buttons}>
      <CustomButton title={primaryTitle} hasMarginBtm onPress={onSubmit} />
      <CustomButton
        title={secondaryTitle}
        theme="secondary"
        onPress={onSecondaryButtonPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 64,
  },
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
