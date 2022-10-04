import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ButtonGroupeForNotif from '../../components/butonGroup/buttonGroupeForNotif';
import DevelopUnreadComponent from '../../components/DevelopUnreadComponent/DevelopUnreadComponent';
import Notif from '../../assets/notific.svg';
import {editNotificAction} from '../../notificReducer/notificReducer';
import BottomSheetForNotif from "../../components/bottomSheetForNotif/bottomSheetForNotif";
import size from '../../functions/ratio';
import {NotificationStyle} from '../notifications/styleNotification';


const Notifications=({navigation})=>{
  const [number, setNumber]=useState(0);
  const develop=useSelector(state=>state.developers.developers);
  const dispatch=useDispatch();
  const [mod, setMod]=useState(false);
  const [ind, setInd]=useState(0);

  const printButtonLable=(value)=>{
    setNumber(value);
   }
  const setIsRead=()=>{
   develop.map((el)=>dispatch(editNotificAction({
     id:el.id,
     notif:false,
   })
   ));
  }


  useEffect(()=>{

    if(mod) {
      navigation.setOptions({
        tabBarStyle: { display: "none" },
      })
    }
    else {
      navigation.setOptions({
        tabBarStyle: { display: "flex" },
      })
    }
  }, [mod]);


  return(
    <>
    <View style={{alignItems:'center'}}>
    <View style={{marginTop:size.size40}}>
    <Text style={NotificationStyle.txt}>Notifications</Text>
    </View>
    <View style={NotificationStyle.viewButNot}>
      <ButtonGroupeForNotif
        buttons={['Unread', 'Read']}
        doSomthingAfterClick={printButtonLable}
      />
    </View>
    <TouchableOpacity style={NotificationStyle.TouchMasR} onPress={setIsRead}>
      {number===1 && <Text style={NotificationStyle.txtMasR}>Mark all as read</Text>}
    </TouchableOpacity>
  </View>
    <ScrollView>

      <View style={NotificationStyle.viewDev}>
        {number===1 && develop.filter((item)=>item.notif===false).length===0
          &&
          <View style={NotificationStyle.viewNot}>
         <Notif/>
          </View>}
        {number===0 && develop.filter((item)=>item.notif===true).length===0
          &&
          <View style={NotificationStyle.viewNot}>
            <Notif/>
          </View>
        }

        {number===1
          ?
          <DevelopUnreadComponent el={develop.filter((item)=>item.notif===false)} mod={mod} setMod={setMod} ind={ind} setInd={setInd}/>
          :
          <DevelopUnreadComponent el={develop.filter((item)=>item.notif===true)} mod={mod} setMod={setMod} ind={ind} setInd={setInd}/>}
      </View>
    </ScrollView>

      {mod && <BottomSheetForNotif ind={ind} mod={mod} setMod={setMod} number={number}/>}
  </>

  )
}

export default Notifications;


