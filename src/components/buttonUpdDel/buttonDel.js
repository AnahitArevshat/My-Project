import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const ButtonDel=({title, onPress=()=>{}})=>{
  return(
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{marginTop: 45, height:38, width:155, borderWidth:1, borderColor:'red', backgroundColor:'white',justifyContent: "center",alignItems: "center"
      }}>
      <Text style={{color:'red', fontWeight:'600', fontSize:14, lineHeight:16}}>{title}</Text>
    </TouchableOpacity>)
}
export default ButtonDel;
