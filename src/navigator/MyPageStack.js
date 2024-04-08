import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPageScreen from "../screens/mypage/MyPageScreen";

const Stack = createNativeStackNavigator();

export default function MyPageStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyPage" component={MyPageScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
