import React, { useMemo, useState } from "react";
import {useSelector} from "react-redux";
import {Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import moment from 'moment';
import {homeStyle} from './styleHomePage';
import CalendarImage from '../../assets/calendarImage.svg';
import CalendarImageOff from '../../assets/calendarOff.svg';
import ButtonGroup from '../../components/butonGroup/butonGroup';
import TaskComp from '../../components/taskComp/taskComp';
import EventComp from '../../components/eventComp/eventComp';
import HomePageCalendar from "../HomePageCalendar/HomePageCalendar";
import AllComponent from "../../components/allComponent/allComponent";


const HomePage = ({navigation, route}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [num, setNum]=useState(0);
  const [selectDay, setSelectDay]=useState("");

  const task=useSelector(state=>state.tasks);
  const event=useSelector(state=>state.events);
  const [markedDates, setMarkedDates] = useState({});

  const alldata=[...task.tasks, ...event.events];

  const allsort=alldata.sort((a, b) => a.dat.localeCompare(b.dat));

  let datt = new Date();

  let FormatedDat=moment(datt).format('DD MMM YYYY');


  const printButtonLable=(value)=>{
       setNum(value);
  }

  const onPres=()=>{
    setShowCalendar(!showCalendar);
    setMarkedDates({});
    //setSelectDay('');
  }

  const searchedAll = useMemo(() => {
    if (selectDay) {
           return [...allsort].filter(
        (p) =>
          moment(p.dat).format('MMM DD, YYYY').includes(moment(selectDay).format('MMM DD, YYYY'))
      );
    }
    return allsort;
  }, [selectDay, allsort]);

  const searchedTask = useMemo(() => {
    if (selectDay) {
      return [...task.tasks].filter(
        (p) =>
          moment(p.dat).format('MMM DD, YYYY').includes(moment(selectDay).format('MMM DD, YYYY'))
      );
    }
    return task.tasks;
  }, [selectDay, task.tasks]);

  const searchedEvent = useMemo(() => {
    if (selectDay) {
      return [...event.events].filter(
        (p) =>
          moment(p.dat).format('MMM DD, YYYY').includes(moment(selectDay).format('MMM DD, YYYY'))
      );
    }
    return event.events;
  }, [selectDay, event.events]);


  const reset=()=>{
    setSelectDay('');
   }


  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.viewHelloName}>
      <Text style={homeStyle.txtHelloName}>Hello, Name</Text>
      </View>
      <Image
        style={homeStyle.img}
        source={require('../../image/Frame736.png')}
      />
      <View style={homeStyle.navigItem}>
        <ButtonGroup
          buttons={['Tasks', 'Events', 'All']}
          doSomthingAfterClick={printButtonLable}
        />
      </View>
      <View style={homeStyle.viewFormatDat}>
        <View style={{flex: 1}}>
          <Text style={homeStyle.txtFormatDat}>
            {FormatedDat}
          </Text>
        </View>
        <TouchableOpacity onPress={onPres}>
          {showCalendar ? <CalendarImageOff/> : <CalendarImage/>}
        </TouchableOpacity>
      </View>
        {
        showCalendar &&
          <>
        <HomePageCalendar
        selectDay={selectDay}
        setSelectDay={setSelectDay}
        markedDates={markedDates}
        setMarkedDates={setMarkedDates}/>
            <TouchableOpacity onPress={reset} style={homeStyle.TochRes}>
              <Text style={homeStyle.txtRes}>Reset</Text>
            </TouchableOpacity>

          </>
        }
      {num===0 &&
        <ScrollView>
        <TaskComp  el={searchedTask} navigation={navigation}/>
        </ScrollView>
      }
      {num===1 &&
        <FlatList data={searchedEvent} keyExtractor={(item, index)=>index} renderItem={({item})=>(
        <EventComp item={item}/>
        )}
        />
        }
      {num===2 &&
        <FlatList data={searchedAll} keyExtractor={(item, index)=>index} renderItem={({item, index})=>(
          <AllComponent item={item}/>
        )}
        />
      }
    </SafeAreaView>  );
};
export default HomePage;





