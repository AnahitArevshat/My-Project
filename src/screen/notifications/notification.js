import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import ButtonGroupeForNotif from '../../components/butonGroup/buttonGroupeForNotif';
import { homeStyle } from "../HomePage/styleHomePage";
import DevelopUnreadComponent from '../../components/DevelopUnreadComponent/DevelopUnreadComponent';

const Notifications=()=>{

  const printButtonLable=(value)=>{
    console.log(value);
  }

  return(
    <View>
    <View style={{alignItems:'center'}}>
    <View style={{marginTop:50}}>
    <Text style={styles.txt}>Notifications</Text>
    </View>
    <View style={{flexDirection: 'row', width:340, marginTop: 30}}>
      <ButtonGroupeForNotif
        buttons={['Unread', 'Read']}
        doSomthingAfterClick={printButtonLable}
      />
    </View>
    <TouchableOpacity style={{marginTop:20, marginLeft:225}}>
      <Text style={styles.txt1}>Mark all as read</Text>
    </TouchableOpacity>
  </View>
      <View style={{marginTop:30, marginLeft:40}}>
    <DevelopUnreadComponent/>
      </View>
  </View>
  )
}

export default Notifications;


const styles=StyleSheet.create({
  txt: {
    fontSize:16,
    fontWeight:'500',
    lineHeight:24,
    letterSpacing:0.25,
    color: '#1B3131'
  },
  txt1:{
    fontSize:12,
    fontWeight:'500',
    lineHeight:15,
    color: '#347474',
    textAlign:'right'
  }
})
