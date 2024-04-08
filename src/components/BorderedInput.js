import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

function BorderedInput({ hasMarginBtm, ...rest }, ref) {
  return (
    <TextInput
      style={[styles.input, hasMarginBtm && styles.margin]}
      ref={ref} // ref는 또 뭐임?
      {...rest} // 이거 문법 뭔지 제대로 확인하기 (rest)
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
    fontSize: 18,
  },
  margin: {
    marginBottom: 16,
  },
})

// forwardRef를 사용하면 FC 2번째 파라미터에서 ref를 받아와 사용할 수 있음
// 파라미터로 받아온 ref를 TextInput에 설정해주면 다른 컴포넌트에서 이 컴포넌트 사용할 떼
// 이 컴포넌트에 ref 달면 내부 TextInput에 ref가 달리게 됨
// 따라서 TextInput에 바로 접근 가능해짐
export default React.forwardRef(BorderedInput)
