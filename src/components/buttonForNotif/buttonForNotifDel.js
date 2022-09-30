import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import size from '../../functions/ratio';

const ButtonForNotifDel=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.stybutDel}
    >
      <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonForNotifDel;

const styles = StyleSheet.create({
  stybutDel: {
    marginTop:size.size35,
    height:size.size32,
    width:size.size101,
    backgroundColor:'#D6453D',
    borderRadius:size.size4,
    justifyContent: "center",
    alignItems: "center"
  }
})
