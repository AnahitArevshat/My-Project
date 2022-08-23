import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, Image, TouchableOpacity,
} from "react-native";
import { secondStyle } from "./styleForgotPassword";
import Input from '../../components/input/input';
import Button from '../../components/button/button';

const ForgotPassword=({navigation})=>{
  const loadBack=()=>{
    navigation.goBack();
  }

  return(
    <SafeAreaView style={secondStyle.container}>
      <Image
        style={{width: 192,height: 218.63, marginBottom:20}}
        source={require("../../image/Group565.jpg")}
      />
      <Text style={{
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '600',
        Letter: 0.25,
      }}>Forgot password</Text>
      <View style={{width:328, height:32}}>
        <Text style={{textAlign:'left'}}>Enter your email address and we'll email you your new password
        </Text>
      </View>
      <View style={{marginVertical:20}}>
        <Input
          iconName='person-outline'
          placeholder='Email'
        />
        <Button title='Send'/>
        <TouchableOpacity onPress={loadBack} >
          <Text style={{textAlign:'right', marginTop:15}}>Back To Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ForgotPassword;
