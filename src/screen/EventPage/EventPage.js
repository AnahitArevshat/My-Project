import React, { useEffect } from "react";
import {
  Text, View, Image, StyleSheet
} from "react-native"
import { LogBox } from 'react-native';
import ProEvent from '../../assets/evenPage/ProEvent.svg';
import Adress from '../../assets/evenPage/adres.svg';
import Dat from '../../assets/evenPage/dat.svg';
import Prof from '../../assets/evenPage/prof.svg';
import WebSit from '../../assets/evenPage/webSit.svg';

import size from '../../functions/ratio';


const EventPage=({route})=>{
  useEffect(() => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state',]);
  }, [])


  return(
    <>
    <View style={{alignItems:'center'}}>
      <Text style={styles.txt}>
        {route.params.type}
      </Text>
      <ProEvent/>
    </View>
    <View style={styles.viewStyle}>
      <Prof/>
      <Text style={styles.txtLeft}>{route.params.orgnizer}</Text>
    </View>
      <View style={styles.viewStyle}>
        <Dat/>
        <Text style={styles.txtLeft}>{route.params.dat}|{route.params.duration}</Text>
      </View>
      <View style={styles.viewStyle}>
        <Adress/>
        <Text style={styles.txtLeft}>{route.params.adress}</Text>
      </View>
      <View style={styles.viewStyle}>
        <WebSit/>
        <View style={{width:size.size283, height:size.size16}}>
        <Text numberOfLines={1} style={styles.txtLeft}>{route.params.title}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.txtDesc}>Description</Text>
        <View style={styles.viewDesc}>
        <Text style={[styles.txtLeft, {color: '#949494'}]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        </View>
      </View>
      <View>
        <Text style={styles.txtDesc}>Participants</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{marginLeft:size.size40,marginTop:size.size10}}>
          <Image style={{width:size.size32, height:size.size32, borderRadius:size.size4}} source={require('../../assets/evenPage/partic1.jpg')}/>
        </View>
          <View style={{marginTop:size.size10}}>
        <Text style={styles.txtLeft}>{route.params.participators}</Text>
        <Text style={styles.txtSpec}>Management</Text>
          </View>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
        <View style={{marginLeft:size.size40,marginTop:size.size10}}>
          <Image style={{width:size.size32, height:size.size32, borderRadius:size.size4}} source={require('../../assets/evenPage/partic2.jpg')}/>
        </View>
        <View style={{marginTop:size.size10}}>
          <Text style={styles.txtLeft}>{route.params.participators}</Text>
          <Text style={styles.txtSpec}>Frontend Developer</Text>
        </View>
      </View>
      </View>

    </>
    );
}

export default EventPage;


const styles = StyleSheet.create({

  txt:{
    paddingVertical:size.size20,
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  },

  txtLeft:{
    fontSize:size.size14,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#616062',
    marginLeft:size.size10,
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
    fontSize:size.size12,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#616062',
    marginLeft:size.size10,
  },
  viewStyle:{
    marginLeft:size.size40,
    marginTop:size.size20,
    flexDirection:'row',
    alignItems:'center'
  },
  viewDesc:{
    width:size.size314,
    height:size.size112,
    marginLeft:size.size30,
    marginTop:size.size10,
  }
})
