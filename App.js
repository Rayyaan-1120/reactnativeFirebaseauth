/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  View,
  Button,
  Image,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { GoogleSignin,GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/screens';
import UserContext from './src/components/Context';

// +1-555-521-5554


const App = () => {

  

  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '607293034601-ie35foequfipamdroj8t4rq6j44sc1tq.apps.googleusercontent.com',
      forceCodeForRefreshToken:true,
      offlineAccess:true
    });
  },[])

  

  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
  
// });

const MainApp = () => {
    return(
      <UserContext>
        <App />
      </UserContext>
    )
}


export default MainApp;
