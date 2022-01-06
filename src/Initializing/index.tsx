import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert, View } from 'react-native'

import { Spinner } from 'src/components/Spinner'
import { USER_KEY } from 'src/config'
import { services } from 'src/services'

export const InitializingScreen = () => {
  const initializeApp = async () => {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (user) {
      await services.nav.startApp()
      // await goToHomeScreen()
    } else {
      await services.nav.AuthApp();
      // await goToAuthScreen()
    }
  }

  useEffect(() => {
    initializeApp().catch(error =>
      Alert.alert('error', `Couldn't initialize app: ${error}`)
    )
  }, [])

  return (
    <View>
      <Spinner />
    </View>
  )
}

