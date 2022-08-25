import React, { useState } from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from "react-redux";
import {
  Text, View, Image, TextInput, SafeAreaView, StyleSheet, TouchableOpacity,Keyboard
} from "react-native";
import {Formik} from 'formik';
import CalendarImage from "../../assets/calendarImage.svg";
import Chack from '../../assets/chacked.svg';
import Adres from '../../assets/address.svg';
import Button from '../../components/button/button';
import BottomSheetWindow from '../../components/bootomSheetWindow/bootomSheetWindow';
import {eventType} from'../../items/eventType';
import {eventOrgnizer} from '../../items/eventOrgnizer';
import {eventParticip, eventSubParticip} from '../../items/eventParticip';
import {eventRoom} from '../../items/eventRoom';
import {durat} from '../../items/durat';
import {addEventsAction} from '../../eventsReducer/eventsReducer';
import HideTabBar from '../../functions/hideTabBar';

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
      dat:values.dat,
      adress:'1 Alek Manukyan, Gyumri',
      duration:values.duration,
      descript:values.descript,
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
      //navigation.navigate('Home');
      setInd(8);
      setMod(true);
  }

  return(
    <>
    <Formik initialValues={{type:'',title:'', orgnizer:'', participators:'', room:'', adres:'', dat:'', duration:'', descript:''}}
            onSubmit={(values, action)=>{createEvent(values); action.resetForm();}}>
      {(props)=>(
        <SafeAreaView style={styles.conteiner}>

          <View style={{width:158, height:24}}>
            <Text style={{fontSize:16, fontWeight:'500', lineHeight:24, letterSpacing:0.25, color: '#1B3131'}}>Create New Events</Text>
          </View>
          <View style={{flexDirection:'row', marginRight:235, marginTop:10}}>
          <Text style={{textAlign:'left'}}>Choose event type*</Text>
          </View>
          <TouchableOpacity onPress={(clickType)} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={[styles.titl, {marginLeft:12}]}>Type</Text>
              <View style={{alignItems:'center', marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventType!=='' ? props.values.type=eventType[eventNum.eventType].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.emailContainer}>
            <View style={styles.commonInput}>
              <TextInput placeholder='Event Title*'
                 value={props.values.title}
                 name='EventsTitle'
                 onChangeText={props.handleChange('title')}
               />
            </View>
          </View>
          <TouchableOpacity onPress={clickOrgnizer} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:12}}>Orgnizer</Text>
              <View style={{alignItems:'center', marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventOrgnizer!=='' ? props.values.orgnizer=eventOrgnizer[eventNum.eventOrgnizer].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickParticip} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:12}}>Participators*</Text>
              <View style={{alignItems:'center', marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventParticip!=='' ? props.values.participators=eventSubParticip[eventNum.eventParticip].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickRoom} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:12}}>Room</Text>
              <View style={{alignItems:'center', marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventRoom!=='' ? props.values.room=eventRoom[eventNum.eventRoom].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:12}}>1 Alek Manukyan, Gyumri</Text>
              <View style={{alignItems:'center', marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>{props.values.adres=''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Adres/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDat} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:12}}>Date</Text>
              <View style={{alignItems:'center', marginLeft:80}}>
                <Text style={{fontWeight:'bold'}}>{props.values.dat=eventNum.eventDate}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <CalendarImage/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDur} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center' }}>
              <Text style={{fontSize:13, color:'light',marginLeft:10}}>Duration</Text>
              <View style={{alignItems:'center', marginLeft:60}}>
                <Text style={{fontWeight:'bold'}}>{eventNum.eventDuration!=='' ? props.values.duration=durat[eventNum.eventDuration].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.mult}>
            <TextInput
              placeholder='Description'
              value={props.values.descript}
              name='Description'multiline
              onChangeText={props.handleChange('descript')}
             />
          </View>
          <View>
            <Button title='Create' onPress={props.handleSubmit}/>
          </View>

        </SafeAreaView>
      )}

    </Formik>
      {mod ? navigation.setOptions({
        tabBarStyle: { display: "none" },
        },)
        :
        navigation.setOptions({
          tabBarStyle: { display: "flex" },
       })
      }
      {mod && <BottomSheetWindow navigation={navigation} mod={mod} setMod={setMod} ind={ind} doSomething={doSomething}/>}
      </>
  );
}

export default CreateEvents;


const styles=StyleSheet.create({
  conteiner:{
    backgroundColor: '#FFFFFF;',
    height:`100%`,
    alignItems: 'center',
    marginTop:5
  },
  viewcont:{
    flexDirection: 'row',
    width: 313,
    marginTop: 35,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  txt:{
    textAlign:'center',
  },
  emailContainer: {
    flexDirection: "row",
    height: 40,
    marginTop: 15,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  chackIcon: {
    alignContent: 'center',
    justifyContent:'center'
  },
  commonInput: {
    width: '90%'
  },
  titl:{fontSize:14, fontWeight:'400', lineHeight: 14.63, marginLeft:14},
  mult:{width:'92%', height: 75, marginTop: 20, marginRight: 10,
    marginLeft: 10, borderWidth:1,borderColor: '#E3E3E3', borderRadius:6}
})
