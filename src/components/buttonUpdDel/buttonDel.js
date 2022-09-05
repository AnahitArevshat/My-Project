import React from 'react';
import {Text,TouchableOpacity} from 'react-native';
import size from '../../functions/ratio';

const ButtonDel=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{marginTop:size.size45, height:size.size38, width:size.size155, borderWidth:size.size1, borderColor:'red', backgroundColor:'white',justifyContent: "center",alignItems: "center"
      }}>
      <Text style={{color:'red', fontWeight:'600', fontSize:size.size14, lineHeight:size.size16}}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonDel;
