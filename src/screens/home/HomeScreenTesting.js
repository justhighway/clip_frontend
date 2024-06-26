// screen/HomeScreen.js
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import { useUserContext } from '../../../contexts/UserContext'
import { getUserUploadedItems } from '../../libs/items'
import { useIsFocused } from '@react-navigation/native'
// import SelectItemButton from '../../components/SelectItemButton'

const HomeScreenTesting = () => {
  const { user } = useUserContext()
  const isFocused = useIsFocused()
  const [hasUploadedItem, setHasUploadedItem] = useState(false)
  const [userUploadedItems, setUserUploadedItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null) // 추가

  const checkUploadedItem = async () => {
    const userItems = await getUserUploadedItems(user.uid)
    if (userItems && userItems.length > 0) {
      console.log('HomeScreen: 업로드 된 아이템 있음!')
      setHasUploadedItem(true)
      setUserUploadedItems(userItems)
    } else {
      console.log('HomeScreen: 업로드 된 아이템이 없음..')
      setHasUploadedItem(false)
    }
  }

  useEffect(() => {
    checkUploadedItem()
    console.log('HomeScreen 재포커스')
  }, [user, isFocused])

  const handleSelectItem = selectedItem => {
    setSelectedItem(selectedItem) // 선택된 아이템 상태 업데이트
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {hasUploadedItem && !selectedItem ? (
        <>
          <SelectItemButton
            userUploadedItems={userUploadedItems}
            onSelectItem={handleSelectItem}
          />
          <View style={styles.centerTextContainer}>
            <Text style={styles.centerText}>물건을 선택해주세요.</Text>
          </View>
        </>
      ) : selectedItem ? (
        <>
          <SelectItemButton
            userUploadedItems={userUploadedItems}
            onSelectItem={handleSelectItem}
          />
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.uploadText}>물건을 업로드 해주세요.</Text>
          <Button
            title="uid 확인"
            onPress={() => {
              console.log('로그인 된 uid:', user.uid)
              console.log('HomeScreen: user.uid:', user.uid)
            }}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  centerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default HomeScreenTesting
