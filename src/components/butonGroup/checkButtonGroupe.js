import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import size from '../../functions/ratio';


const CheckButtonGroupe=({buttons, doSomthingAfterClick})=>{

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
            <View style={{flexDirection:'row', alignItems:'center', borderBottomWidth:size.size1, borderBottomColor:'#F5F5F5'}}>
              <View>
                <CheckBox value={index===clickedId ? true : false}/>
              </View>
              <View style={{marginTop:size.size20}}>
                <Text style={styles.txt}>{item}</Text>
              </View>
            </View>
          </TouchableOpacity>)}
        />
      </View>
    )
  }

export default CheckButtonGroupe;

const styles=StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    fontSize:size.size14,
    fontWeight:'500',
    letterSpacing:size.size1/4,
    marginBottom:size.size20
  }
})



