import React, { useState, useEffect } from 'react'
import { Button, TouchableOpacity, View, Text } from "react-native";
import DatePicker from 'react-native-date-picker'
import ShowTime from '../../assets/showTime.svg';
import OpenTime from '../../assets/openTime.svg';
import size from '../../functions/ratio';

const TimePicker= () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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
      <View style={{flexDirection:'row', width:size.size325,height:size.size40,
        backgroundColor:'#347474',
        borderColor:'#347474',
        marginLeft:size.size35,
        marginRight:size.size40,
        marginTop:size.size25,
        borderRadius:size.size6,
        justifyContent:'space-between',
        alignItems:'center'}}>
        <ShowTime style={{marginLeft:size.size20}}/>
        <Text style={{fontSize:size.size16, fontWeight:'500',lineHeight:size.size24, color:'white'}}>{fTime}</Text>
        <OpenTime style={{marginRight:size.size20}}/>
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
