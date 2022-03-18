import { StyleSheet, Text, View,SafeAreaView ,Image} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation,route}) => {

    const {data,provider,token,phoneNumber} = route.params
    console.log(data)

    const [fbdata,setfbdata] = React.useState(null)

    React.useEffect(() => {
      if(token){
        fetch('https://graph.facebook.com/v2.5/me?fields=email,first_name,last_name,picture.type(large),friends&access_token=' + token)
            .then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setfbdata(json)
                })
            })
            .catch(() => {
                console.log('ERROR GETTING DATA FROM FACEBOOK')
            })
      }
    },[])

  return (
    <SafeAreaView style={{flex:1,alignItems: 'center',justifyContent: 'center'}}>
      <Text style={{marginVertical:5,color:"#222"}}>Welcome to Home</Text>
      {data && (
        <>
        <Text style={{marginVertical:5,color:"#222"}}>{data?.email}</Text>
      <Text style={{marginVertical:5,color:"#222"}}>{data?.name}</Text>
      <Image style={{width:200,height:200}} source={{uri:data?.photo}}/>
        </>
      )}

      {fbdata && (
         <>
        <Text style={{marginVertical:5,color:"#222"}}>{fbdata?.email}</Text>
        <Text style={{marginVertical:5,color:"#222"}}>{fbdata?.first_name}</Text>
        <Text style={{marginVertical:5,color:"#222"}}>{fbdata?.last_name}</Text>
        <Image style={{width:200,height:200}} source={{uri:fbdata?.picture?.data?.url}}/>
        </>
      )}

      {phoneNumber && (
        <Text style={{marginVertical:5,color:"#222"}}>otp code {phoneNumber}</Text>

      )}
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})