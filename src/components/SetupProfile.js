import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import { signOut } from '../libs/auth'
import { setUserProfile } from '../libs/users'
import BorderedInput from './BorderedInput'
import CustomButton from './CustomButton'

export default function SetupProfile() {
  const [displayName, setDisplayName] = useState('')
  const navigation = useNavigation()

  const { params } = useRoute()
  const { uid } = params || {}

  const onSubmit = () => {
    setUserProfile({
      uid,
      displayName,
      // photoURL: null,
    })
  }
  const onCancel = () => {
    signOut()
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.form}>
        <BorderedInput
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnKeyType="next"
        />
        <View style={styles.buttons}>
          <CustomButton title="다음" onPress={onSubmit} hasMarginBtm />
          <CustomButton title="취소" onPress={onCancel} theme="secondary" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  circle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 128,
    height: 128,
  },
  form: {
    marginTop: 16,
    width: '100%',
  },
  buttons: {
    marginTop: 48,
  },
})
