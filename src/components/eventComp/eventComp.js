import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import moment from 'moment';
import size from '../../functions/ratio';


const EventComp=({el})=>{

  return (
    <View style={styles.contain}>
      <FlatList data={el} keyExtractor={(item, index)=>index} renderItem={({item})=>(
        <View style={styles.shad}>
        <View style={{flexDirection:'row', alignItems:'center', marginBottom:size.size5}}>

            <View style={{width:size.size5, height:size.size111, backgroundColor:item.color,borderColor:'#F4C584', borderBottomLeftRadius:6, borderTopStartRadius:6}}/>

          <View style={{flex:1}}>
            <Text style={[styles.txt,{marginLeft:size.size2}]}>{item.type}</Text>
            <Text style={{textAlign:'justify', fontSize:size.size12, fontWeight:'400', marginTop:size.size10, marginLeft:size.size2, marginRight:size.size7}}>{item.descript}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Text style={{ marginTop:size.size12}}>{moment(item.dat).format('MMM DD, YYYY')}| {item.duration}</Text>
              <View style={{marginLeft:size.size50, marginTop:size.size12, marginRight:size.size5}}><Text>{item.room}</Text></View>
            </View>
          </View>

        </View>
        </View>
      )}
      />
    </View>

    );
}

 export default EventComp;
const styles=StyleSheet.create({
    contain:{
      width:size.size315,
    },

  shad:{
    width:size.size315, height:size.size111, marginTop:15,borderRadius:6,
    shadowColor: 'gray',
    shadowOpacity: 1,
    elevation: size.size4,
    flex: 1,
    shadowRadius: size.size6,
    borderColor:'gray',
    overflow: 'hidden',
  },

    txt:{fontSize:size.size16,
      fontWeight:'600',
      lineHeight:size.size24,
    },

  })







