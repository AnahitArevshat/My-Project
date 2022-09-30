import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import size from '../../functions/ratio';

const Input=({lable, iconName, error, password, onFocus=()=>{}, ...props})=> {
  const[isFocused, setIsFocused]=useState(false);
  const[hidePassword, setHidePassword]=useState(password);

  return (
    <View>
      <Text style={style.lable}>{lable}</Text>
      <View style={[style.inputContaner, {borderColor: error ? 'red' : isFocused ? '#DEDEDE': 'light'}]}>
        <Icon name={iconName} style={{fontSize:size.size22, marginRight:size.size10, color:"#11493E"}}/>
        <TextInput
        style={{flex:1}} {...props}
        secureTextEntry={hidePassword}
        autoCorrect={false}
        onFocus={()=>{onFocus();setIsFocused(true)}}
        onBlur={()=>{setIsFocused(false)}}/>
        {iconName==='lock-outline' &&
         <Icon
           style={{color:'#83B7AD', fontSize:22}}
           onPress={()=>setHidePassword(!hidePassword)}
           name={hidePassword ? 'visibility' : 'visibility-off'}/>}

      </View>
      {error && <Text style={{color:'red', fontSize:size.size12, marginTop:size.size7}}> {error}</Text>}
      </View>
  );
}
const style=StyleSheet.create({
  lable:{marginVertical:size.size5, fontSize:size.size14,color:'#DEDEDE'},
  inputContaner:{
    width:size.size329,
    height:size.size45,
    flexDirection:'row',
    borderWidth:size.size1/2,
    paddingHorizontal:size.size15,
    alignItems:'center',
    }
})
  export default Input;
