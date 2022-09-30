import React, { useMemo, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import {homeStyle} from './styleHomePage';
import CalendarImage from '../../assets/calendarImage.svg';
import CalendarImageOff from '../../assets/calendarOff.svg';
import ButtonGroup from '../../components/butonGroup/butonGroup';
import TaskComp from '../../components/taskComp/taskComp';
import EventComp from '../../components/eventComp/eventComp';
import size from '../../functions/ratio';
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

  const searched = useMemo(() => {
    if (selectDay) {
           return [...allsort].filter(
        (p) =>
          moment(p.dat).format('MMM DD, YYYY').includes(moment(selectDay).format('MMM DD, YYYY'))
      );
    }
    return allsort;

  }, [selectDay, allsort]);




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
        <TouchableOpacity onPress={onPres}>
          {showCalendar ? <CalendarImageOff/> : <CalendarImage/>}
        </TouchableOpacity>
      </View>
        {showCalendar && <HomePageCalendar
        selectDay={selectDay}
        setSelectDay={setSelectDay}
        markedDates={markedDates}
        setMarkedDates={setMarkedDates}/>}
      {num===0 &&
        <ScrollView>
        <TaskComp  el={task.tasks} navigation={navigation}/>
        </ScrollView>
      }
      {num===1 &&
        <FlatList data={event.events} keyExtractor={(item, index)=>index} renderItem={({item})=>(
        <EventComp item={item}/>
        )}
        />
        }
      {num===2 &&
        <FlatList data={searched} keyExtractor={(item, index)=>index} renderItem={({item, index})=>(
          <AllComponent item={item}/>
        )}
        />
      }
    </SafeAreaView>  );
};
export default HomePage;





/*const createMarkedDat=()=>{

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
  }*/
