import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet, Text, View,FlatList
} from 'react-native'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup, VictoryAxis, VictoryStack, VictoryLine, VictoryScatter} from "victory-native";
import {useSelector, useDispatch} from "react-redux";
import size from "../../functions/ratio";


const random = (min, max) => Math.floor(min + Math.random() * max);
const getScatterData = () => {
  const colors = [
    "violet",
    "cornflowerblue",
    "gold",
    "orange",
    "turquoise",
    "tomato",
    "greenyellow"
  ];
  const symbols = [
    "circle",
    "star",
    "square",
    "triangleUp",
    "triangleDown",
    "diamond",
    "plus"
  ];
  return Array(25)
    .fill()
    .map((index) => {
      const scaledIndex = Math.floor(index % 7);
      return {
        x: random(10, 50),
        y: random(2, 100),
        size: random(8) + 3,
        symbol: symbols[scaledIndex],
        fill: colors[random(0, 6)],
        opacity: 0.6
      };
    });
};


const Middle = props => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => {
      setData(getScatterData());
    }, 3000);
    return () => clearInterval(timer);
  }, []);


  return(

   <VictoryChart animate={{ duration: 2000, easing: "bounce" }}>
      <VictoryScatter
        data={data}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
            opacity: ({ datum }) => datum.opacity
          }
        }}
      />
    </VictoryChart>
  );

}
export default Middle;


//create Book Live//
/*const book =useSelector(state=>state.books.books);
  const dispatch=useDispatch();

  return(

    <View>
      <FlatList data={book} keyExtractor={(item, index)=>index} renderItem={({item, index})=>(
        <View>
        <Text>{item.type}</Text>
        <Text>{item.dat}</Text>
        <Text>{item.descript}</Text>
        </View>
      )}
      />

    </View>
  );*/






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
