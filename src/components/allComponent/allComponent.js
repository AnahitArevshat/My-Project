import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import moment from 'moment';
import ChackIcon from '../chackIcon/chakIcon';
import { clickIdAction } from "../../tasksReducer/taskReducer";
import size from '../../functions/ratio';

const AllComponent=({dat, item, navigation})=>{

  return (
    <View style={styles.contain}>
        <>
          {item.projects
            ?
            <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#E7F2F2',
              //marginBottom:size.size5
            }}>
              <View>
                <ChackIcon />
              </View>
              <View style={{flex:1}}>
                <Text style={styles.txt}>{item.title}</Text>
                <View style={{flexDirection:'row'}}>
                  <Text>{moment(item.dat).format('MMM DD, YYYY')}|</Text>
                  <Text>{item.duration}</Text>
                </View>
              </View>
              <View style={[styles.proj, {backgroundColor:item.color}]}>
                <Text style={{color:'#fff', fontSize:size.size11}}>{item.projects}</Text>
              </View>
            </View>
            :
            <View style={styles.shad}>
              <View style={{flexDirection:'row', alignItems:'center'}}>

                <View style={{width:size.size5, height:size.size111, backgroundColor:item.color,borderColor:'#F4C584', borderBottomLeftRadius:6, borderTopStartRadius:6}}/>

                <View style={{flex:1}}>
                  <Text style={[styles.txt,{marginLeft:size.size2}]}>{item.type}</Text>
                  <Text style={{textAlign:'justify', fontSize:size.size12, fontWeight:'400', marginTop:size.size10, marginLeft:size.size2, marginRight:size.size7}}>{item.descript}</Text>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{ marginTop:size.size12}}>{moment(item.dat).format('MMM DD, YYYY')}| {item.duration}</Text>
                    <View style={{marginLeft:size.size50, marginTop:size.size12, marginRight:size.size5}}><Text>{item.room}</Text></View>
                  </View>
                </View>
              </View>
            </View>
          }
        </>

    </View>)
}

const styles=StyleSheet.create({
    contain:{
      width:size.size315,
      borderRadius:size.size4,
      marginTop:size.size10
    },

    txt:{fontSize:size.size16,
      fontWeight:'600',
      lineHeight:size.size24,
    },

    proj:{
      width:size.size100,
      height:size.size16,
      alignItems:'center',
      marginRight:size.size10
    },
    shad:{
      width:size.size315,
      height:size.size111,
      //marginTop:15,
      borderRadius:6,
      shadowColor: 'gray',
      shadowOpacity: 1,
      elevation: size.size4,
      flex: 1,
      shadowRadius: size.size6,
      borderColor:'gray',
      overflow: 'hidden',
    },
  },

)
export default AllComponent;


