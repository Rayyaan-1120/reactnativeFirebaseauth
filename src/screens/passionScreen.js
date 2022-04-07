import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  import React, { useState } from 'react';
  import {colors} from '../components/theme';
  import Button from '../components/button';
import { User } from '../components/Context';
  
  const {width, height} = Dimensions.get('window');

  const passions = [
      {
          title:"Shopping"
      },
      {
          title:"Tea"
      },
      {
          title:"Gamer"
      },
      {
          title:"Grab a Drink"
      },
      {
          title:"Museum"
      },
      {
          title:"Brunch"
      },
      {
          title:"Blogging"
      },
      {
          title:"Foodie"
      },
      {
          title:"Volunteering"
      },
      {
          title:"Cat Lover"
      },
      {
          title:"Spirtuality"
      },
      {
          title:"Yoga"
      },
      {
          title:"Dog Lover"
      },
      {
          title:"Outdoors"
      },
      {
          title:"Sports"
      },
      {
          title:"DIY"
      },
      {
          title:"Photography"
      },
      {
          title:"Cooking"
      },
      {
          title:"Baking"
      },
      {
          title:"Art"
      },
      {
          title:"Coffee"
      },
      {
          title:"Working Out"
      },
      {
          title:"Dancing"
      },
      {
          title:"Gardening"
      },
      {
          title:"Astrology"
      },
      {
          title:"Swimming"
      },
      {
          title:"Enviromentalism"
      },
      {
          title:"Language exchange"
      },
      {
          title:"Wine"
      },
      {
          title:"Board Games"
      },
      {
          title:"Football"
      },
      {
          title:"Fashion"
      },
      {
          title:"Reading"
      },
      {
          title:"Comedy"
      },
      {
          title:"Disney"
      },

  ]
  
  const PassionScreen = ({navigation}) => {

    const [passion,setpassion] = useState([])

   const {user,setuser} = React.useContext(User)

   const addpassionstostate = () => {
       setuser({...user,passion: passion})
       navigation.navigate("ImageScreen")
   }


    console.log(passion)
    
  
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
            width: width / 1.1,
            flex: 1,
            height: height,
          }}>
          <View style={styles.textcontainer}>
            <Text style={styles.text}>Passions</Text>
            <Text style={styles.paratext}>
              Let EveryOne Know What are You Passionate about By adding it to your Profile
            </Text>
            </View>
            <View style={styles.passionsdiv}>
                {passions.map((e,i) => {

                 let filtered = passion.some( vendor => vendor['title'] === e.title )
                 
                    return(
                        <TouchableOpacity disabled={passion.length === 5 ? !filtered : false} style={[styles.btn,{borderColor:filtered ? colors.red : colors.lightgrey}]} key={i} onPress={() => {
                            if(filtered){
                               return setpassion(passion.filter((f,i) => f.title !== e.title))
                            }else{
                                setpassion([...passion,e])
                            }
                            }}>
            <Text style={[styles.texttwo,{color:filtered ? colors.red : colors.lightgrey}]}>{e.title}</Text>
          </TouchableOpacity>
                    )
                })}
            </View>
            
        </View>
        <View style={{paddingVertical:20}}>
        <TouchableOpacity onPress={addpassionstostate} disabled={passion.length < 5} style={[styles.btntwo,{backgroundColor:passion.length === 5 ? colors.red : colors.lightgrey}]} >
        
        <Text style={[styles.textthree,{color:passion.length === 5 ? '#fff' : colors.darkgrey}]}>Continue {passion.length}/5</Text>
     </TouchableOpacity>
     </View>
      </SafeAreaView>
    );
  };
  
  export default PassionScreen;
  
  const styles = StyleSheet.create({
    textcontainer: {
      paddingVertical: 1,
      paddingHorizontal: 2,
      // backgroundColor:"red"
    },
    text: {
      fontSize: 40,
      color: colors.darkgrey,
      fontWeight: '700',
      letterSpacing: 1,
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
    passionsdiv:{
        flexDirection:'row',
        paddingVertical:5,
        // paddingHorizontal:10,
        flexWrap:"wrap",
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginTop:10
    },
    btn: {
        borderRadius: 50,
        // borderColor:colors.lightgrey,
        borderWidth:2,
        paddingHorizontal: 18,
        paddingVertical:5,
        // color: colors.grey,
        marginTop: 6,
        alignItems: 'center',
        marginHorizontal:5
      },
      texttwo: {
        fontSize: 15,
        fontWeight: '600',
        // color:colors.lightgrey
      },
      textthree:{
        fontSize:17,
        fontWeight:"600",
        textTransform:"uppercase",
    },
    btntwo:{
        width:width / 1.2,
        borderRadius:50,
        padding:10,
        alignItems:'center',
    },
  });