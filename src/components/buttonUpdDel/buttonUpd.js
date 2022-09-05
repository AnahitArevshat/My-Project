import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import size from '../../functions/ratio';

const ButtonUpd=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{marginTop: size.size45, height:size.size38, width:size.size155, backgroundColor:'#11493E',justifyContent: "center",alignItems: "center"}}>
      <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:16}}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonUpd;
