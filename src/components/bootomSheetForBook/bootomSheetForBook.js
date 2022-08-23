import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import moment from 'moment';
import CheckButtonGroupe from '../butonGroup/checkButtonGroupe';
import ButtonGroupForBook from '../butonGroup/ButtonGroupForBook';
import Button from "../button/button";
import Clos from '../../assets/clos.svg';
import TimePicker from '../timePicker/timePicke';
import CalendarForBooks from '../CalendarForBooks/CalendarForBooks';
import Greate from '../../assets/greate.svg';
import InputTasck from "../input/inputTasck";

const BottomSheetForBook = ({doSomething, ind, mod, setMod, setInd, navigation}) => {
  let dayNow=new Date();
  let currentDay=moment(dayNow).format('MMMM DD');

  const [numBook, setNumBook]=useState({
    numType:'',
    numDate:'',
    numTime:'',
    numDuration:'',
  } );
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);

  let normDat=moment(numBook.numDate).format('DD MMM YYYY');

   const handleClosePress = () => {
    bottomSheetRef.current.close();
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


    console.log(numBook.numType);
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
                <Clos style={{marginLeft:350}}/>
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
                <Clos style={{marginLeft:350}}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:'94%'}}>
                <View style={{marginLeft:35}}>
                <Text style={styles.txt}>Hourly leave</Text>
                </View>
                <View style={{marginLeft:35, marginTop:20}}>
                <Text style={styles.txt2}>{currentDay}</Text>
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:20}}>
                <TimePicker/>

                <View  style={{flex:1, alignItems:'center', justifyContent:'space-between', marginTop:35}}>
                  <ButtonGroupForBook
                    buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day',]}
                    doSomthingAfterClick={printButtonLable}/>
                </View>
                <View style={styles.mult}>
                  <InputTasck name='Description'multiline/>
                 </View>
                <View style={{alignItems:'center', marginBottom:35, marginTop:-35}}>
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
                <Clos style={{marginLeft:350}}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:'80%'}}>
                <View style={{marginLeft:35}}>
                  <Text style={styles.txt}>Vacation</Text>
                </View>
                <CalendarForBooks/>
                <View style={styles.multil}>
                  <InputTasck name='Description'multiline/>
                </View>
                  <View style={{alignItems:'center'}}>
                    <Button title='Book'onPress={(el)=>HandleClick(el, numBook.numType)}/>
                  </View>
                </View>
              </View>
          </BottomSheetView>
        </BottomSheet>
      );
      break;




    case 8:
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
                <Clos style={{marginLeft:350}}/>
              </TouchableOpacity>
              <View style={{width:'100%', height:'80%', alignItems:'center'}}>
                <Greate style={{marginTop:50}}/>
                <Text style={[styles.txt, {marginTop:50}]}>Greate!</Text>
                <Text style={{marginTop:50}}>Event successfully created!</Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )
      break;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    alignItems: 'center',
  },
  contan:{
    alignItems: 'center',
     },
  txt:{
    fontSize:16,
    fontWeight:'600',
    lineHeight:24,
    letterSpacing:0.25,
    color: '#11493E',
  },

  txt1:{
    fontSize:14,
    fontWeight:'500',
    lineHeight:24,
    letterSpacing:0.25,
    color: '#6B6A6C',
  },
  txt2:{
    fontSize:16,
    fontWeight:'500',
    lineHeight:24,
    letterSpacing:0.25,
    color: '#11493E',
  },

  mult:{width:340, height: 91, borderWidth:1,borderColor: '#E3E3E3', borderRadius:6, marginBottom:35},
  multil:{width:320, height: 91, borderWidth:1,borderColor: '#E3E3E3', borderRadius:6, marginTop:30, marginBottom:-15, marginLeft:45}

});

export default BottomSheetForBook;



