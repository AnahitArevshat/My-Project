import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import size from '../../functions/ratio';

const ButtonSmall=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{marginTop:size.size45, height:size.size38, width:size.size310, backgroundColor:'#11493E',justifyContent: "center",alignItems: "center"
      }}>
      <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonSmall;
