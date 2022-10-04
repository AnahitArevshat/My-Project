import React from 'react';
import {
  SafeAreaView,
  Text,
  View, Image, TouchableOpacity,
} from "react-native";
import { secondStyle } from "./styleForgotPassword";
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import size from '../../functions/ratio';

const ForgotPassword=({navigation})=>{
  const loadBack=()=>{
    navigation.goBack();
  }

  return(
    <SafeAreaView style={secondStyle.container}>
      <Image
        style={secondStyle.imgSec}
        source={require("../../image/Group565.jpg")}
      />
      <Text style={secondStyle.txt}>Forgot password</Text>
      <View style={secondStyle.viewNewPass}>
        <Text style={secondStyle.txtNewPass}>Enter your email address and we'll email you your new password
        </Text>
      </View>
      <View style={{marginTop:size.size10}}>
        <Input
          iconName='person-outline'
          placeholder='Email'
        />
        <Button title='Send'/>
        <TouchableOpacity onPress={loadBack} >
          <Text style={secondStyle.txtLogin}>Back To <Text style={{color: '#11493E'}}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ForgotPassword;
