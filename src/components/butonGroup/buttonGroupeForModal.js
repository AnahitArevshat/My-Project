import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import size from '../../functions/ratio';

const ButtonGroupForModal=({buttons, doSomthingAfterClick})=>{

  const[clickedId, setClickedId]=useState(null);

  const numColumns=3;

   const HandleClick=(el, id)=>{
    setClickedId(id);
    doSomthingAfterClick(id);
  }

  return(

    <View style={styles.contain}>
      <FlatList data={buttons} renderItem={({item,index})=>(
        <View>
          <TouchableOpacity
            onPress={(el)=>HandleClick(el, index)}
            key={index} style={[index===clickedId ? styles.buttonActive :styles.button]}>
            <Text style={index===clickedId ? styles.txtActive :styles.txt}>{item}</Text>
          </TouchableOpacity>
        </View>)}
        numColumns={numColumns}
      />
    </View>
          )
        }

export default ButtonGroupForModal;


const styles=StyleSheet.create({
  contain:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',

  },
  button:{
    flex:1,
    margin:4,
    height:size.size30,
    width:size.size110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderColor:'#F5F5F5',
    borderWidth:size.size3,
    borderRadius:size.size4,
  },

  txt:{
    color:'black'
  },
  txtActive:{
    color:'black',
  },

  buttonActive:{
    height:size.size30,
    width:size.size110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E7F2F2',
    borderColor:'#E7F2F2',
    borderWidth:size.size3,
    margin:size.size4
  }
})

