import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";

const InputTasck=({name,  onChange=()=>{}, onFocus=()=>{},...props})=> {
  const[isFocused, setIsFocused]=useState(false);
  return (
      <View style={styles.commonInput}>

        <TextInput
          style={{ paddingLeft: 15, }}
          onFocus={()=>{onFocus();setIsFocused(true)}}
          placeholder={name} />

      </View>
  );
}
  const styles=StyleSheet.create({

      commonInput: {
      width: '90%',
    }
      })

export default InputTasck;
