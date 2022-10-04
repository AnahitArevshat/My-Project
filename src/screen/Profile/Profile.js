import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from "react-native";
import {ProfileStyle} from '../Profile/styleProfile';

const Profile=({navigation})=>{
  return(
    <SafeAreaView>
    <View style={ProfileStyle.viewProfile}>
      <Text style={ProfileStyle.txt}>Profile</Text>
    </View>
      <TouchableOpacity style={ProfileStyle.emailContainer} onPress={()=> navigation.navigate('HisTas')}>
        <View style={ProfileStyle.viewWidth}>
          <Text style={ProfileStyle.txtLeft}>History tasks</Text>
         </View>
       </TouchableOpacity>
      <TouchableOpacity  style={ProfileStyle.emailContainer} onPress={()=> navigation.navigate('HisEven')}>
        <View style={ProfileStyle.viewWidth}>
          <Text style={ProfileStyle.txtLeft}>History events</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  style={ProfileStyle.emailContainer} onPress={()=> navigation.navigate('Proj')}>
        <View style={ProfileStyle.viewWidth}>
          <Text style={ProfileStyle.txtLeft}>Projects</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  style={ProfileStyle.emailContainer} onPress={()=> navigation.navigate('Login')}>
        <View style={ProfileStyle.viewWidth}>
          <Text style={ProfileStyle.txtLeft}>Log out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    )
}

export default Profile;

