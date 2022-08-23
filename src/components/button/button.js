import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={{marginTop: 45, height:38, width:329, backgroundColor:'#11493E',justifyContent: "center",alignItems: "center"
          }}>
          <Text style={{color:'white', fontWeight:'600', fontSize:14, lineHeight:16}}>{title}</Text>
    </TouchableOpacity>)
}
export default Button;
