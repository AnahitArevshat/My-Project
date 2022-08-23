import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import {homeStyle} from './styleHomePage';
import CalendarImage from '../../assets/calendarImage.svg';
import CalendarImageOff from '../../assets/calendarOff.svg';
import ButtonGroup from '../../components/butonGroup/butonGroup';
import TaskComp from '../../components/taskComp/taskComp';
import EventComp from '../../components/eventComp/eventComp';


const HomePage = ({navigation, route}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [num, setNum]=useState(0);

  const task=useSelector(state=>state.tasks);
  const event=useSelector(state=>state.events);

  let dat = new Date();

  let FormatedDat=moment(dat).format('DD MMM YYYY');

  const createMarkedDat=()=>{

    let arrayOfDates = task.tasks.dat;

    arrayOfDates.map((day) => {
      customMarkedDates[day] = {
        customStyles: {
          container: {
            backgroundColor: "red",
          },
          text: {
            color: "white",
            fontWeight: "bold",
          },
        },
      };
    });
  }

  const printButtonLable=(value)=>{
       setNum(value);
  }

  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={{height:28, marginBottom:20, marginRight:180, marginTop:20}}>
      <Text style={{textAlign:'left', fontSize:24, fontWeight:'600'}}>Hello, Name</Text>
      </View>
      <Image
        style={{width: 315, height: 145, marginBottom: 15}}
        source={require('../../image/Frame736.png')}
      />
      <View style={homeStyle.navigItem}>
        <ButtonGroup
          buttons={['Tasks', 'Events', 'All']}
          doSomthingAfterClick={printButtonLable}
        />
      </View>
      <View style={{flexDirection: 'row', width: 316, marginTop: 15}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14, fontWeight: '600'}}>
            {FormatedDat}
          </Text>
        </View>
        <TouchableOpacity onPress={()=>setShowCalendar(!showCalendar)}>
          {showCalendar ? <CalendarImageOff/> : <CalendarImage/>}
        </TouchableOpacity>
      </View>
      {showCalendar && <Calendar style={{width:316, marginTop:15}}/>}
      {num===0 && <TaskComp  el={task.tasks} navigation={navigation}/>}
      {num===1 && <EventComp el={event.events} />}
      {num===2 && <View><TaskComp/><EventComp/></View>}
    </SafeAreaView>  );
};
export default HomePage;
