import React, { useState, useEffect } from 'react'
import { Button, TouchableOpacity, View, Text } from "react-native";
import DatePicker from 'react-native-date-picker'
import ShowTime from '../../assets/showTime.svg';
import OpenTime from '../../assets/openTime.svg';

const TimePicker= () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [ti, setTi]=useState(new Date());
  let min=(date.getMinutes()<10?'0':'') + date.getMinutes();
  let our=(date.getHours()<10?'0':'') + date.getHours();
  let fTime=our+':'+min;

  /*useEffect(() => {
    const id = setInterval(() => {
      setDate(() => new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);*/

  return (
    <>
      <TouchableOpacity  onPress={() => setOpen(true)} >
      <View style={{flexDirection:'row', width: 336,height:40,
        backgroundColor:'#347474',
        borderColor:'#347474',
        marginLeft:35,
        marginRight:40,
        marginTop:25,
        borderRadius:6,
        justifyContent:'space-between',
        alignItems:'center'}}>
        <ShowTime style={{marginLeft:20}}/>
        <Text style={{fontSize:16, fontWeight:'500',lineHeight:24, color:'white'}}>{fTime}</Text>
        <OpenTime style={{marginRight:20}}/>
      </View>
       <DatePicker
        modal
        mode='datetime'
        open={open}
        date={date}
        is24hourSource	='device'
        androidVariant = 'nativeAndroid'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </TouchableOpacity>
    </>
  )

}

export default TimePicker;
