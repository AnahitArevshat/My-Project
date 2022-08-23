import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from "react-native";

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
    height:30,
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderColor:'#F5F5F5',
    borderWidth:3,
    borderRadius:4,
  },

  txt:{
    color:'black'
  },
  txtActive:{
    color:'black',
  },

  buttonActive:{
   // flex:1,
    height:30,
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E7F2F2',
    borderColor:'#E7F2F2',
    borderWidth:3,
    margin:4,
  }
})





/*  <View style={styles.contain}>
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
    </View>*/



/*const styles=StyleSheet.create({
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
    height:30,
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderColor:'#F5F5F5',
    borderWidth:3,
    borderRadius:4,
  },

  txt:{
    color:'black'
  },
  txtActive:{
    color:'black',
  },

  buttonActive:{
   // flex:1,
    height:30,
    width:120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E7F2F2',
    borderColor:'#E7F2F2',
    borderWidth:3,
    margin:4,
  }
})/*





/*{
        buttons.map((buttonLable,index)=>{
          return(
            <View>
            <TouchableOpacity
              onPress={(el)=>HandleClick(el, index)}
              key={index} style={[index===clickedId ? styles.buttonActive :styles.button]}>
              <Text style={index===clickedId ? styles.txtActive :styles.txt}>{buttonLable}</Text>
             </TouchableOpacity>
            </View>
          )
        })
      }*/


