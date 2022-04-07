import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {colors} from '../components/theme';
import Button from '../components/button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {User} from '../components/Context';
import firestore from '@react-native-firebase/firestore';

const {width, height} = Dimensions.get('window');

const ImagesArray = [
  {
    image: '',
    id: 1,
  },
  {
    image: '',
    id: 2,
  },
  {
    image: '',
    id: 3,
  },
  {
    image: '',
    id: 4,
  },
  {
    image: '',
    id: 5,
  },
  {
    image: '',
    id: 6,
  },
];

const ImageScreen = ({navigation}) => {
  const {user, setuser} = React.useContext(User);

  const [images, setimages] = useState(ImagesArray);
  console.log(images);
  const [loading, setloading] = useState(false);

  const addimages = () => {
    setuser({...user, images: images,confirmation:'Confirmed'});
    console.log(user.signedwithgoogle);

    if(user?.signedwithgoogle){
        firestore()
        .collection('Users')
        .doc(user.userInfo.id)
        .set(user)
        .then(() => {
      setloading(false)
         navigation.navigate("HomeScreen")
         console.log('successfully account created')
        }).catch((e) => {
      setloading(false)
  
            alert("Error: " + e.message)
            console.log(e);
        })
    }

    

  };

  React.useEffect(() => {
    if (loading) {
      navigation.setOptions({
        headerShown: false,
      });
    } else {
      navigation.setOptions({
        headerShown: true,
      });
    }
  }, [loading]);

  const openimagelibrary = async (id, keyname) => {
    let index = images.findIndex(image => image.id === id);

    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    console.log(result, 'i am result');
    if (result.assets) {
      if (index !== -1) {
        let temparr = [...images];
        temparr[index][`image`] = result.assets[0].uri;
        setimages(temparr);
      } else {
        console.log('no match');
      }
    } else {
      setimages([...images]);
    }
  };

  const [showModal, setshowModal] = useState(true);

  const submitimages = async () => {
    images.forEach(async (img, i) => {
      const uploadurl = img.image;
      let filename = uploadurl.substring(uploadurl.lastIndexOf('/') + 1);

      if (filename !== '') {
        setloading(true);

        try {
          await storage().ref(filename).putFile(uploadurl);
        //   setloading(false);

        } catch (e) {
          setloading(false);
          console.log(e);
          Alert.alert(JSON.stringify(e.message));
        }
      } else {
        console.log('noo');
      }
    });

     addimages()
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <Modal
          isVisible={showModal}
          animationIn="fadeInDown"
          animationOut="fadeOutDown">
          <View
            style={{
              backgroundColor: '#fff',
              height: 250,
              alignItems: 'center',
              borderRadius: 10,
              position: 'relative',
            }}>
            <Text style={styles.modalheading}>Photo Access</Text>
            <Text style={styles.paratext}>
              To Upload Photos from your device,Insta Dating Needs to access
              your photos,Please tap 'Allow'
            </Text>
            <TouchableOpacity
              style={styles.btnstyle}
              onPress={() => setshowModal(false)}>
              <Text style={{fontSize: 20, color: '#fff'}}>Allow</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.red}
          style={{alignItems: 'center', justifyContent: 'center'}}
        />
      ) : (
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>Add Photos</Text>
            <Text style={styles.description}>
              Add at least two photos to continue
            </Text>
          </View>

          <View style={styles.imagecontainer}>
            {images.map((img, i) => {
              return (
                <View key={i} style={styles.imagebox}>
                  {img.image !== '' && (
                    <Image
                      source={{
                        uri:
                          img.image !== ''
                            ? img.image
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsVQ4NPcW9aiKDDfD6b11xZasy_zC3SAovA&usqp=CAU',
                      }}
                      style={{width: '100%', height: '100%'}}
                    />
                  )}
                  <TouchableOpacity
                    style={styles.addbtn}
                    onPress={() => openimagelibrary(img.id)}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#fff',
                        textAlign: 'center',
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                  {/* <Image style={{width:'100%', height:'100%'}}/> */}
                </View>
              );
            })}
          </View>
          <View style={{paddingVertical: 20}}>
            <Button
              bg={colors.red}
              color={'#fff'}
              text={'Continue'}
              func={submitimages}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  modalheading: {
    fontSize: 22,
    color: colors.darkgrey,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 15,
  },
  paratext: {
    fontSize: 18,
    color: colors.lightgrey,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 10,
    width: '80%',
    letterSpacing: 0.5,
  },
  btnstyle: {
    width: '100%',
    bottom: 0,
    left: 0,
    padding: 15,
    alignItems: 'center',
    backgroundColor: colors.red,
    position: 'absolute',
  },

  container: {
    width: width / 1.05,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },

  heading: {
    fontSize: 28,
    color: colors.darkgrey,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  description: {
    fontSize: 18,
    color: colors.lightgrey,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.3,
    marginTop: 2,
  },

  imagecontainer: {
    width: '100%',
    alignItems: 'center',
    //   paddingHorizontal:10,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  imagebox: {
    width: width / 3.5,
    height: 150,
    // padding:10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: colors.lightgrey,
  },
  addbtn: {
    position: 'absolute',
    width: 35,
    height: 35,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    bottom: -5,
    right: -5,
  },
});
