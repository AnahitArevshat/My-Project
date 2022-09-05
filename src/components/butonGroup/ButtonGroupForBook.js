import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import size from '../../functions/ratio';

const ButtonGroupForBook=({buttons, doSomthingAfterClick})=>{

  const[clickedId, setClickedId]=useState(null);

  const numColumns=2;

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

export default ButtonGroupForBook;


const styles=StyleSheet.create({
  contain:{
    flex:1,
   },
  button:{
    flex:1,
    marginLeft:size.size35,
    marginRight:size.size40,
    margin:size.size5,
    height:size.size35,
    width:size.size125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderColor:'#347474',
    borderWidth:size.size2,
    borderRadius:size.size6,
  },

  txt:{
    color:'#949494'
  },
  txtActive:{
    color:'black',
  },

  buttonActive:{
    flex:1,
    marginLeft:size.size35,
    marginRight:size.size40,
    margin:size.size5,
    height:size.size35,
    width:size.size125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E7F2F2',
    borderColor:'#347474',
    borderWidth:size.size2,
    borderRadius:size.size6,


  }
})





