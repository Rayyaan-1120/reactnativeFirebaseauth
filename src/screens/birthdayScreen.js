import { StyleSheet, Text, View,Dimensions,SafeAreaView,TextInput } from 'react-native'
import React from 'react'
import { colors } from '../components/theme';
import Button from '../components/button';
import { User } from '../components/Context';

const {width, height} = Dimensions.get('window');


const BirthdayScreen = ({navigation}) => {

    const [input,setinput] = React.useState('')
    const [inputtwo,setinputtwo] = React.useState('')
    const [inputthree,setinputthree] = React.useState('')

    const {user,setuser} = React.useContext(User)

    const addbirthdaytostate = () => {
      if(input.length < 2 || inputtwo.length < 2 || inputthree.length < 4){
        return alert('Please enter the Right Date Format')
      }
      setuser({...user,birthday:`${inputthree}-${inputtwo}-${input}`})
      navigation.navigate('GenderScreen')
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
          <Text style={styles.text}>My birthday is</Text>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <View style={styles.inputcontainer}>
          <TextInput
            
            style={[styles.input,{width:'20%'}]}
            // onFocus={() => setActive(true)}
            // onBlur={() => setActive(false)}
            value={`${input}`}
            onChangeText={value => {
                if(value.length > 2 || value < 0 || value > 31){
                    return
                }
                setinput(value)}
            }
            keyboardType="phone-pad"
          />
          <Text style={styles.slash}>/</Text>
          <TextInput
          style={[styles.input,{width:'20%'}]}
           
            // onFocus={() => setActive(true)}
            // onBlur={() => setActive(false)}
            value={`${inputtwo}`}
            onChangeText={value => {
                if(value.length > 2 || value < 0 || value > 12){
                    return
                }
                setinputtwo(value)}
            }
            keyboardType="phone-pad"

          
          />
           <Text style={styles.slash}>/</Text>
          <TextInput
           style={[styles.input,{width:'50%'}]}
           value={`${inputthree}`}
           onChangeText={value => {
               if(value.length > 4 || value < 0){
                   return
               }
               setinputthree(value)}
           }
           keyboardType="phone-pad"
         
            
          />
          </View>
          
          <Text style={styles.paratext}>
           Your Age Will Be Publications
          </Text>
        </View>
<View style={{paddingVertical:20}}>
          <Button bg={colors.red} color={'#fff'} text="Continue" func={addbirthdaytostate}/>
        </View>
        </View>
    </SafeAreaView>
      
  )
}

export default BirthdayScreen

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

      inputcontainer: {
         width:'100%',
         flexDirection:'row',
         alignItems: 'center',
      },
      paratext: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: '400',
        letterSpacing: 0.7,
        color: colors.grey,
      },

      input: {
        // width: '100%',
        fontSize: 25,
        borderBottomWidth: 2,
        textAlignVertical:"bottom",
        paddingTop:10,
        borderColor:colors.lightgrey,
        paddingBottom:2,
        padding: 10,
        color: colors.darkgrey,
      },
      slash:{
          color:colors.lightgrey,
          fontSize: 30,
          alignSelf:'flex-end',
          marginBottom:-5,
          width:"5%",
          textAlign: 'center'
      }
})