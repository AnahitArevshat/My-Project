import React from 'react';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';
import size from '../../functions/ratio';

const ButtonSmall=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.but}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonSmall;


const styles=StyleSheet.create({
  but:{
    marginTop:size.size45,
    height:size.size38,
    width:size.size310,
    backgroundColor:'#11493E',
    justifyContent: "center",
    alignItems: "center"
  },
  txt:{
   color:'white',
    fontWeight:'600',
    fontSize:size.size14,
    lineHeight:size.size16
  }
})
