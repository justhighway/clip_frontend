import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const COLORS = {
  LIKE: '#00C29B',
  DISLIKE: '#FF0071',
}

export default function CardActions({ type }) {
  const color = COLORS[type]
  return (
    <View
      style={{
        borderWidth: 8,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderColor: color,
      }}>
      <Text
        style={{
          fontSize: 48,
          fontWeight: 'bold',
          letterSpacing: 4,
          color: color,
        }}>
        {type}
      </Text>
    </View>
  )
}
