// import KakaoLogin from '../screens/KakaoLogin'
import MainTab from './MainTab'
import HomeScreen from '../screens/home/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import UploadItemScreen from '../screens/UploadItemScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="UploadItem" component={UploadItemScreen} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}

export default RootStack
