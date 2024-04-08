// frontend/src/screens/SignInScreen.js
import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import SignForm from '../components/SignForm'
import SignButtons from '../components/SignButtons'
import OAuthButtons from '../components/OAuthButtons'
import AnimatedTitle from '../components/AnimatedTitle'
import * as Auth from '../libs/auth'

const SignInScreen = ({ navigation, route }) => {
  const { isSignUp } = route.params ?? {}
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  })
  const [loading, setLoading] = useState(false)

  const createChangeTextHandler = name => value => {
    setForm(prevForm => ({ ...prevForm, [name]: value }))
  }

  const onSubmit = async () => {
    Keyboard.dismiss()
    const { email, password, name } = form
    const signInInfo = { email, password }
    const signUpInfo = { email, password, name }
    setLoading(true)
    try {
      isSignUp
        ? // ? await Auth.signUp({ email, password })
          // navigation.replace('Welcome', { email, password })
          Auth.signUp(signUpInfo)
        : Auth.signIn(signInInfo)
      navigation.replace('MainTab')
    } catch (error) {
      console.log('로그인 실패 ', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.select({ ios: 'padding' })}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>CLIP으로,</Text>
          <AnimatedTitle />
        </View>
        <View style={styles.formContainer}>
          <SignForm
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />
          {isSignUp && form.password !== form.confirmPassword && (
            <Text>비밀번호가 일치하지 않습니다.</Text>
          )}
          <SignButtons
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            loading={loading}
          />
        </View>
        <View style={styles.oauthContainer}>
          <OAuthButtons />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#403257',
    marginTop: 30,
  },
  formContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  oauthContainer: {
    flex: 0.5,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
})

export default SignInScreen
