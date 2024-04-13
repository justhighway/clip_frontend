import React, { useRef, useState, useEffect } from 'react'
import { Animated, StyleSheet, Button, View } from 'react-native'

const FadeInAndOut = () => {
  const animation = useRef(new Animated.Value(1)).current
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }, [hidden, animation])

  return (
    <View>
      <Animated.View style={[styles.rectangle, { opacity: animation }]} />
      <Button title="toggle" onPress={() => setHidden(!hidden)} />
    </View>
  )
}

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(0)).current
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
    }).start()
  }, [enabled, animation])

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button title="toggle" onPress={() => setEnabled(!enabled)} />
    </View>
  )
}

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <SlideLeftAndRight />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
})
