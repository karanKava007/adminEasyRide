import { View, Text } from 'react-native'
import React from 'react'
import FaqAdder from './src/container/FaqAdder'
import { DrawerNav } from './src/routes/DrawerNav'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import { configStore } from './src/redux/Store'

export default function App() {
  const store = configStore()
  return (
    <>
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNav/>
      </NavigationContainer>
    </Provider>
    </>
  )
}