import { StyleSheet, Text, View,ImageBackground,Image,SafeAreaView,Dimensions,Platform,TouchableOpacity } from 'react-native'
import React,{useState,useContext} from 'react'
import {
    AccessToken,
    AuthenticationToken,
    LoginButton,
    LoginManager
  } from 'react-native-fbsdk-next';
import { GoogleSignin,GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { User } from '../components/Context';


const {width,height} = Dimensions.get('window')

const LoginScreen = ({navigation}) => {

    // const [user,setuser] = useState(null)

    const {user,setuser} = useContext(User)

    console.log(user)

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setuser(userInfo.user)
          navigation.navigate('PhoneNumberInput',{
            data:userInfo?.user
          })
          // this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert(error.message)
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            alert(error.message)
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert(error.message)
            // play services not available or outdated
          } else {
            alert(error)
            // some other error happened
          }
        }
      };

      async function onFacebookButtonPress() {

        try{
          const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
          console.log(result)
          if (result.isCancelled) {
            throw 'User cancelled the login process';
          }
        
          // Once signed in, get the users AccesToken
          const data = await AccessToken.getCurrentAccessToken();
          console.log(data.accessToken)
        
          if (!data) {
            throw 'Something went wrong obtaining access token';
          }
        
          // Create a Firebase credential with the AccessToken
          const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        
          console.log(facebookCredential)
          // Sign-in the user with the credential
          await auth().signInWithCredential(facebookCredential);
    
          console.log('Signed in with fb')

          navigation.navigate('HomeScreen',{
            provider:"FaceBook",
            token:data.accessToken
          })
        }catch (error) {
           console.log(error)
        }
        // Attempt login with permissions
        
      }

      const signinwithphonenumber = () => {
        navigation.navigate('PhoneNumberInput')
      }

  return (
    <SafeAreaView style={styles.safecontainer}>
     <ImageBackground
     source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHW0-PORnfD-_PpAg4sR3CIIJ5bbsY_QVRJA&usqp=CAU"}}
     style={styles.imgbg}
     >
     <View style={{alignItems:"center"}}>
     <View style={styles.logo}>
         <Image style={styles.logimg} source={{uri:"https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"}} />
         <Text style={styles.logotxt}>Insta Dating</Text>
     </View>
     <View style={styles.aggretextcontainer}>
         <Text style={styles.aggretxt}>By Clicking On "Log in" You Agree our Terms.Learn how we process your data in our Privay Policy and Cookies Policy</Text>
     </View>
        <TouchableOpacity style={styles.btnstyle} onPress={signIn}>
         <Text style={styles.btntextstyle}>Log in wth Google</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.btnstyle} onPress={onFacebookButtonPress}>
         <Text style={styles.btntextstyle}>Log in With facebook</Text>
      </TouchableOpacity>
     <TouchableOpacity style={styles.btnstyle} onPress={signinwithphonenumber}>
         <Text style={styles.btntextstyle}>Log in With Phone Number</Text>
      </TouchableOpacity>
     </View>
     </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    safecontainer:{
        flex:1
    },
    imgbg:{
       width:width,
       flex:1
    },
    logo:{
        flexDirection:"row",
        padding:8,
        marginTop:100,
        alignItems:'center',
        
    },

    logimg:{
        width:50,
        height:50,
        resizeMode:"cover",
        marginRight:2
    },

    logotxt:{
        fontSize:25,
        color:"#fff",
        fontWeight:"bold"
    },

    aggretextcontainer:{
        padding:10,
        alignItems:"center",
        width:"90%",
        marginTop:height / 3
    },
    aggretxt:{
        fontSize:17,
        color:"#fff",
        fontWeight:"normal",
        textAlign:"center",
    },


    btnstyle:{
        width:width / 1.2,
        padding:10,
        borderRadius:100,
        backgroundColor:"#fff",
        marginVertical:6
    },
    btntextstyle:{
      textAlign:'center',
      fontSize:16,
      color:'#222'
    }

})

{/* <LoginButton
          style={{padding:25,alignItems:"center",width:290,marginTop:12,textAlign: "center"}}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              if (Platform.OS === 'ios') {
                AuthenticationToken.getAuthenticationTokenIOS().then((data) => {
                  console.log(data?.authenticationToken);
                });
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data?.accessToken.toString());
                });
              }
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
          loginTrackingIOS={'limited'}
          nonceIOS={'my_nonce'}
        /> */}