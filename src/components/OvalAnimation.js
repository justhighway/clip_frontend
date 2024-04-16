import React, { useState, useEffect } from 'react'
import { View, Animated, StyleSheet } from 'react-native'

const RectangleAnimation = () => {
  const [animation] = useState(new Animated.Value(1))

  useEffect(() => {
    startAnimation()
  }, []) // 처음 한 번만 실행

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 2, // 가로 길이를 2배로 늘림
      duration: 2000,
      useNativeDriver: true,
    }).start()
  }

  const animatedStyle = {
    transform: [{ scaleX: animation }],
    width: 100, // 초기 가로 길이
    height: 80,
    borderRadius: 20,
    backgroundColor: 'blue',
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.rectangle, animatedStyle]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {},
})

export default RectangleAnimation
