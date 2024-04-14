import React, { Fragment, useCallback } from 'react'
import { Image, StyleSheet, Text, View, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import CardActions from './CardActions'

export default function CardSwiper({
  item,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}) {
  const { itemName, itemPrice, itemCondition, itemLocation, itemImage } = item

  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-150, 0, 150],
    outputRange: ['8deg', '0deg', '-8deg'],
  })

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  }

  const likeOpacity = swipe.x.interpolate({
    inputRange: [50, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const dislikeOpacity = swipe.x.interpolate({
    inputRange: [-100, -25],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  const passOpacity = swipe.y.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  })

  const renderChoices = useCallback(() => {
    return (
      <Fragment>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            { opacity: likeOpacity },
          ]}>
          <CardActions type="LIKE" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.dislikeContainer,
            { opacity: dislikeOpacity },
          ]}>
          <CardActions type="DISLIKE" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.passContainer,
            { opacity: passOpacity },
          ]}>
          <CardActions type="PASS" />
        </Animated.View>
      </Fragment>
    )
  }, [likeOpacity, dislikeOpacity, passOpacity])

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}>
      <Image source={itemImage} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.9)']}
        style={styles.gradient}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.itemInfo}>
            {itemPrice.toLocaleString()} · {itemCondition} · {itemLocation}
          </Text>
        </View>
      </LinearGradient>
      {isFirst && renderChoices()}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    height: '70%',
    borderRadius: 20,
    shadowColor: '#382B47',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemContainer: {
    position: 'absolute',
    bottom: 50,
    left: 24,
  },
  itemName: {
    fontSize: 38,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  itemInfo: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  choiceContainer: {
    position: 'absolute',
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{ rotate: '-30deg' }],
  },
  dislikeContainer: {
    right: 45,
    transform: [{ rotate: '30deg' }],
  },
  passContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
})
