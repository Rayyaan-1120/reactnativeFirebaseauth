import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';
import PhoneNumberInput from './phoneNumberInput';
import OtpScreen from './otpScreen';
import AgreementScreen from './agreementScreen';
import NameScreen from './nameScreen';
import BirthdayScreen from './birthdayScreen';
import GenderScreen from './genderScreen';
import UniversityScreen from './universityScreen';
import PassionScreen from './passionScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Otp"
     >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="PhoneNumberInput"
        component={PhoneNumberInput}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="AgreementScreen"
        component={AgreementScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="NameScreen"
        component={NameScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="BirthdayScreen"
        component={BirthdayScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="GenderScreen"
        component={GenderScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="UniversityScreen"
        component={UniversityScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="PassionScreen"
        component={PassionScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
