import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import moment from 'moment';
import ChackIcon from '../chackIcon/chakIcon';
import { clickIdAction } from "../../tasksReducer/taskReducer";
import { tasks } from "../../items/tasks";

const TaskComp=({dat, el, navigation})=>{
  const task=useSelector(state=>state.tasks.tasks);
  const recId=useSelector((state)=>state.tasks.taskId);

  const dispatch=useDispatch();

  const receveId=(el, index)=>{
     dispatch(clickIdAction(el));
     navigation.navigate('DelUpd');
  }

  return (
    <View style={styles.contain}>
        <FlatList data={el} keyExtractor={(item, index)=>index} renderItem={({item, index})=>(
          <TouchableOpacity onPress={()=>receveId(el[index])}>
          <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#E7F2F2', marginBottom:5}}>
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
            <View style={{backgroundColor:'#F4C584', width:100, height:16, alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:11}}>{item.projects}</Text>
            </View>

        </View>
          </TouchableOpacity>
        )}
       />

    </View>)
}

const styles=StyleSheet.create({
  contain:{
    width:315,
    borderRadius:4,
    marginTop:20
    },
  viewchild:{
    width:315,
    height:49,
    marginTop:20,
  },
  txt:{fontSize:16,
      fontWeight:'600',
      lineHeight:24,
  },

      },

  )
export default TaskComp;


