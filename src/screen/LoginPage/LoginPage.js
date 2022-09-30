import React, { useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { useDispatch, useSelector } from "react-redux";
import Google from '../../assets/google.svg';
import Faceb from '../../assets/facebook.svg';
import Phone from '../../assets/OtherPhone.svg';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity, Keyboard, Alert,TextInput
} from "react-native";

import { NotificationServices, requestUserPermission } from "../../utils/PushNotifications";
import {mainStyle} from './styleLoginPage';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import BottomSheetForNotif from "../../components/bottomSheetForNotif/bottomSheetForNotif";
import {getPhotosAction} from '../../reduxLogic/Actions/action'
import size from '../../functions/ratio';
import Loader from "../../components/Loader/Loader";
import InputOTP from "../../components/input/InputOTP";
import ButtonGroupeForNotif from "../../components/butonGroup/buttonGroupeForNotif";


const LoginPage=({navigation})=> {

  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phoneNum, setPhoneNum]=useState('');

  const [number, setNumber]=useState(0);

  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  function onAuthStateChanged(user) {
    console.log(user, 'user');
  }


  useEffect(() => {
    requestUserPermission();
    NotificationServices();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);



  //const task=useSelector(state=>state.tasks);

  //const item= useSelector(state => state.photosReducer.photos);

  //console.log(item);
  //console.log(task)

  GoogleSignin.configure({
    webClientId: '50062395086-7a7j7aa4a544nl2tuggnvf9ugimk4po3.apps.googleusercontent.com',
  });


  const signWithGoogleAsync = async () => {
    // Get the users ID token

    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    //return auth().signInWithCredential(googleCredential);


    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((user) => {
      console.log(user);
    })
      .catch((error) => {
        console.log(error);
      });

  };

// Sign in with Facebook

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  // sign in with Phone
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
     }

  async function confirmCode() {
    try {
      setConfirm(null);
      Alert.alert("Successfully Verified!!");
      setPhoneNum('');
      setCode('');
    } catch (error) {
      Alert.alert('Invalid code.');
    }
  }



  const getItem = function() {
    dispatch(getPhotosAction());
  };

  const printButtonLable=(value)=>{
    setNumber(value);
  }

  const loadSecond = () => {
    navigation.navigate('ForgotPassword');
  }


  const dataOnChange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }))
  }
  const dataError = (errorMessage, input) => {
    setErrors(prevState => ({ ...prevState, [input]: errorMessage }))
  }

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      dataError('Please input email', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      dataError('Please input valid email', 'email');
      valid = false;
    }
    if (!inputs.password) {
      dataError('Please input password', 'password');
      valid = false;
    }
    if (valid) {
      register();
    }

  }

    const register = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        try {
          //AsyncStorage.setItem('user', JSON.stringify(inputs));
          navigation.navigate('BottomNavigation', {
            screen: 'Home',
           });
        }
        catch (error) {
          Alert.alert('Error', 'Something went wrong')
        }
      }, 3000)
    }

    return (
      <SafeAreaView style={mainStyle.container}>
        <Loader visible={loading} />
        <Image
          style={{ width: size.size263, height: size.size241, marginBottom: size.size20 }}
          source={require("../../image/Group5591.png")}
        />
        <Text style={mainStyle.txt}>Log in</Text>
        <View>
          <View style={{flexDirection: 'row', width:size.size340, marginTop:size.size30, marginLeft:size.size10}}>
            <ButtonGroupeForNotif
              buttons={['Email Authentication', 'Phone Authentication']}
              doSomthingAfterClick={printButtonLable}
            />
          </View>
          {number===0 ?
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Input
                iconName='person-outline'
                placeholder='Email'
                error={errors.email}
                onChangeText={text => dataOnChange(text, 'email')}
                onFocus={() => {
                  dataError(null, 'email')
                }}
                //lable="Email"
              />
              <Input
                error={errors.password}
                onChangeText={(text) => dataOnChange(text, 'password')}
                onFocus={() => {
                  dataError(null, 'password')
                }}
                iconName='lock-outline'
                //lable="Password"
                placeholder='Password'
              />
              <Button title='Login' onPress={validate} />
              <TouchableOpacity onPress={loadSecond}>
                <Text style={{ textAlign: 'right', marginLeft:size.size225, marginTop: size.size15 }}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            :
            <View style={{marginTop:size.size14}}>

            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <View>
              <InputOTP iconName='call' placeholder='Phone number' value={phoneNum} onChangeText={text => setPhoneNum(text)}/>
            </View>
            <View style={mainStyle.ViewOTP}>
            <TouchableOpacity
            style={mainStyle.OTP}
            onPress={() => signInWithPhoneNumber(phoneNum)}>
            <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>Submit</Text>
            </TouchableOpacity>
            </View>
            </View>


              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <View>
                  <InputOTP placeholder='Enter OTP' value={code} onChangeText={text => setCode(text)}/>
                </View>
                <View style={mainStyle.ViewOTP}>
                  <TouchableOpacity
                    style={mainStyle.OTP}
                    onPress={() => confirmCode()}>
                    <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>Confirm Code</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          }
  <View style={number===0 ? {marginTop:size.size20} : {marginBottom:size.size20}}>
          <View style={{flexDirection:'row', marginTop:size.size30}}>
          <TouchableOpacity onPress={signWithGoogleAsync}>
            <Google style={{marginLeft:size.size10}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:size.size20}}
           onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
          >
            <Faceb/>
          </TouchableOpacity>
         </View>
  </View>
        </View>

      </SafeAreaView>)

   }
export default LoginPage;


/*
    <View style={{position:'absolute'}}>
          <Input
            iconName='person-outline'
            placeholder='Email'
            error={errors.email}
            onChangeText={text => dataOnChange(text, 'email')}
            onFocus={() => {
              dataError(null, 'email')
            }}
            //lable="Email"
          />
          </View>
            <View style={{position:'absolute', left:size.size210}}>
            <InputOTP placeholder='Enter OTP' value={code} onChangeText={text => setCode(text)}/>
            </View>


          <View style={{position:'absolute', top:90}}>
          <Input
            error={errors.password}
            onChangeText={(text) => dataOnChange(text, 'password')}
            onFocus={() => {
              dataError(null, 'password')
            }}
            iconName='lock-outline'
            //lable="Password"
            placeholder='Password'
          />
          </View>
            <View style={mainStyle.ViewOTP}>
              <TouchableOpacity
                style={mainStyle.OTP}
                onPress={() => confirmCode()}>
                <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>Confirm Code</Text>
              </TouchableOpacity>
            </View>

*/




