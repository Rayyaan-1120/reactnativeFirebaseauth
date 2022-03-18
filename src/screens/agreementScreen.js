import { StyleSheet, Text, View,SafeAreaView,Dimensions,Image } from 'react-native'
import React from 'react'
import { colors } from '../components/theme'
import Button from '../components/button'

const {width,height} = Dimensions.get('window')

const tips = [
    {
        title:"Be Yourself",
        para:"Make sure your photos,age and bio are true to who are you"
    },
    {
        title:"Stay Safe",
        para:"Don't be too quick to give out personal information.Date Safely"
    },
    {
        title:"Play it cool",
        para:"Respects others and treat them as you would like to be treated"
    },
    {
        title:"Be Proactive",
        para:"Always report Bad Behaviour"
    },

]


const AgreementScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.maincontainer}>
        <View style={{alignItems:'center'}}>
            <Image style={styles.logo} source={{uri:'https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'}}/>
            <Text style={styles.textstyle}>Welcome To Insta Dating</Text>
            <Text style={styles.textstyletwo}>Please follow these house rules</Text>
        </View>
        <View style={styles.tipscontainer}>
          {tips.map((e, i) =>{
              return(
                  <View key={i} style={styles.singletipcontainer}>
                      <View style={styles.headingcontainer}>
                          <Text style={styles.tickmark}>✓</Text>
                          <Text style={styles.headingtext}>{e.title}</Text>
                      </View>
                      <View>
                          <Text style={styles.paratext}>{e.para}</Text>
                      </View>
                  </View>
              )
          })}
        </View>
        <View style={{position:'absolute',bottom:30}}>
            <Button bg={colors.red} color={'#fff'} text={'I agree'} func={() => navigation.navigate('NameScreen')}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AgreementScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:"#fff"
    },
    maincontainer:{
        width:width,
        flex:1,
        alignItems:"center",
        backgroundColor:"#fff",
    },
    logo:{
        width:40,
        height:40,
        marginTop:20,
    },
    textstyle:{
        fontSize:20,
        fontWeight:"700",
        color:colors.darkgrey,
        marginTop:10
    },
    textstyletwo:{
        fontSize:18,
        fontWeight:"400",
        color:colors.grey,
        marginTop:5
    },
    tipscontainer:{
        width:width / 1.2,
        alignItems:'center',
        marginTop:25
    },
    singletipcontainer:{
        // alignItems:'center',
        padding:10,
        marginVertical:3,
        width:width /1.2
    },
    headingcontainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    tickmark:{
        fontSize:25,
        color:colors.red,
        marginRight:12
    },
    headingtext:{
        fontSize:18,
        color:colors.darkgrey,
        fontWeight:'bold'
    },
    paratext:{
        marginTop:5,
        fontSize:15,
        fontWeight:'500',
        color:colors.grey
    }

})