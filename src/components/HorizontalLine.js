import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const HorizontalLine = () => {
  return (
    <View style={styles.flex}>
      <View style={styles.line} />
      <Text style={styles.text}>또는</Text>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    width: '50%',
    height: '10%',
    paddingHorizontal: 17,
    backgroundColor: '#9A89B4',
    borderRadius: 120,
  },
  text: { color: '#9A89B4', paddingHorizontal: 18 },
})

export default HorizontalLine
