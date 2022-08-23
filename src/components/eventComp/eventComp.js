import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import moment from 'moment';
import { Shadow } from 'react-native-shadow-2';
import ChackIcon from "../chackIcon/chakIcon";

const EventComp=({el})=>{

  return (
    <View style={styles.contain}>
      <FlatList data={el} keyExtractor={(item, index)=>index} renderItem={({item})=>(
        <View style={styles.shad}>
        <View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>

            <View style={{width:5, height:111, backgroundColor:'#F4C584',borderColor:'#F4C584', borderBottomLeftRadius:6, borderTopStartRadius:6}}/>

          <View style={{flex:1}}>
            <Text style={[styles.txt,{marginLeft:2}]}>{item.type}</Text>
            <Text style={{textAlign:'justify', fontSize:12, fontWeight:'400', marginTop:10, marginLeft:2, marginRight:7}}>{item.descript}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Text style={{ marginTop:12}}>{moment(item.dat).format('MMM DD, YYYY')}| {item.duration}</Text>
              <View style={{marginLeft:50, marginTop:12, marginRight:5}}><Text>{item.room}</Text></View>
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
      width:315,
    },

  shad:{
    width:315, height:111, marginTop:15,borderRadius:6,
    shadowColor: 'gray',
    shadowOpacity: 1,
    elevation: 4,
    flex: 1,
    shadowRadius: 6,
    borderColor:'gray',
    overflow: 'hidden',
  },

    txt:{fontSize:16,
      fontWeight:'600',
      lineHeight:24,
    },

  })

/*<View style={styles.shad}>
          <View style={{width:5, height:111, backgroundColor:'#F4C584',borderColor:'#F4C584', borderBottomLeftRadius:6, borderTopStartRadius:6}}/>
 </View>*/



/*<View style={{flexDirection:'row', alignItems:'center', marginBottom:5}}>

          <View style={{width:5, height:111, backgroundColor:'#F4C584',borderColor:'#F4C584', borderBottomLeftRadius:6, borderTopStartRadius:6}}></View>
            <View style={{flex:1}}>
            <Text style={styles.txt}>{item.type}</Text>
            <Text style={{textAlign:'justify', fontSize:12, fontWeight:'400', marginTop:10}}>{item.descript}</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={{ marginTop:12}}>{moment(item.dat).format('DD MMM YYYY')}|</Text>
               <Text style={{ marginTop:12}}>{item.duration}</Text>
               <View style={{marginLeft:55, marginTop:12}}><Text>{item.room}</Text></View>
              </View>
            </View>

        </View>*/



