import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import size from '../../functions/ratio';

const Button=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={{marginTop:size.size45, height:size.size38, width:size.size330, backgroundColor:'#11493E',justifyContent: "center",alignItems: "center"
          }}>
          <Text style={{color:'white', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>{title}</Text>
    </TouchableOpacity>)
}
export default Button;
