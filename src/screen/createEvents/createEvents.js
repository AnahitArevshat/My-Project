import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Text, View, TextInput, SafeAreaView, TouchableOpacity} from "react-native";
import {Formik} from 'formik';
import CalendarImage from "../../assets/calendarImage.svg";
import Chack from '../../assets/chacked.svg';
import Adres from '../../assets/address.svg';
import Button from '../../components/button/button';
import BottomSheetWindow from '../../components/bootomSheetWindow/bootomSheetWindow';
import moment from "moment";
import {eventType} from'../../items/eventType';
import {eventOrgnizer} from '../../items/eventOrgnizer';
import {eventSubParticip} from '../../items/eventParticip';
import {eventRoom} from '../../items/eventRoom';
import {durat} from '../../items/durat';
import {color} from '../../items/events';
import {EventsStyle} from '../createEvents/styleEvents';
import {addEventsAction} from '../../eventsReducer/eventsReducer';
import HideTabBar from '../../functions/hideTabBar';
import size from '../../functions/ratio';


const CreateEvents=({navigation})=> {

  const [mod, setMod]=useState(false);

  const [eventNum, setEventNum]=useState(
    {
      eventType:'',
      eventOrgnizer:'',
      eventParticip:'',
      eventRoom:'',
      eventAdress:'',
      eventDate:'',
      eventDuration:''
    });

  const [itemEvents, setItemEvents]=useState({});
  const [ind, setInd]=useState(0);
  const hamar=useSelector((state)=>state.events.hamar);

  const dispatch=useDispatch();

  HideTabBar(navigation);

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


  let i = Math.floor((Math.random() * 3) );


  const doSomething=(value)=>{
    switch(ind){
      case 1:
        setEventNum({...eventNum,eventType:value});
        setMod(false);
        break;
       case 2:
        setEventNum({...eventNum,eventOrgnizer:value});
        setMod(false);
        break;
      case 3:
        setEventNum({...eventNum,eventParticip:hamar});
        setMod(false);
        break;
      case 4:
        setEventNum({...eventNum,eventRoom:value});
        setMod(false);
        break;
      case 5:
        setEventNum({...eventNum,eventAdress:value});
        setMod(false);
        break;
      case 6:
        setEventNum({...eventNum,eventDate:value});
        setMod(false);
        break;
      case 7:
        setEventNum({...eventNum,eventDuration:value});
        setMod(false);
        break;
     }

  }

  const clickType=()=>{
    setInd(1);
    setMod(!mod);
  }

  const clickOrgnizer=()=>{
    setInd(2);
    setMod(!mod)
  }

  const clickParticip=()=>{
    setInd(3);
    setMod(!mod)
  }

  const clickRoom=()=>{
    setInd(4);
    setMod(!mod)
  }

  const clickDat=()=>{
    setInd(6);
    setMod(!mod)
  }
  const clickDur=()=>{
    setInd(7);
    setMod(!mod);
    }

  const createEvent=(values)=>{
    const newItem = {
      ...itemEvents,
      id: Date.now(),
      type:values.type,
      title:values.title,
      orgnizer:values.orgnizer,
      participators:values.participators,
      room:values.room,
      dat:moment(new Date(values.dat)).format("YYYY-MM-DD"),
      adress:'1 Alek Manukyan, Gyumri',
      duration:values.duration,
      descript:values.descript,
      color:color[i],
    };

    dispatch(addEventsAction(newItem));

    setEventNum({...eventNum,
      eventType:'',
      eventOrgnizer:'',
      eventParticip:'',
      eventRoom:'',
      eventAdress:'',
      eventDate:'',
      eventDuration:''});
      setInd(8);
      setMod(true);
  }

  return(
    <>
    <Formik initialValues={{type:'',title:'', orgnizer:'', participators:'', room:'', adres:'', dat:'', duration:'', descript:''}}
            onSubmit={(values, action)=>{createEvent(values); action.resetForm();}}>
      {(props)=>(
        <SafeAreaView style={EventsStyle.conteiner}>

          <View style={EventsStyle.viewCNE}>
            <Text style={EventsStyle.txtCNE}>Create New Events</Text>
          </View>
          <View style={EventsStyle.viewCET}>
          <Text style={{textAlign:'left'}}>Choose event type*</Text>
          </View>
          <TouchableOpacity onPress={(clickType)} style={EventsStyle.emailContainer}>
            <View style={EventsStyle.viewType}>
              <Text style={[EventsStyle.titl, {marginLeft:size.size12}]}>Type</Text>
              <View style={EventsStyle.viewTitle}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventType!=='' ? props.values.type=eventType[eventNum.eventType].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={EventsStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={EventsStyle.emailContainer}>
            <View style={EventsStyle.commonInput}>
              <TextInput placeholder='Event Title*'
                 value={props.values.title}
                 name='EventsTitle'
                 onChangeText={props.handleChange('title')}
               />
            </View>
          </View>
          <TouchableOpacity onPress={clickOrgnizer} style={EventsStyle.emailContainer}>
            <View style={EventsStyle.viewType}>
              <Text style={EventsStyle.txtTitle}>Orgnizer</Text>
              <View style={EventsStyle.viewTitle}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventOrgnizer!=='' ? props.values.orgnizer=eventOrgnizer[eventNum.eventOrgnizer].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={EventsStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickParticip} style={EventsStyle.emailContainer}>
            <View style={EventsStyle.viewType}>
              <Text style={EventsStyle.txtTitle}>Participators*</Text>
              <View style={EventsStyle.viewTitle}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventParticip!=='' ? props.values.participators=eventSubParticip[eventNum.eventParticip].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={EventsStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickRoom} style={EventsStyle.emailContainer}>
            <View style={EventsStyle.viewType}>
              <Text style={EventsStyle.txtTitle}>Room</Text>
              <View style={EventsStyle.viewTitle}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventRoom!=='' ? props.values.room=eventRoom[eventNum.eventRoom].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={EventsStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={EventsStyle.emailContainer}>
            <View style={EventsStyle.viewType}>
              <Text style={EventsStyle.txtTitle}>1 Alek Manukyan, Gyumri</Text>
              <View style={EventsStyle.viewTitle}>
                <Text style={{fontWeight:'bold'}}>{props.values.adres=''}</Text>
              </View>
            </View>
            <TouchableOpacity style={EventsStyle.chackIcon}>
              <Adres/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDat} style={EventsStyle.emailContainer}>
            <View style={EventsStyle.viewType}>
              <Text style={EventsStyle.txtTitle}>Date</Text>
              <View style={EventsStyle.viewDat}>
                <Text style={{fontWeight:'bold'}}>{props.values.dat=eventNum.eventDate}</Text>
              </View>
            </View>
            <TouchableOpacity style={EventsStyle.chackIcon}>
              <CalendarImage/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDur} style={EventsStyle.emailContainer}>
            <View style={EventsStyle.viewType}>
              <Text style={EventsStyle.txtDur}>Duration</Text>
              <View style={EventsStyle.viewDur}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventDuration!=='' ? props.values.duration=durat[eventNum.eventDuration].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={EventsStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={EventsStyle.mult}>
            <TextInput
              placeholder='Description'
              value={props.values.descript}
              name='Description'multiline
              onChangeText={props.handleChange('descript')}
               />
          </View>
          <View style={{marginTop:(size.size20*-1)}}>
            <Button title='Create' onPress={props.handleSubmit}/>
          </View>

        </SafeAreaView>
      )}

    </Formik>
     {mod && <BottomSheetWindow navigation={navigation} mod={mod} setMod={setMod} ind={ind} doSomething={doSomething}/>}
      </>
  );
}

export default CreateEvents;


