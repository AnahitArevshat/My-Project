import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from "react-native";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input=({lable, iconName, error, password, onFocus=()=>{}, ...props})=> {
  const[isFocused, setIsFocused]=useState(false);
  const[hidePassword, setHidePassword]=useState(password);

  return (
    <View>
      <Text style={style.lable}>{lable}</Text>
      <View style={[style.inputContaner, {borderColor: error ? 'red' : isFocused ? '#DEDEDE': 'light'}]}>
        <Icon name={iconName} style={{fontSize: 22, marginRight:10, color:"#11493E"}}/>
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
      {error && <Text style={{color:'red', fontSize:12, marginTop:7}}> {error}</Text>}
      </View>
  );
}
const style=StyleSheet.create({
  lable:{marginVertical:5, fontSize:14,color:'#DEDEDE'},
  inputContaner:{
    width:329,
    height:45,
    flexDirection:'row',
    borderWidth:0.5,
    paddingHorizontal:15,
    alignItems:'center',
    }
})
  export default Input;
