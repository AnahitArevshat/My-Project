import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from "react-native";
import size from '../../functions/ratio';

const InputTasck=({name, onChange=()=>{}, onFocus=()=>{},...props})=> {
  const[isFocused, setIsFocused]=useState(false);
  return (
      <View style={styles.commonInput}>

        <TextInput
          style={{ paddingLeft:size.size15}}
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
