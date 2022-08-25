import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {View, Text, Image, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import moment from 'moment';
import {developers} from '../../items/developers';

const DevelopUnreadComponent=({dat, el, navigation})=> {
  return(
    <View>
      <FlatList data={developers} keyExtractor={(item, index)=>index} renderItem={({item, index})=>(
          <Image style={{width:32, height:32, borderRadius:11, margin:7}} source={item.src}/>
      )}
      />

    </View>
      )
    }

export default DevelopUnreadComponent;
