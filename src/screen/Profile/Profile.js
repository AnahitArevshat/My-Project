import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, TouchableOpacity,
} from "react-native";

import size from "../../functions/ratio";
import { proj } from "../../items/proj";
import Chack from "../../assets/chacked.svg";



const Profile=({navigation})=>{
  return(
    <SafeAreaView>
    <View style={{alignItems:'center', marginTop:size.size40}}>
      <Text style={styles.txt}>Profile</Text>
    </View>
      <TouchableOpacity style={styles.emailContainer} onPress={()=> navigation.navigate('HisTas')}>
        <View style={{width: '80%'}}>
          <Text style={styles.txtLeft}>History tasks</Text>
         </View>
       </TouchableOpacity>
      <TouchableOpacity  style={styles.emailContainer} onPress={()=> navigation.navigate('HisEven')}>
        <View style={{width: '80%'}}>
          <Text style={styles.txtLeft}>History events</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.emailContainer} onPress={()=> navigation.navigate('Proj')}>
        <View style={{width: '80%'}}>
          <Text style={styles.txtLeft}>Projects</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.emailContainer} onPress={()=> navigation.navigate('Login')}>
        <View style={{width: '80%'}}>
          <Text style={styles.txtLeft}>Log out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
    )
}

export default Profile;

const styles = StyleSheet.create({

  txt:{
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#1B3131'
  },
txtLeft:{
  fontSize:size.size12,
  color:'#000000',
  fontWeight:'400',
  lineHeight:size.size15,
  marginLeft:size.size25
},

  emailContainer: {
    height: size.size30,
    marginTop: size.size25,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
})




