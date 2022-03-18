import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('window')


const Button = ({color,disabled,bg,func,text,mt}) => {
  return (
    <TouchableOpacity disabled={disabled} style={[styles.btn,{backgroundColor:bg}]} onPress={func}>
        
    <Text style={[styles.texttwo,{color:color,marginTop:mt}]}>{text}</Text>
 </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    texttwo:{
        fontSize:17,
        fontWeight:"600",
        textTransform:"uppercase",
    },
    btn:{
        width:width / 1.2,
        borderRadius:50,
        padding:10,
        color:"#fff",
        backgroundColor:"#c4c3d0",
        alignItems:'center',
    },

})