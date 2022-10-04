import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Slaq from '../../assets/Proj/Slaq.svg';
import {projec} from '../../items/ProjPage';
import {ProjectStyle} from '../Projects/styleProject';
import size from '../../functions/ratio';

const Projects=({navigation})=>{

  const [proj, setProj]=useState(projec);

  const ItemDivider = () => {
    return (
      <View
        style={ProjectStyle.viewDivid}
      />
    );
  }

  return(
  <>
    <View style={{alignItems:'center'}}>
      <Text style={ProjectStyle.txtLeft}>Projects</Text>
    </View>
    <FlatList data={proj} keyExtractor={(item, index)=>index}  ItemSeparatorComponent={ItemDivider} renderItem={({item})=>(
      <View style={ProjectStyle.viewContaner}>
        <View style={ProjectStyle.viewImg}>
          <Image style={ProjectStyle.img} source={item.src}/>
        </View>
        <View style={{marginTop:size.size10}}>
          <View style={ProjectStyle.viewProj}>
          <Text style={ProjectStyle.txtProj}>{item.name}</Text>
          </View>
          <View style={ProjectStyle.viewSpec}>
          <Text style={ProjectStyle.txtSpec}>Some description here about project</Text>
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


