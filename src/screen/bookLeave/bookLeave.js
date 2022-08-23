import React, { useState, useEffect } from "react";
import {
  Text, View, Image, TextInput, SafeAreaView, StyleSheet, TouchableOpacity,Modal, Pressable
} from "react-native";
import {Formik} from 'formik';
import BottomSheetForBook from '../../components/bootomSheetForBook/bootomSheetForBook';
import {Calendar} from 'react-native-calendars';
import { Shadow } from 'react-native-shadow-2';

import Button from '../../components/button/button';
import { bookType } from "../../items/bookType";
import Chack from "../../assets/chacked.svg";
import { durat } from "../../items/durat";
import { addBooksAction } from "../../booksReducer/booksReducer";
import moment from "moment/moment";

const BookLeave=({navigation})=> {
  const [mod, setMod]=useState(false);
  const [bookNum, setBookNum]=useState(
    {
      bookType:'',
      bookDate:'',
      bookTime:'',
      bookDuration:''
    });
  const [itemBooks, setItemBooks]=useState({});
  const [ind, setInd]=useState(0);
  const [curDay, setCurDay]=useState(moment(new Date()).format("YYYY-MM-DD"));

  const doSomething=(value)=> {
    switch (ind) {
      case 1:
        setBookNum({ ...bookNum, bookType: value });
        setMod(false);
        break;
      case 2:
        setBookNum({ ...bookNum, bookDate: value });
        setMod(false);
        break;
      case 3:
        setBookNum({ ...bookNum, bookTime: value });
        setMod(false);
        break;

      case 4:
        setBookNum({ ...bookNum, bookDuration: value });
        setMod(false);
        break;
    }
   }

  const clickType=()=>{
    setInd(1);
    setMod(!mod);
  }
  //console.log(ind);

  const createBook=(values)=>{
    const newItem = {
      ...itemEvents,
      id: Date.now(),
      type:values.type,
      dat:values.dat,
      time:values.tim,
      duration:values.duration,
      descript:values.descript,
    };

    dispatch(addBooksAction(newItem));

    setBookNum({...bookNum,
      bookType:'',
      bookDate:'',
      bookTime:'',
      bookDuration:''});
    //navigation.navigate('Home');
    setInd(8);
    setMod(true);
  }
  useEffect(()=>{
    if(ind===2 && bookNum.bookType===0){
      setMod(true);
    }
    if(ind===3 && bookNum.bookType===3){
      setMod(true);
    }
  }, [ind])


  return (
    <>
      <Formik initialValues={{type:'', dat:'', tim:'', duration:'', descript:''}}
              onSubmit={(values, action)=>{createBook(values); action.resetForm();}}>
        {(props)=>(
          <SafeAreaView style={styles.conteiner}>

            <View style={{width:158, height:24, marginTop:30}}>
              <Text style={{fontSize:16, fontWeight:'500', lineHeight:24, letterSpacing:0.25, color: '#1B3131'}}>Book your leave time</Text>
            </View>
            <View style={{flexDirection:'row', marginRight:150, marginTop:10}}>
              <Text style={{textAlign:'left'}}>Choose book leave type*</Text>
            </View>
            <TouchableOpacity onPress={(clickType)} style={styles.emailContainer}>
              <View style={{width: 314, flexDirection:'row', alignItems:'center'}}>
                <Text style={[styles.titl, {marginLeft:12}]}>Type</Text>
                <View style={{alignItems:'center', marginLeft:50}}>
                  <Text style={{fontWeight:'bold'}}>{bookNum.bookType!=='' ? props.values.type=bookType[bookNum.bookType].name : ''}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.chackIcon}>
                <Chack/>
              </TouchableOpacity>
            </TouchableOpacity>
        <View style={{marginTop:20, width:314, height :252, borderRadius:4}}>
            <Shadow style={{width:314, borderRadius:4}}>
              <Calendar monthFormat={'MMMM'} markedDates={{[curDay]:  {selected: true, selectedColor: '#347474'} }}/>
            </Shadow>
        </View>
            <View style={styles.mult}>
              <TextInput  placeholder='Description' value={props.values.descript} name='Description'multiline onChangeText={props.handleChange('descript')}/>
            </View>
            <View>
              <Button title='Create' onPress={props.handleSubmit}/>
            </View>

          </SafeAreaView>
        )}

      </Formik>
      {mod ? navigation.setOptions({
          tabBarStyle: { display: "none" },
        })
        :
        navigation.setOptions({
          tabBarStyle: { display: "flex" },
          keyboardHidesTabBar: true
        })
      }
      {mod && <BottomSheetForBook navigation={navigation} mod={mod} setMod={setMod} ind={ind} setInd={setInd} doSomething={doSomething}/>}
    </>
  )
}

export default BookLeave;


const styles=StyleSheet.create({
  conteiner:{
    backgroundColor: '#FFFFFF;',
    height:`100%`,
    alignItems: 'center',
    marginTop:5
  },
  viewcont:{
    flexDirection: 'row',
    width: 313,
    marginTop: 35,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  txt:{
    textAlign:'center',
  },
  emailContainer: {
    flexDirection: "row",
    height: 40,
    marginTop: 15,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  chackIcon: {
    alignContent: 'center',
    justifyContent:'center'
  },
  commonInput: {
    width: '90%'
  },
  titl:{fontSize:14, fontWeight:'400', lineHeight: 14.63, marginLeft:14},

  mult:{width:315, height: 75, marginTop:90, marginRight: 10,
    marginLeft: 10, borderWidth:1,borderColor: '#E3E3E3', borderRadius:6}
})
