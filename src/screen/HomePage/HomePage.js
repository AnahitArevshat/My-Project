import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView} from 'react-native';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import {homeStyle} from './styleHomePage';
import CalendarImage from '../../assets/calendarImage.svg';
import CalendarImageOff from '../../assets/calendarOff.svg';
import ButtonGroup from '../../components/butonGroup/butonGroup';
import TaskComp from '../../components/taskComp/taskComp';
import EventComp from '../../components/eventComp/eventComp';
import size from '../../functions/ratio';


const HomePage = ({navigation, route}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [num, setNum]=useState(0);

  const task=useSelector(state=>state.tasks);
  const event=useSelector(state=>state.events);
  const [curDay, setCurDay]=useState(moment(new Date()).format("YYYY-MM-DD"));

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
      <View style={{height:size.size28, marginBottom:size.size20, marginRight:size.size180, marginTop:size.size20}}>
      <Text style={{textAlign:'left', fontSize:size.size24, fontWeight:'600'}}>Hello, Name</Text>
      </View>
      <Image
        style={{width: size.size315, height: size.size145, marginBottom: size.size15}}
        source={require('../../image/Frame736.png')}

      />
      <View style={homeStyle.navigItem}>
        <ButtonGroup
          buttons={['Tasks', 'Events', 'All']}
          doSomthingAfterClick={printButtonLable}
        />
      </View>
      <View style={{flexDirection: 'row', width: size.size310, marginTop:size.size15, marginLeft:size.size5}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize:size.size14, fontWeight: '600'}}>
            {FormatedDat}
          </Text>
        </View>
        <TouchableOpacity onPress={()=>setShowCalendar(!showCalendar)}>
          {showCalendar ? <CalendarImageOff/> : <CalendarImage/>}
        </TouchableOpacity>
      </View>
      {showCalendar && <Calendar style={{width:size.size316, marginTop:size.size15}}
                                 markedDates={{[curDay]:  {selected: true, selectedColor: '#347474'}}}
                                 />}
      {num===0 && <TaskComp  el={task.tasks} navigation={navigation}/>}
      {num===1 && <EventComp el={event.events} />}
      {num===2 && <View style={{alignItems:'center'}}>
        <TaskComp el={task.tasks}/>
        <EventComp el={event.events} />
        </View>
      }
    </SafeAreaView>  );
};
export default HomePage;
