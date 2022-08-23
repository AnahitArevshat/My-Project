import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from "react-native";

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
    //:'row',
    //flexWrap:'wrap',
    //justifyContent:'center',
    //alignItems:'center',

  },
  button:{
    flex:1,
    marginLeft:35,
    marginRight:40,
    margin:5,
    height:35,
    width:130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderColor:'#347474',
    borderWidth:2,
    borderRadius:6,
  },

  txt:{
    color:'#949494'
  },
  txtActive:{
    color:'black',
  },

  buttonActive:{
    flex:1,
    marginLeft:35,
    marginRight:40,
    margin:5,
    height:35,
    width:130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E7F2F2',
    borderColor:'#347474',
    borderWidth:2,
    borderRadius:6,


  }
})





