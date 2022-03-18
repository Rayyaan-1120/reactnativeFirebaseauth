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

const {width, height} = Dimensions.get('window');

const NameScreen = ({navigation}) => {
  const [isActive, setActive] = React.useState(false);
  const [input, setinput] = React.useState('');

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
          <Text style={styles.text}>My first name is</Text>
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
            func={() => navigation.navigate('BirthdayScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  textcontainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 200,
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
