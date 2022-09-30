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
import { addBooksAction } from "../../booksReducer/booksReducer";
import moment from "moment/moment";
import HideTabBar from '../../functions/hideTabBar';
import { useDispatch } from "react-redux";
import size from '../../functions/ratio';



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
  const [markDay, setMarkDay]=useState('');
  const [curDay, setCurDay]=useState(moment(new Date()).format("YYYY-MM-DD"));
  const dispatch=useDispatch();

  useEffect(()=>{

    if(mod) {
      navigation.setOptions({
        tabBarStyle: { display: "none" },
      })
    }
    else {
      navigation.setOptions({
        tabBarStyle: { display: "flex" },
      })
    }
  }, [mod]);

  //console.log(markDay);

  HideTabBar(navigation);

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
      ...itemBooks,
      id: Date.now(),
      type:values.type,
      dat:markDay,
      time:'',
      duration:'',
      descript:values.descript,
    };

    dispatch(addBooksAction(newItem));

    setBookNum({...bookNum,
      bookType:'',
      bookDate:'',
      bookTime:'',
      bookDuration:''});
    //navigation.navigate('Home');
    setInd(4);
    setMod(true);
  }
  useEffect(()=>{
    if(ind===2 && bookNum.bookType===0){
      setMod(true);
    }
    if(ind===3 && bookNum.bookType===3){
      setMod(true);
    }
    if(ind===4 && bookNum.bookType===3) {
      setMod(true);
    }
  }, [ind])


  return (
    <>
      <Formik initialValues={{type:'', dat:'', tim:'', duration:'', descript:''}}
              onSubmit={(values, action)=>{createBook(values); action.resetForm();}}>
        {(props)=>(
          <SafeAreaView style={styles.conteiner}>

            <View style={{width:size.size158, height:size.size24, marginTop:size.size30}}>
              <Text style={{fontSize:size.size16, fontWeight:'500', lineHeight:size.size24, letterSpacing:0.25, color: '#1B3131'}}>Book your leave time</Text>
            </View>
            <View style={{flexDirection:'row', marginRight:size.size150, marginTop:size.size10}}>
              <Text style={{textAlign:'left'}}>Choose book leave type*</Text>
            </View>
            <TouchableOpacity onPress={(clickType)} style={styles.emailContainer}>
              <View style={{width: size.size314, flexDirection:'row', alignItems:'center'}}>
                <Text style={[styles.titl, {marginLeft:size.size12}]}>Type</Text>
                <View style={{alignItems:'center', marginLeft:size.size50}}>
                  <Text style={{fontWeight:'bold'}}>{bookNum.bookType!=='' ? props.values.type=bookType[bookNum.bookType].name : ''}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.chackIcon}>
                <Chack/>
              </TouchableOpacity>
            </TouchableOpacity>
        <View style={{marginTop:size.size20, width:size.size314, height:size.size252, borderRadius:size.size4}}>
            <Shadow style={{width:size.size314, borderRadius:size.size4}}>
              <Calendar monthFormat={'MMMM'} onDayPress={(day) => {setMarkDay(day.dateString)}} markedDates={{[curDay]:  {selected: true, selectedColor: '#347474'} }}/>
            </Shadow>
        </View>
            <View style={styles.mult}>
              <TextInput  placeholder='Description' value={props.values.descript} name='Description'multiline onChangeText={props.handleChange('descript')}/>
            </View>
            <View style={{width:size.size310,marginRight:size.size20}}>
              <Button title='Create' onPress={props.handleSubmit}/>
            </View>

          </SafeAreaView>
        )}

      </Formik>
      {/*mod ? navigation.setOptions({
          tabBarStyle: { display: "none" },
        })
        :
        navigation.setOptions({
          tabBarStyle: { display: "flex" },
          keyboardHidesTabBar: true
        })*/
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
    marginTop:size.size5
  },
  viewcont:{
    flexDirection: 'row',
    width: size.size313,
    marginTop: size.size35,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  txt:{
    textAlign:'center',
  },
  emailContainer: {
    flexDirection: "row",
    height: size.size40,
    marginTop:size.size15,
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
  titl:{fontSize:size.size14, fontWeight:'400', lineHeight: 14.63, marginLeft:size.size14},

  mult:{width:size.size315, height: size.size75, marginTop:size.size60, marginRight:size.size10,
    marginLeft:size.size10, borderWidth:size.size1,borderColor: '#E3E3E3', borderRadius:size.size6}
})
