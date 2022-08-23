import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Text, StyleSheet, TouchableOpacity, View, FlatList, Switch } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import CheckButGrForOrgn from '../butonGroup/chackButGrForOrgn';
import { updEventsHamar } from "../../eventsReducer/eventsReducer";

const CheckButGrForPartic=({buttons, doSomthingAfterClick})=>{

  const[clickedId, setClickedId]=useState(null);

  const dispatch=useDispatch();

  const HandleClick=(el, id)=>{
    setClickedId(id);
    doSomthingAfterClick(id);
   }

  const printButtonLable=(value)=>{
    dispatch(updEventsHamar(value));
   }

  return(
    <View style={styles.contain}>
      <FlatList data={buttons} renderItem={({item,index})=>(
        <>
        <TouchableOpacity
          onPress={(el)=>HandleClick(el, index)}
          key={index}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
              <CheckBox value={index===clickedId ? true : false}/>
              <Text style={styles.txt}>{item}</Text>
          </View>
        </TouchableOpacity>
          {index===clickedId
            &&
            <View style={{marginRight:230}}>
              <CheckButGrForOrgn
                buttons={['Name Surname', 'Name Surname', 'Name Surname']}
                doSomthingAfterClick={printButtonLable}
              />
            </View>
          }

        </>
      )}
      />
    </View>
  )
}

export default CheckButGrForPartic;

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


