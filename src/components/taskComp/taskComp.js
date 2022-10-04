import React from 'react';
import {useDispatch} from "react-redux";
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import moment from 'moment';
import ChackIcon from '../chackIcon/chakIcon';
import { clickIdAction } from "../../tasksReducer/taskReducer";
import size from '../../functions/ratio';

const TaskComp=({dat, el, navigation})=>{

  const dispatch=useDispatch();

  const receveId=(el, index)=>{
     dispatch(clickIdAction(el));
     navigation.navigate('DelUpd');
  }

  return (
    <View style={styles.contain}>
      {el.map((item, index)=>(
          <TouchableOpacity key={index} onPress={()=>receveId(el[index])}>
          <View style={styles.viewMain}>
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
            <Text style={styles.itemProj}>{item.projects}</Text>
            </View>

        </View>
          </TouchableOpacity>
      ))}
    </View>)
}

const styles=StyleSheet.create({
  contain:{
    width:size.size315,
    borderRadius:size.size4,
    marginTop:size.size20
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
  itemProj:{
    color:'#fff',
    fontSize:size.size11
  },
  viewMain:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#E7F2F2',
    marginBottom:size.size5
  }
  },
  )
export default TaskComp;


