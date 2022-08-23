import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet, Text, View
} from 'react-native'
import { connect } from 'react-redux'
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { Shadow } from 'react-native-shadow-2';

const Middle = props => {
  const [curDay, setCurDay]=useState(moment(new Date()).format("YYYY-MM-DD"));
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [markedDates, setMarkedDates] = useState({[curDay]:  {disabled: true, startingDay: true, color: '#347474', endingDay: true}});


  return(

    <View>
      <Text style={{color: '#11493E', fontSize:16, fontWeight:'500', letterSpacing:0.25, marginBottom:20, marginLeft:35}}>
        {(startDay && endDay) && moment(startDay).format('MMMM DD - ')+moment(endDay).format('DD, YYYY')}
      </Text>
      <View style={{alignItems:'center'}}>
        <Shadow style={{width:320, borderRadius:4,}}>
      <Calendar

        onDayPress={(day) => {
          if (startDay && !endDay) {
            const date = {}
            for (const d = moment(startDay); d.isSameOrBefore(day.dateString); d.add(1, 'days')) {
              date[d.format('YYYY-MM-DD')] = {
                color: '#D4E9E9',
                };
              if(d.format('YYYY-MM-DD') === startDay) date[d.format('YYYY-MM-DD')].startingDay = true;
              if(d.format('YYYY-MM-DD') === day.dateString) date[d.format('YYYY-MM-DD')].endingDay = true;

            }
            setMarkedDates(date);
            setEndDay(day.dateString);
          } else {
            setStartDay(day.dateString)
            setEndDay(null)
            setMarkedDates({
              [day.dateString]: {
                color: '#D4E9E9',
                textColor: 'white',
                startingDay: true,
                endingDay: true
              },
           })
          }
        }}
        monthFormat={"MMMM"}
        hideDayNames={false}
        markingType={'period'}
        markedDates={markedDates}
       />
        </Shadow>
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {
  }
}
export default connect(mapStateToProps, {

})(Middle)



/*import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from "react-redux";
import {Calendar} from 'react-native-calendars';

import moment from 'moment';
import {updDays} from '../../booksReducer/booksReducer';


const Middle=()=>{

  const [showItem, setShowItem]=useState(false);
  const [obj, setObj]=useState({});

  const arr=useSelector((state)=>state.books.createDay);

  const dispatch=useDispatch();
  let dayNow=new Date();

  let datFor=moment(arr[1]).format('MMMM DD - ')+moment(arr[arr.length-1]).format('DD, YYYY');
  console.log(datFor);

  let currentDay=moment(dayNow).format('MMMM DD');
  var customMarkedDates = {};

  const updateStore=(day)=>{
    dispatch(updDays(day.dateString));
  }
      //console.log(arr);

  const load=()=> {
    if(arr){
      for (let i=0; i<arr.length; i++){

        if(i===0){
          customMarkedDates[arr[i]] = { disabled: true, startingDay: true, color: '#347474', endingDay: true }
         }
        else if(i===1){
          customMarkedDates[arr[i]] = { startingDay: true, color: '#50cebb', textColor: 'white'}
        }
        else if(i===arr.length-1){
          customMarkedDates[arr[i]]={endingDay: true, color: '#50cebb', textColor: 'white'}
        }
        else {
          customMarkedDates[arr[i]] = { color: '#70d7c7', textColor: 'white'}
        }
        setObj(customMarkedDates);
        //console.log(obj);
        //console.log(customMarkedDates);
      }

    }

  }
  useEffect(load,[arr]);
 // console.log(customMarkedDates);

  return(<View>
       <TouchableOpacity onPress={()=>setShowItem(!showItem)}>
        </TouchableOpacity>
      <Text style={{color: '#11493E', fontSize:16, fontWeight:'500', letterSpacing:0.25}}>{arr.length>1 && datFor}</Text>
        <Calendar  markingType={'period'}
                   onDayPress={(day) => updateStore(day)}
                   markedDates= {obj}
                   monthFormat={'MMMM'}
                />
        </View>
  );
}

export default Middle;*/



/*
------ Marked Dayes from array tasks-------

  const [showItem, setShowItem]=useState(false);
  const [markedDay, setMarkedDay]=useState();
  const task1=useSelector((state)=>state.tasks);

  const arr=task1.tasks;

  var customMarkedDates = {};

  const load=()=>{

    const createDate=[];
    for(let i=0; i<arr.length; i++){
      createDate.push(moment(arr[i].dat).format('YYYY-MM-DD'));
      console.log(createDate);
    }
    createDate.map((day) => {

      customMarkedDates[day]={
        customStyles: {
          container: {
            backgroundColor: '#347474'
          },
          text: {
            color: 'white',
            fontWeight: 'bold'
          }
        }
      }
    },);

  //  console.log(customMarkedDates);

  }
  useLayoutEffect(load, [customMarkedDates]);

  return(<View>
       <TouchableOpacity onPress={()=>setShowItem(!showItem)}>
        {showItem ? <CalendarImageOff/> : <CalendarImage/>}
      </TouchableOpacity>
    {showItem &&
      <Calendar  markingType={'custom'} markedDates= {customMarkedDates} />}
      <Button title='Click'/>
      </View>
  );
  */
