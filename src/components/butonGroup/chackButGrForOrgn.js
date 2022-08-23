import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList, Switch } from "react-native";
import CheckBox from '@react-native-community/checkbox';


const CheckButGrForOrgn=({buttons, doSomthingAfterClick})=>{

  const[clickedId, setClickedId]=useState(null);

  const HandleClick=(el, id)=>{
    setClickedId(id);
    doSomthingAfterClick(id);
  }
  const checkin=(el, id, index)=>{
    if(index!==clickedId){
      console.log(index);
    }
  }

  return(
    <View style={styles.contain}>
      <FlatList data={buttons} renderItem={({item,index})=>(
        <TouchableOpacity
          onPress={(el)=>HandleClick(el, index)}
          key={index}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
              <CheckBox value={index===clickedId ? true : false}/>
              <Text style={styles.txt}>{item}</Text>
          </View>
        </TouchableOpacity>)}
      />
    </View>
  )
}

export default CheckButGrForOrgn;

const styles=StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    fontSize:14,
    fontWeight:'500',
    letterSpacing:0.25,
    //marginBottom:20
  }
})



