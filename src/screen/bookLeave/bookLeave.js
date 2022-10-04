import React, { useState, useEffect } from "react";
import {
  Text, View,  TextInput, SafeAreaView, TouchableOpacity
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
import {BookLeaveStyle} from '../bookLeave/styleBookLeave';
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
          <SafeAreaView style={BookLeaveStyle.conteiner}>

            <View style={BookLeaveStyle.viewBYLT}>
              <Text style={BookLeaveStyle.txtcont}>Book your leave time</Text>
            </View>
            <View style={BookLeaveStyle.viewCBLT}>
              <Text style={{textAlign:'left'}}>Choose book leave type*</Text>
            </View>
            <TouchableOpacity onPress={(clickType)} style={BookLeaveStyle.emailContainer}>
              <View style={BookLeaveStyle.viewType}>
                <Text style={[BookLeaveStyle.titl, {marginLeft:size.size12}]}>Type</Text>
                <View style={BookLeaveStyle.viewBT}>
                  <Text style={{fontWeight:'bold'}}>{bookNum.bookType!=='' ? props.values.type=bookType[bookNum.bookType].name : ''}</Text>
                </View>
              </View>
              <TouchableOpacity style={BookLeaveStyle.chackIcon}>
                <Chack/>
              </TouchableOpacity>
            </TouchableOpacity>
        <View style={BookLeaveStyle.viewCal}>
            <Shadow style={BookLeaveStyle.styleShadow}>
              <Calendar monthFormat={'MMMM'} onDayPress={(day) => {setMarkDay(day.dateString)}} markedDates={{[curDay]:  {selected: true, selectedColor: '#347474'} }}/>
            </Shadow>
        </View>
            <View style={BookLeaveStyle.mult}>
              <TextInput  placeholder='Description' value={props.values.descript} name='Description'multiline onChangeText={props.handleChange('descript')}/>
            </View>
            <View style={BookLeaveStyle.viewBut}>
              <Button title='Create' onPress={props.handleSubmit}/>
            </View>

          </SafeAreaView>
        )}

      </Formik>

      {mod && <BottomSheetForBook navigation={navigation} mod={mod} setMod={setMod} ind={ind} setInd={setInd} doSomething={doSomething}/>}
    </>
  )
}

export default BookLeave;


