import React, { useState, useEffect, useMemo } from "react";
import { View } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

import size from '../../functions/ratio';


const HomePageCalendar=({selectDay, setSelectDay, markedDates, setMarkedDates})=>{

  //const [curDay, setCurDay]=useState(moment(new Date()).format("YYYY-MM-DD"));
  const task=useSelector(state=>state.tasks.tasks);
  const event=useSelector(state => state.events.events);
  const dates=[...task, ...event];
  var customMarkedDates=selectDay ? {[selectDay]: {selected: true, color: '#11493E'}} : {};

  const onSelDay=(day)=>{
    setSelectDay(day.dateString);
   }

   const pressDay=()=>{
     let periods=[];

     for(let i=0; i<dates.length; i++){
       for(let j=0; j<dates.length; j++){
         if(dates[j].dat===dates[i].dat){
           periods.push({ startingDay: false, endingDay: true, color: dates[j].color});
         }
       }
       customMarkedDates[dates[i].dat] = {periods: periods};
       periods=[];
       if(dates[i].dat===selectDay){
         customMarkedDates[dates[i].dat] = {selected: true, color: '#11493E'}
       };
     }

     setMarkedDates(customMarkedDates);
 }

 useEffect(pressDay,[selectDay]);


return(

      <View style={{alignItems:'center'}}>
          <Calendar
          style={{width:size.size315, marginTop:size.size15}}
          markingType={'multi-period'}
          onDayPress={(day) => onSelDay(day)}
          markedDates={markedDates}
             theme={{
               todayTextColor:'#FF6D75',
               selectedDayBackgroundColor: '#11493E',
               'stylesheet.calendar.header': {
                 dayTextAtIndex0: {
                   color: 'red'
                 }}
                }}
           />
      </View>

  );
}

export default HomePageCalendar;



