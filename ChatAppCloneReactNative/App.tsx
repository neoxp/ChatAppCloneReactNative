import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const randomImages = [
  'https://i.picsum.photos/id/930/200/300.jpg?hmac=mVMk8tDbj7-Utfz1VfwDV9UYCVrv9H0ktf0m1C0iBek',
  'https://picsum.photos/200/300',
  'https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs',
  'https://picsum.photos/200/300',
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  useEffect( () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
            )
        )

        if (userData.data.getUser) {
          console.log("User is already registered in database");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: 'Hey, I am using WhatsApp',
        }

        await API.graphql(
          graphqlOperation(
            createUser,
            { input: newUser }
          )
        )
      }
    }

    fetchUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)
