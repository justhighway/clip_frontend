import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { items } from '../libs/data' // 데이터 불러오기

const { width, height } = Dimensions.get('window')

export default function DeckSwiper() {
  return (
    <View style={styles.container}>
      <Swiper
        cards={items} // 모든 데이터를 카드로 사용
        renderCard={card => {
          return (
            <View style={styles.card}>
              <Image source={card.itemImage} style={styles.image} />
              <Text style={styles.text}>{card.itemName}</Text>
            </View>
          )
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex)
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll')
        }}
        cardIndex={0} // 시작 카드 인덱스
        backgroundColor={'cyan'} // 카드 배경색
        stackSize={3} // 스택에 표시되는 카드 수
        infinite={true} // 무한 스크롤
        stackSeparation={13} // 카드 간 간격
        cardHorizontalMargin={10} // 카드 좌우 마진
        marginBottom={30} // 카드 하단 마진
        animateOverlayLabelsOpacity={true} // 카드 오버레이 레이블 투명도 애니메이션 활성화
        cardStyle={{ height: 800, width: 400 }} // 카드 스타일
        containerStyle={{
          flex: 1,
        }} // 컨테이너 스타일
        overlayLabels={{
          // 카드 오버레이 레이블
          left: {
            // 왼쪽 레이블
            element: (
              <MaterialCommunityIcons
                name="close-circle"
                size={100}
                color="green"
              />
            ),
            title: 'NOPE',
            style: {
              wrapper: styles.overlayLabelWrapperStyle,
            },
          },
          right: {
            element: (
              <MaterialCommunityIcons
                name="heart-circle"
                size={100}
                color="#FF0080"
              />
            ),
            title: 'LIKE',
            style: {
              wrapper: styles.overlayLabelWrapperStyle,
            },
          },
        }}></Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backGroundColor: 'pink',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'pink',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 20,
  },
  overlayLabelWrapperStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
