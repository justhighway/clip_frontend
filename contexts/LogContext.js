import { createContext } from 'react'

// context는 전역적으로 사용할 수 있는 값을 관리할 때 사용

// 새로운 context 만들 때에 createContext() 함수 사용
// context 만들면 LogContext.Provider, LogContext.Consumer가 생성됨

// provider는 context의 값을 변경할 때 사용 - context 안에 있는 값을 사용할 컴포넌트를 감싸주는 용도
// consumer는 context의 값을 사용할 때 사용

// provider에는 value라는 props를 설정할 수 있음 - 이 값이 context를 통해 여러 컴포넌트에서 공유됨
// provider 컴포넌트를 사용하면 하위 컴포넌트에서 context의 값을 사용할 수 있음

export const LogContext = createContext('안녕하세요!')
