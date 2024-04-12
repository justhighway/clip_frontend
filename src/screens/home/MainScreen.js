import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Animated,
  PanResponder,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'
import CardSwiper from '../../components/CardSwiper'
import { items as itemsArray } from '../../libs/data'

const { width, height } = Dimensions.get('screen')

export default function MainScreen() {
  const [items, setItems] = useState(itemsArray)

  const swipe = useRef(new Animated.ValueXY()).current
  const tiltSign = useRef(new Animated.Value(1)).current

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy })
      tiltSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1)
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx)
      const isActionActive = Math.abs(dx) > 100

      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {
            x: direction * 500,
            y: dy,
          },
          duration: 300,
          useNativeDriver: true,
        }).start(removeTopCard)
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start()
      }
    },
  })

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
        .map(
          (
            { itemName, itemImage, itemPrice, itemCondition, itemLocation },
            index
          ) => {
            const isFirst = index === 0
            const dragHandlers = isFirst ? panResponder.panHandlers : {}
            return (
              <CardSwiper
                key={itemName}
                itemName={itemName}
                itemImage={itemImage}
                itemPrice={itemPrice}
                itemCondition={itemCondition}
                itemLocation={itemLocation}
                isFirst={isFirst}
                swipe={swipe}
                tiltSign={tiltSign}
                {...dragHandlers}
              />
            )
          }
        )
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
  greyScreen: {
    backgroundColor: 'grey',
  },
  normalScreen: {
    backgroundColor: 'white',
  },
})