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
import {EventPageStyle} from '../EventPage/styleEventPage';
import size from '../../functions/ratio';


const EventPage=({route})=>{
  useEffect(() => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state',]);
  }, [])


  return(
    <>
    <View style={{alignItems:'center'}}>
      <Text style={EventPageStyle.txt}>
        {route.params.type}
      </Text>
      <ProEvent/>
    </View>
    <View style={EventPageStyle.viewStyle}>
      <Prof/>
      <Text style={EventPageStyle.txtLeft}>{route.params.orgnizer}</Text>
    </View>
      <View style={EventPageStyle.viewStyle}>
        <Dat/>
        <Text style={EventPageStyle.txtLeft}>{route.params.dat}|{route.params.duration}</Text>
      </View>
      <View style={EventPageStyle.viewStyle}>
        <Adress/>
        <Text style={EventPageStyle.txtLeft}>{route.params.adress}</Text>
      </View>
      <View style={EventPageStyle.viewStyle}>
        <WebSit/>
        <View style={EventPageStyle.viewTitle}>
        <Text numberOfLines={1} style={EventPageStyle.txtLeft}>{route.params.title}</Text>
        </View>
      </View>
      <View>
        <Text style={EventPageStyle.txtDesc}>Description</Text>
        <View style={EventPageStyle.viewDesc}>
        <Text style={[EventPageStyle.txtLeft, {color: '#949494'}]}>
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
        <Text style={EventPageStyle.txtDesc}>Participants</Text>
        <View style={EventPageStyle.viewPartic}>
        <View style={EventPageStyle.viewImg}>
          <Image style={EventPageStyle.img} source={require('../../assets/evenPage/partic1.jpg')}/>
        </View>
          <View style={{marginTop:size.size10}}>
        <Text style={EventPageStyle.txtLeft}>{route.params.participators}</Text>
        <Text style={EventPageStyle.txtSpec}>Management</Text>
          </View>
          </View>
          <View style={EventPageStyle.viewPartic}>
        <View style={EventPageStyle.viewImg}>
          <Image style={EventPageStyle.img} source={require('../../assets/evenPage/partic2.jpg')}/>
        </View>
        <View style={{marginTop:size.size10}}>
          <Text style={EventPageStyle.txtLeft}>{route.params.participators}</Text>
          <Text style={EventPageStyle.txtSpec}>Frontend Developer</Text>
        </View>
      </View>
      </View>

    </>
    );
}

export default EventPage;


