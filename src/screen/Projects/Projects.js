import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Slaq from '../../assets/Proj/Slaq.svg';
import {projec} from '../../items/ProjPage';

import size from '../../functions/ratio';

const Projects=({navigation})=>{

  const [proj, setProj]=useState(projec);

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: size.size1,
          width: "85%",
          marginTop:size.size10,
          marginLeft:size.size40,
          backgroundColor: "#E3E3E3",
        }}
      />
    );
  }

  return(
  <>
    <View style={{alignItems:'center'}}>
      <Text style={styles.txtLeft}>Projects</Text>
    </View>
    <FlatList data={proj} keyExtractor={(item, index)=>index}  ItemSeparatorComponent={ItemDivider} renderItem={({item})=>(
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{marginLeft:size.size40,marginTop:size.size10}}>
          <Image style={{width:size.size60, height:size.size60, borderRadius:size.size4, marginVertical:size.size5,
            }} source={item.src}/>
        </View>
        <View style={{marginTop:size.size10}}>
          <View style={{width:size.size113, height:size.size18}}>
          <Text style={styles.txtProj}>{item.name}</Text>
          </View>
          <View style={{width:size.size140, height:size.size32}}>
          <Text style={styles.txtSpec}>Some description here about project</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('ProjPag', item)}>
        <Slaq style={{marginRight:size.size30}}/>
        </TouchableOpacity>
      </View>

    )}
    />
    </>
  )
}

export default Projects;


const styles = StyleSheet.create({
  txtLeft: {
    marginTop: size.size40,
    marginBottom: size.size20,
    fontSize: size.size16,
    fontWeight: '500',
    lineHeight: size.size24,
    letterSpacing: 0.24,
    color: '#1B3131'
  },
  txtProj: {
    marginLeft:(size.size10*-1),
    fontSize: size.size16,
    fontWeight: '500',
    letterSpacing: 0.24,
    lineHeight: size.size18,
    color: '#616062'
  },

    txtDesc:{
    fontSize:size.size14,
    fontWeight:'600',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#616062',
    marginLeft:size.size40,
    marginTop:size.size20,
  },

    txtSpec:{
    marginLeft:(size.size10*-1),
    fontSize:size.size14,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#949494',
  }
})




