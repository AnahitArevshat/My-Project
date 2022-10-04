import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {Calendar} from 'react-native-calendars';
import { Shadow } from 'react-native-shadow-2';
import size from '../../functions/ratio';


import moment from 'moment';
import {updDays} from '../../booksReducer/booksReducer';


const CalendarForBooks=()=>{

  const [showItem, setShowItem]=useState(false);
  const [obj, setObj]=useState({});

  const arr=useSelector((state)=>state.books.createDay);


  const dispatch=useDispatch();

  let datFor=moment(arr[1]).format('MMMM DD - ')+moment(arr[arr.length-1]).format('DD, YYYY');

  let customMarkedDates = {};

  const updateStore=(day)=>{
    dispatch(updDays(day.dateString));
  }
  const load=()=> {
    if(arr){
      for (let i=0; i<arr.length; i++){

        if(i===0){
          customMarkedDates[arr[i]] = { disabled: true, startingDay: true, color: '#347474', endingDay: true }
        }
        else if(i===1){
          customMarkedDates[arr[i]] = { startingDay: true, color: '#D4E9E9'}
        }
        else if(i===arr.length-1){
          customMarkedDates[arr[i]]={endingDay: true, color: '#D4E9E9'}
        }
        else {
          customMarkedDates[arr[i]] = { color: '#D4E9E9'}
        }
        setObj(customMarkedDates);
        //console.log(obj);
        //console.log(customMarkedDates);
      }

    }

  }
  useEffect(load,[arr]);

  return(<View>
      <TouchableOpacity onPress={()=>setShowItem(!showItem)}>
      </TouchableOpacity>
      <Text style={styles.txt}>{arr.length>1 && datFor}</Text>
      <View style={{alignItems:'center'}}>
      <Shadow style={styles.shad}>
      <Calendar  markingType={'period'}
                 onDayPress={(day) => updateStore(day)}
                 markedDates= {obj}
                 monthFormat={'MMMM'}
      />
      </Shadow>
      </View>
    </View>
  );
}

export default CalendarForBooks;

const styles = StyleSheet.create({
   txt:{
     color: '#11493E',
     fontSize:size.size16,
     fontWeight:'500',
     letterSpacing:size.size1/4,
     marginBottom:size.size20,
     marginLeft:size.size35
  },
  shad:{
    width:size.size320,
    borderRadius:size.size4
  }
})


