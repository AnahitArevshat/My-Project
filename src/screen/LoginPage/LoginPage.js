import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity, Keyboard,
} from "react-native";
import {mainStyle} from './styleLoginPage';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {getPhotosAction} from '../../reduxLogic/Actions/action'
import size from '../../functions/ratio';


const LoginPage=({navigation})=>{

  //const task=useSelector(state=>state.tasks);

  //const item= useSelector(state => state.photosReducer.photos);

  //console.log(item);
  //console.log(task)

  const getItem = function () {
    dispatch(getPhotosAction());
  };


  const loadSecond=()=>{
    navigation.navigate('ForgotPassword');
  }
  const[inputs, setInputs]=useState({email:'', password:''});
  const[errors, setErrors]=useState({});

  const dataOnChange=(text, input)=>{
    setInputs(prevState=>({...prevState, [input]:text}))
  }
  const dataError=(errorMessage, input)=>{
    setErrors(prevState=>({...prevState, [input]:errorMessage}))
  }
  const validate=()=>{
    Keyboard.dismiss();
    let valid=true;
    if(!inputs.email){
      dataError('Please input email', 'email');
      valid=false;
    }
    else if(!inputs.email.match(/\S+@\S+\.\S+/)){
      dataError('Please input valid email', 'email');
     }
    if(!inputs.password){
      dataError('Please input password', 'password');
    }
    if(inputs.email && inputs.password) {
      //navigation.navigate('BottomNavigation', task);

      navigation.navigate('BottomNavigation', {
        screen: 'Home',
        //param1: task,
        //task,
      });

    }

  }

  return (
    <SafeAreaView style={mainStyle.container}>
      <Image
        style={{width:size.size263,height:size.size241, marginBottom:20}}
        source={require("../../image/Group5591.png")}
      />
      <Text style={mainStyle.txt}>Log in</Text>
      <View>
        <Input
          iconName='person-outline'
          placeholder='Email'
          error={errors.email}
          onChangeText={text=>dataOnChange(text, 'email')}
          onFocus={()=>{dataError(null, 'email')}}
          //lable="Email"
        />
        <Input
          error={errors.password}
          onChangeText={(text)=>dataOnChange(text, 'password')}
          onFocus={()=>{dataError(null, 'password')}}
          iconName='lock-outline'
          //lable="Password"
          placeholder='Password'
        />
        <Button title='Login' onPress={validate}/>
        <TouchableOpacity onPress={loadSecond}>
          <Text style={{textAlign:'right', marginTop:size.size15}}>Forgot password?</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>)
}

export default LoginPage;
