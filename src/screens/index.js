import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text,TouchableOpacity} from 'react-native'
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
import {colors} from '../components/theme';
import ImageScreen from './imageScreen';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
    // initialRouteName='ImageScreen'
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
        name="ImageScreen"
        component={ImageScreen}
        options={{headerTitle: '',headerShadowVisible:false}}
      />
      <Stack.Screen
        name="PassionScreen"
        component={PassionScreen}
        options={{headerTitle: '',headerShadowVisible:false,headerRight:() => {
          return (
            <TouchableOpacity>
              <Text style={{fontSize:20,fontWeight:"600",color:colors.grey}}>Skip</Text>
            </TouchableOpacity>
          )
        }}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
