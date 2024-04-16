import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Animated,
  PanResponder,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'
import CardSwiper from '../../components/CardSwiper'
import { items as itemsArray } from '../../libs/data'
// import { useUserContext } from '../../../contexts/UserContext'

const { height } = Dimensions.get('screen')

export default function HomeScreenTesting2() {
  const [items, setItems] = useState(itemsArray)
  // const { setUser } = useUserContext()
  // const { uid } = params || {}

  const swipe = useRef(new Animated.ValueXY()).current
  const tiltSign = useRef(new Animated.Value(1)).current

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy })
      tiltSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1)
    },

    onPanResponderRelease: (_, { dx, dy }) => {
      const directionX = Math.sign(dx)
      const directionY = Math.sign(dy)
      const isActionActiveX = Math.abs(dx) > 100
      const isActionActiveY = Math.abs(dy) > 100

      if (isActionActiveX) {
        horizontalAction(directionX, dy)
      } else if (isActionActiveY) {
        verticalAction(directionY, dx)
      } else {
        resetPosition()
      }
    },
  })

  const horizontalAction = useCallback(
    (direction, dy) => {
      Animated.timing(swipe, {
        toValue: {
          x: direction * 500,
          y: dy,
        },
        duration: 300,
        useNativeDriver: true,
      }).start(removeTopCard)
    },
    [swipe]
  )

  const verticalAction = useCallback(
    (direction, dx) => {
      Animated.timing(swipe, {
        toValue: {
          x: dx,
          y: direction * 1000,
        },
        duration: 300,
        useNativeDriver: true,
      }).start(removeTopCard)
    },
    [swipe]
  )

  const resetPosition = useCallback(() => {
    Animated.spring(swipe, {
      toValue: {
        x: 0,
        y: 0,
      },
      useNativeDriver: true,
      friction: 5,
    }).start()
  }, [swipe])

  const removeTopCard = useCallback(() => {
    setItems(prevItems => prevItems.slice(1))
    swipe.setValue({ x: 0, y: 0 })
  }, [swipe])

  useEffect(() => {
    if (!items.length) {
      setItems(itemsArray)
    }
  }, [items.length])

  return (
    <View style={[styles.container]}>
      {items
        .map((item, index) => {
          const isFirst = index === 0
          const dragHandlers = isFirst ? panResponder.panHandlers : {}
          return (
            <CardSwiper
              key={item.itemName}
              item={item}
              isFirst={isFirst}
              swipe={swipe}
              tiltSign={tiltSign}
              {...dragHandlers}
            />
          )
        })
        .reverse()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import DeckSwiper from '../../components/DeckSwiper'

// export default function HomeScreenTesting2() {
//   return (
//     <View>
//       <DeckSwiper />
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
