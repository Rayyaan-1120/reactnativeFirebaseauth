import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,Dimensions,TouchableOpacity } from 'react-native'
import React,{useContext,useState} from 'react'
import { User } from '../components/Context';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';


const {width,height} = Dimensions.get('window')
const OtpScreen = ({route,navigation}) => {

    const CELL_COUNT = 6;


    const [code,setcode] = React.useState('')

    const {user,setuser} = useContext(User)

    console.log(user)

    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });




    async function confirmCode() {

        if(value.length < 6 || value.length > 6){
            return alert('please enter the valid code')
        }

              try {
                await confirming.confirm(value);
                alert('confirmed')
                navigation.navigate('HomeScreen',{
                    phoneNumber:value
                })
              } catch (error) {
                alert('Invalid code.');
              }
            }


  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
    <View style={styles.textcontainer}>
          <Text style={styles.text}>My Code is</Text>
      </View>
    <View style={{alignItems: "center",width:width}}>
      <View style={styles.resendcontainer}>
           <Text style={[styles.texttwo,{marginRight:10}]}>{user?.phoneNumber ? user.phoneNumber.slice(1) : '923089771679'}</Text>
           <TouchableOpacity style={[styles.resendbtn]}>
               <Text style={[styles.texttwo,{paddingHorizontal:10}]}>Resend</Text>
           </TouchableOpacity>
      </View>
      <View style={{alignItems: "center",marginTop:-20}}>
      <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}>
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
            </View>
      <TouchableOpacity disabled={value.length > 0 ? false : true} style={[styles.btn,{backgroundColor:value.length > 0 ? '#ea3c53' : '#d3d3d3'}]} onPress={() => navigation.navigate('AgreementScreen')}>
         <Text style={[styles.texttwo,{color:value.length > 0 ? '#fff' : '#696969'}]}>Continue</Text>
      </TouchableOpacity>
    </View>
    
    
  </SafeAreaView>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    textcontainer: {
        paddingVertical:10,
        paddingHorizontal:25,
        marginLeft:5,

    },
    text:{
        fontSize:28,
        color:"#696969",
        fontWeight:"700",
        letterSpacing:0.5
    },
    resendcontainer:{
        width:width /1.1,
        alignItems:'center',
        flexDirection:"row",
        marginTop:5,
        padding:5
    },

    texttwo:{
        fontSize:17,
        color:"#696969",
        fontWeight:"600",
        textTransform:"uppercase",
    },

    resendbtn:{
      padding:5,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:50,
      borderWidth:2,
      borderColor:'#d3d3d3'
    },

    inputcontainer: {
        padding:10,
        marginTop:10,
        width:'90%'
    },

    input:{
        width:'100%',
        backgroundColor:'#d3d3d3',
        fontSize:18,
        borderWidth:1,
        borderColor:'#dadada',
        borderRadius:8,
        padding:10,
        color:"#222"
    },

    btn:{
        width:width / 1.2,
        borderRadius:50,
        padding:10,
        color:"#fff",
        backgroundColor:"#c4c3d0",
        marginTop:50,
        alignItems:'center',
    },
    root: {},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {
      marginTop: 20,
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 4,
      marginTop: 32,
    },
    cellRoot: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      // borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginHorizontal: 5,
    },
    cellText: {
      color: '#696969',
      fontSize: 30,
      textAlign: 'center',
      lineHeight: 50,
  
  
    },
    focusCell: {
      borderBottomColor: '#ea3c53',
      borderBottomWidth: 3,
    },
  
})
