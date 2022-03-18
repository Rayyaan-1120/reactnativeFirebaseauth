import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {colors} from '../components/theme';
import Button from '../components/button';
import CheckBox from 'react-native-check-box'

const {width, height} = Dimensions.get('window');

const GenderScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [gender,setgender] = useState('')

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
          <Text style={styles.text}>I am a</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => setgender('Woman')} style={[styles.btn, {borderColor:gender === "Woman" ? colors.red : colors.lightgrey,borderWidth: 2}]}>
            <Text style={[styles.texttwo, {color: gender === "Woman" ? colors.red : colors.lightgrey}]}>Woman</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setgender('Man')} style={[styles.btn, {borderColor: gender === "Man" ? colors.red : colors.lightgrey,borderWidth: 2}]}>
            <Text style={[styles.texttwo, {color: gender === "Man" ? colors.red : colors.lightgrey}]}>Man</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical: 20}}>
          <View style={styles.checkboxcontainer}>
          <CheckBox
    onClick={()=>{
      setToggleCheckBox(!toggleCheckBox)
    }}
    isChecked={toggleCheckBox}
    checkBoxColor={colors.red}
    // leftText={"CheckBox"}
/>
            <Text style={styles.textthree}>Show my gender on my profile</Text>
          </View>
          <Button color={'#fff'} bg={colors.red} text="Continue" func={() => navigation.navigate('UniversityScreen')}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GenderScreen;

const styles = StyleSheet.create({
  textcontainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 250,
    // backgroundColor:"red"
  },
  text: {
    fontSize: 35,
    color: colors.darkgrey,
    fontWeight: '500',
    letterSpacing: 1.5,
  },
  texttwo: {
    fontSize: 17,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  textthree: {
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
    color:colors.grey,
    marginLeft:3
  },
  btn: {
    width: width / 1.2,
    borderRadius: 50,
    padding: 10,
    color: '#fff',
    marginTop: 20,
    alignItems: 'center',
  },
  checkboxcontainer: {
      flexDirection:"row",
      alignItems: 'center',
      paddingVertical:10,
      justifyContent:'center',
  }

});
