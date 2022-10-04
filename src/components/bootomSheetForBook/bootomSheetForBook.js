import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import moment from 'moment';
import CheckButtonGroupe from '../butonGroup/checkButtonGroupe';
import ButtonGroupForBook from '../butonGroup/ButtonGroupForBook';
import Button from "../button/button";
import Clos from '../../assets/clos.svg';
import TimePicker from '../timePicker/timePicke';
import CalendarVacation from '../CalendarVacation/CalendarVacation';
import Greate from '../../assets/greate.svg';
import InputTasck from "../input/inputTasck";
import size from '../../functions/ratio';
import {BSFBStyle} from '../bootomSheetForBook/styleBSFB';


const BottomSheetForBook = ({doSomething, ind, mod, setMod, setInd, navigation}) => {

  let dayNow=new Date();
  let currentDay=moment(dayNow).format('MMMM DD');
  const [desc, setDesc]=useState('');

  const [numBook, setNumBook]=useState({
    numType:'',
    numDate:'',
    numTime:'',
    numDuration:'',
  } );
  const height = Dimensions.get("window").height;



  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);

  let normDat=moment(numBook.numDate).format('DD MMM YYYY');

   const handleClosePress = () => {
    //bottomSheetRef.current.close();
    setMod(false);
  }


  const greatClosePress=()=>{
    bottomSheetRef.current.close();
    setMod(false);
    navigation.navigate('Home');
  }


  const printButtonLable=(value)=>{
    if(ind===1) {
      setNumBook({...numBook, numType:value});
    }
  }

  const HandleClick=(el, id)=>{
    doSomething(id);
    setMod(false);
  }

  const createVacatin=()=>{
     setInd(4);
    setMod(false);
  }

  const pressTypeOfBook=(el)=>{
     if(numBook.numType===0){
    HandleClick(el, numBook.numType);
    setInd(2);
     }
     else if (numBook.numType===3){
      HandleClick(el, numBook.numType);
      setInd(3);
      }

      else
       HandleClick(el, numBook.numType);
    }

  switch(ind){
    case 1:
      return (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          enabledGestureInteraction={true}
        >
          <BottomSheetView>
            <View style={BSFBStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSFBStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSFBStyle.viewCBL}>
                <Text style={BSFBStyle.txt}>Choose book leave</Text>
                <View  style={BSFBStyle.contan}>
                  <CheckButtonGroupe
                    buttons={['Hourly leave', 'Day off', 'Work remotely', 'Vacation']}
                    doSomthingAfterClick={printButtonLable}/>
                </View>
                <View>
                  <Button title='Select'onPress={pressTypeOfBook}/>
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      );
      break;

    case 2:
      return (

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          enabledGestureInteraction={true}
        >
          <BottomSheetView>
            <View style={BSFBStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSFBStyle.closeBut}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:height}}>
                <View style={{marginLeft:size.size28}}>
                <Text style={BSFBStyle.txt}>Hourly leave</Text>
                </View>
                <View style={BSFBStyle.viewCurrDay}>
                <Text style={BSFBStyle.txtCurrDay}>{currentDay}</Text>
                </View>
                <View style={BSFBStyle.viewTP}>
                <View style={{marginLeft:size.size5}}>
                  <TimePicker/>
                </View>
                <View  style={BSFBStyle.viewButGroupe}>
                  <ButtonGroupForBook
                    buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day',]}
                    doSomthingAfterClick={printButtonLable}/>
                </View>
                <View style={BSFBStyle.mult}>
                  <InputTasck name='Description'multiline onChangeText={(text)=>setDesc(text)}/>
                 </View>
                <View style={BSFBStyle.butHL}>
                  <Button title='Book'onPress={(el)=>HandleClick(el, numBook.numType)}/>
                </View>
              </View>
            </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      );
      break;

    case 3:
      return (
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          enabledGestureInteraction={true}
        >
          <BottomSheetView>
            <View style={BSFBStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSFBStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSFBStyle.viewVac}>
                <View style={{marginLeft:size.size35}}>
                  <Text style={BSFBStyle.txt}>Vacation</Text>
                </View>
                <CalendarVacation/>
                <View style={BSFBStyle.multil}>
                  <InputTasck name='Description'multiline/>
                </View>
                  <View style={{alignItems:'center'}}>
                    <Button title='Book'onPress={createVacatin}/>
                  </View>
                </View>
              </View>
          </BottomSheetView>
        </BottomSheet>
      );
      break;

    case 4:
      return (  <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          enabledGestureInteraction={true}
        >
          <BottomSheetView>
            <View style={BSFBStyle.contentContainer}>
              <TouchableOpacity onPress={greatClosePress}>
                <Clos style={BSFBStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSFBStyle.viewGreate}>
                <Greate style={{marginTop:size.size50}}/>
                <Text style={[BSFBStyle.txt, {marginTop:size.size50}]}>Greate!</Text>
                <Text style={{marginTop:size.size50}}>Time successfully booked!</Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )
      break;
  }
};


export default BottomSheetForBook;



