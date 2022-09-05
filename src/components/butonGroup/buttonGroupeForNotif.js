import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import size from '../../functions/ratio';

const ButtonGroupeForNotif=({buttons, doSomthingAfterClick})=>{

  const[clickedId, setClickedId]=useState(0);

  const HandleClick=(el, id)=>{
    setClickedId(id);
    doSomthingAfterClick(id);
  }

  return(
    <View style={styles.contain}>
      {
        buttons.map((buttonLable,index)=>{
          return(
            <TouchableOpacity
              onPress={(el)=>HandleClick(el, index)}
              key={index} style={[index===clickedId ? styles.buttonActive :styles.button]}>
              <Text style={index===clickedId ? styles.txtActive :styles.txt}>{buttonLable}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}
const styles=StyleSheet.create({
  contain:{
    flex:1,
    flexDirection:'row',
  },
  button:{
    height:size.size28,
    width:size.size158,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#347474',
    borderColor:'#347474',
    borderRadius:4,
  },
  txt:{
    color:'white'
  },
  txtActive:{
    color:'black'
  },

  buttonActive:{
    height:size.size28,
    width:size.size170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E7F2F2',
    borderColor:'#E7F2F2',
  }
})

export default ButtonGroupeForNotif;

