import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import size from '../../functions/ratio';

const ButtonForNotif=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.stybut}
      >
      <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonForNotif;


const styles = StyleSheet.create({
  stybut: {
    marginTop: size.size35,
    height: size.size32,
    width: size.size101,
    backgroundColor: '#347474',
    marginRight: size.size5,
    borderRadius: size.size4,
    justifyContent: "center",
    alignItems: "center"
  }
})
