import React from 'react';
import {useDispatch} from "react-redux";
import {View, Text, Image, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import MarkedUnread from '../../assets/markedUnread.svg';
import { clickIdDevAction } from "../../notificReducer/notificReducer";
import size from '../../functions/ratio';

const DevelopUnreadComponent=({el, mod, setMod, ind, setInd})=> {

  const dispatch=useDispatch();

  const receveElem=(el)=>{
    dispatch(clickIdDevAction(el));
    setMod(!mod);
    if (el.employ==='dev'){
      setInd(1);
    }
    else {
      setInd(2);
    }
  }

  return(
    <View style={styles.viewContainer}>
      {el.map((item, index)=>(
        <TouchableOpacity key={index} onPress={()=>receveElem(el[index])}>
          <View style={styles.contain}>
            <View>
          <Image style={styles.img} source={item.src}/>
            </View>
            <View style={{flexDirection:'column'}}>
            <View style={styles.viewName}>

             <Text style={styles.txt}>Name Surname </Text>
              {el[index].employ!=='dev'
                ?
                <Text style={styles.txt}>send request</Text>
                :
                <>
                <Text style={[styles.txt, {color: el[index].typeOfRequest==='declined' ? '#EE9087' : '#598D8D'}]}>{el[index].typeOfRequest}</Text>
                <Text style={styles.txt}> your request </Text>
                </>
                }

            </View>
            <View>
              <Text style={styles.txt1}>{el[index].dat+'|'+ el[index].tim}</Text>
            </View>
            </View>
            {!el[index].notif && <View><MarkedUnread/></View>}
            </View>
        </TouchableOpacity>
      ))}
    </View>

  )
    }

export default DevelopUnreadComponent;


const styles = StyleSheet.create({
  contain:{
    flexDirection:'row',
    width:size.size322,
    alignItems:'center',
    justifyContent:'space-between'
  },
    txt: {
    fontSize:12,
    fontWeight:'600',
    lineHeight:14.63,
    color:'#2C2C2C'
  },
  txt1: {
    fontSize:10,
    fontWeight:'400',
    lineHeight:16,
    letterSpacing:0.25,
    color:'#949494'
  },
  img:{
    width:size.size32,
    height:size.size32,
    borderRadius:size.size11,
    margin:size.size7
  },
  viewName:{
    flexDirection:'row',
    width:size.size230
  },
  viewContainer:{
    marginLeft:(size.size11*-1)
  }
})

