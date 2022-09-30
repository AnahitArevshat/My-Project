import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Keyboard } from "react-native";
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
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={{marginLeft:size.size330}}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:'75%', alignItems:'center'}}>
                <Text style={styles.txt}>Choose book leave</Text>
                <View  style={styles.contan}>
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
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={{marginLeft:size.size330}}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:height}}>
                <View style={{marginLeft:size.size28}}>
                <Text style={styles.txt}>Hourly leave</Text>
                </View>
                <View style={{marginLeft:size.size28, marginTop:size.size20}}>
                <Text style={styles.txt1}>{currentDay}</Text>
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:size.size5}}>
                <View style={{marginLeft:size.size5}}>
                  <TimePicker/>
                </View>
                <View  style={{flex:1, alignItems:'center', justifyContent:'space-between', marginTop:size.size30,
                  marginLeft:(size.size10*-1)}}>
                  <ButtonGroupForBook
                    buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day',]}
                    doSomthingAfterClick={printButtonLable}/>
                </View>
                <View style={styles.mult}>
                  <InputTasck name='Description'multiline onChangeText={(text)=>setDesc(text)}/>
                 </View>
                <View style={{alignItems:'center', marginBottom:size.size260, marginTop:(size.size5*-1)}}>
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
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={{marginLeft:size.size330}}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:'80%'}}>
                <View style={{marginLeft:size.size35}}>
                  <Text style={styles.txt}>Vacation</Text>
                </View>
                <CalendarVacation/>
                <View style={styles.multil}>
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
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={greatClosePress}>
                <Clos style={{marginLeft:size.size330}}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:'70%', alignItems:'center'}}>
                <Greate style={{marginTop:size.size50}}/>
                <Text style={[styles.txt, {marginTop:size.size50}]}>Greate!</Text>
                <Text style={{marginTop:size.size50}}>Time successfully booked!</Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )
      break;
  }
};

const styles = StyleSheet.create({
   contentContainer: {
    alignItems: 'center',
  },
  contan:{
    alignItems: 'center',
     },
  txt:{
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#11493E',
  },

  txt1:{
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#11493E',
  },

  mult:{width:size.size325, height: size.size91, borderWidth:size.size1,borderColor: '#E3E3E3', borderRadius:size.size6},
  multil:{width:size.size320, height: size.size91, borderWidth:size.size1,borderColor: '#E3E3E3', borderRadius:size.size6,
    marginTop:size.size30, marginBottom:(size.size15*-1), marginLeft:size.size28}

});

export default BottomSheetForBook;



