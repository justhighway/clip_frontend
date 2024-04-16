// import KakaoLogin from '../screens/KakaoLogin'
import MainTab from './MainTab'
import SignInScreen from '../screens/SignInScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import UploadItemScreen from '../screens/UploadItemScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useUserContext } from '../../contexts/UserContext'

const Stack = createNativeStackNavigator()

const RootStack = () => {
  const { user } = useUserContext()
  console.log('user: ', user)
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <>
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen
            name="UploadItem"
            component={UploadItemScreen}
            options={{ headerShown: true }}
          />
        </>
      ) : (
        <>

          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default RootStack
