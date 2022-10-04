import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Keyboard } from "react-native";
import size from '../../functions/ratio';

const InputTasck=({name, navigation, onChange=()=>{}, onFocus=()=>{},...props})=> {
  const[isFocused, setIsFocused]=useState(false);

  return (
      <View style={styles.commonInput}>

        <TextInput
          style={styles.inp}
          onFocus={()=>{onFocus();setIsFocused(true)}}
          placeholder={name} />

      </View>
  );
}
  const styles=StyleSheet.create({
      commonInput: {
      width: '90%',
    },
    inp:{
      paddingLeft:size.size15
    }
      })

export default InputTasck;
