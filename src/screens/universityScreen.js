import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    TextInput,
  } from 'react-native';
  import React from 'react';
  import {colors} from '../components/theme';
  import Button from '../components/button';
import { User } from '../components/Context';

  
  const {width, height} = Dimensions.get('window');
  
  const UniversityScreen = ({navigation}) => {
    const [isActive, setActive] = React.useState(false);
    const [input, setinput] = React.useState('');

    const {user,setuser} = React.useContext(User)
  console.log(user);

  const addunitostate = () => {
    if(input === ''){
      return alert('Please select Your University')
    }
    setuser({...user,university:input})
    navigation.navigate('PassionScreen')
  }
  
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          width: width,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width / 1.2,
            flex: 1,
            height: height,
            justifyContent: 'space-between',
          }}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>My University is</Text>
          </View>
          <View style={{paddingHorizontal: 15}}>
            <TextInput
              style={[
                styles.input,
                {borderBottomColor: isActive ? '#ea3c53' : '#dadada'},
              ]}
              onFocus={() => setActive(true)}
              onBlur={() => setActive(false)}
              value={`${input}`}
              onChangeText={value => setinput(value)}
            />
            <Text style={styles.paratext}>
              This is how it will appear in tinder and you will not be able to
              change it
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Button
              disabled={input.length > 3 ? false : true}
              bg={input.length > 3 ? colors.red : colors.lightgrey}
              color={input.length > 3 ? '#fff' : colors.darkgrey}
              text={'I agree'}
              func={addunitostate}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default UniversityScreen;
  
  const styles = StyleSheet.create({
    textcontainer: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      width: 280,
      // backgroundColor:"red"
    },
    text: {
      fontSize: 35,
      color: colors.darkgrey,
      fontWeight: '500',
      letterSpacing: 1.5,
    },
    input: {
      width: '100%',
      fontSize: 20,
      borderBottomWidth: 2,
  
      padding: 10,
      color: colors.darkgrey,
    },
    paratext: {
      marginTop: 5,
      fontSize: 15,
      fontWeight: '400',
      letterSpacing: 0.7,
      color: colors.grey,
    },
  });