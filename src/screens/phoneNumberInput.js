import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,Dimensions,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState,useContext} from 'react'
import auth from '@react-native-firebase/auth';
import CountryPicker from 'react-native-country-picker-modal';
import { User } from '../components/Context';


const {width,height} = Dimensions.get('window')


const PhoneNumberInput = ({navigation}) => {

    const [confirm, setConfirm] = useState(null);
    const [countrycode,setcountrycode] = useState('PK')
    const [callingcode,setcallingcode] = useState('92')
    const [isActive, setActive] = useState(false);
    const [loading,setloading] = useState(false)

    const {user,setuser} = useContext(User)
    console.log(user);

    console.log(countrycode,callingcode)

    const [input,setinput] = useState('')

    console.log(input)

    async function signInWithPhoneNumber(phoneNumber) {
        if(input.length < 10 || input.length > 11){
            return alert('please enter the correct number')
        }
        try{

            setloading(true)
            navigation.setOptions({
                headerShown:false
            })
        

            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            console.log(confirmation,'I am confirmation')
            
          
            setloading(false)
            navigation.setOptions({
                headerShown:true
            })
            setuser({...user,phoneNumber:phoneNumber,confirmation:confirmation})

            navigation.navigate('Otp')
        }catch(e){
            console.log(e)
            
            setloading(false)
            navigation.setOptions({
                headerShown:true
            })
            alert(e.message)
        }

        

      }

      console.log(`+${callingcode} ${input}`)

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    {loading ? (<>
    <View style={{alignItems:'center',justifyContent: 'center',flex:1}}>
       <ActivityIndicator size={'large'} color="#ea3c53"/>
    </View>
    </>
    ) : (<>
    <View style={styles.textcontainer}>
          <Text style={styles.text}>My Number is</Text>
      </View>
      <View style={{width:width,alignItems:'center',marginTop:50}}>
      <View style={styles.twoinput}>
      <View style={{flexDirection:"row",marginTop:11,borderBottomWidth:2,borderColor:'#dadada',width:'25%',alignItems:'center',justifyContent:'center'}}>
      <CountryPicker 
             withFilter
             countryCode={countrycode}
             withFlag
             withAlphaFilter={false}
             withCallingCode
             onSelect={(country) => {
               console.log('country',country)
               const {cca2,callingCode} = country
               setcountrycode(cca2)
               setcallingcode(callingCode[0])
             }}
             containerButtonStyle={{
               alignItems:'center',
               
             }}
              
            />
            <Text style={{fontSize:20,color:'#696969'}}>+ {callingcode} </Text>
            
    </View>
    <TextInput 
           style={[styles.input,{borderBottomColor:isActive ? '#ea3c53' : '#dadada'}]}
           onFocus={() => setActive(true)}
           onBlur={() => setActive(false)}
           keyboardType="phone-pad"
           placeholder="+92563145252"
           value={`${input}`}
           onChangeText={(value) => setinput(value)}
          />
    </View>
    <View style={styles.aggtextcontainer}>
        <Text style={styles.aggtext}>When You Tap Continue. Insta Dating will send You a text with verification code Message and data rates may apply The Verified Phone Number can be used to login</Text>
    </View>
    <TouchableOpacity style={[styles.btn,{backgroundColor:input.length > 0 ? '#ea3c53' : '#d3d3d3'}]} onPress={() => signInWithPhoneNumber(`+${callingcode} ${input}`)}>
         <Text style={[styles.texttwo,{color:input.length > 0 ? '#fff' : '#696969'}]}>Continue</Text>
      </TouchableOpacity>
    </View>
    </>)}
      
    
    
   
     
    </SafeAreaView>
  )
}

export default PhoneNumberInput

const styles = StyleSheet.create({
    textcontainer: {
        paddingVertical:15,
        paddingHorizontal:25,
        marginLeft:5,
        marginTop:10,

    },
    text:{
        fontSize:25,
        color:"#696969",
        fontWeight:"600",
        
    },
    texttwo:{
        fontSize:18,
        fontWeight:"500",
        
    },
    inputcontainer: {
        padding:10,
        marginTop:10,
        width:'90%'
    },

    input:{
        width:'70%',
        fontSize:20,
        borderBottomWidth:2,
        textAlignVertical:"bottom",
        // lineHeight:25,
        paddingTop:10,
        paddingBottom:2,
        color:"#696969"
    },

    btn:{
        width:width / 1.1,
        borderRadius:50,
        padding:10,
        color:"#fff",
        backgroundColor:"#c4c3d0",
        marginTop:10,
        alignItems:'center',
    },
    twoinput:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:5,
        paddingHorizontal:10,
        width:width / 1.1,
    },
    aggtextcontainer:{
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:10,
        width:width / 1.1,
        marginTop:8
    },
 
    aggtext:{
      color:"#696969",
      fontSize:14,
      fontWeight:"400"
    }

})


// function PhoneSignIn() {
//     // If null, no SMS has been sent
    
  
//     const [code, setCode] = useState('');
  
//     // Handle the button press
   
  
//     async function confirmCode() {
//       try {
//         await confirm.confirm(code);
//         alert('confirmed')
//       } catch (error) {
//         alert('Invalid code.');
//       }
//     }
  
//     if (!confirm) {
//       return (
//         <Button
//           title="Phone Number Sign In"
//           onPress={() => signInWithPhoneNumber('+1 555-521-5554')}
//         />
//       );
//     }
  
//     return (
//       <>
//         <TextInput value={code} onChangeText={text => setCode(text)} />
//         <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </>
//     );
//   }
  