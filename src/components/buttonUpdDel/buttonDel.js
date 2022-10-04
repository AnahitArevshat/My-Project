import React from 'react';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';
import size from '../../functions/ratio';

const ButtonDel=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.stybut}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonDel;


const styles = StyleSheet.create({
  stybut: {
    marginTop:size.size45,
    height:size.size38,
    width:size.size155,
    borderWidth:size.size1,
    borderColor:'red',
    backgroundColor:'white',
    justifyContent: "center",
    alignItems: "center"
  },
  txt:{
    color:'red',
    fontWeight:'600',
    fontSize:size.size14,
    lineHeight:size.size16
  }
})
