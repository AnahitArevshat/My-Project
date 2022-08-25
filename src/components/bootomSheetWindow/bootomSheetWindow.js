import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { Shadow } from 'react-native-shadow-2';
import CheckButtonGroupe from '../butonGroup/checkButtonGroupe';
import CheckButGrForOrgn from '../butonGroup/chackButGrForOrgn';
import CheckButGrForPartic from '../butonGroup/ChackButGrforPartic';
import moment from "moment/moment";
import Button from "../button/button";
import Clos from '../../assets/clos.svg';
import { Calendar } from "react-native-calendars";
import ButtonGroupForModal from "../butonGroup/buttonGroupeForModal";
import Greate from '../../assets/greate.svg';

const BottomSheetWindow = ({doSomething, ind, mod, setMod, navigation}) => {

  const [numEvent, setNumEvent]=useState({
    numType:'',
    numOrgnizer:'',
    numParticip:'',
    numRoom:'',
    numAdress:'',
    numDate:'',
    numDuration:'',
    } );
  const hamar=useSelector((state)=>state.events.hamar);
  console.log(hamar);

 // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);

  const handleClosePress = () => {
    bottomSheetRef.current.close();
    setMod(false);
    }

  const greatClosePress=()=>{
    bottomSheetRef.current.close();
    setMod(false);
    navigation.navigate('Home');
  }

  let normDat=moment(numEvent.numDate).format('DD MMM YYYY');


  const printButtonLable=(value)=>{
    if(ind===1) {
      setNumEvent({...numEvent, numType:value});
     }
    if(ind===2) {
      setNumEvent({...numEvent, numOrgnizer:value});
    }
    if(ind===3) {
      setNumEvent({...numEvent, numParticip:hamar});
       }
    if(ind===4) {
      setNumEvent({...numEvent, numRoom:value});
    }
    if(ind===6) {
      setNumEvent({...numEvent, numDate:value});
    }
    if(ind===7) {
      setNumEvent({...numEvent, numDuration:value});
    }
   }
  const HandleClick=(el, id)=>{
    doSomething(id);
    setMod(false);

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
            <View style={{width:'100%', height:'80%', alignItems:'center'}}>
             <Text style={styles.txt}>Choose Event Type</Text>
              <View  style={styles.contan}>
                <CheckButtonGroupe
                  buttons={['Meeting', 'Teambuilding', 'Trainings', 'Events']}
                  doSomthingAfterClick={printButtonLable}/>
              </View>
              <View style={{marginTop:-60}}>
                <Button title='Select'onPress={(el)=>HandleClick(el, numEvent.numType)}/>
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
              <View style={{width:'100%', height:'80%', alignItems:'center'}}>
                <Text style={styles.txt}>Orgnizer</Text>
                <View  style={styles.contan}>
                  <CheckButGrForOrgn
                    buttons={['Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname']}
                    doSomthingAfterClick={printButtonLable}
                  />
                </View>
                <View style={{marginTop:-30}}>
                  <Button title='Select'onPress={(el)=>HandleClick(el, numEvent.numOrgnizer)}/>
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
              <View style={{width:'100%', height:'80%', alignItems:'center'}}>
                <Text style={styles.txt}>Participators</Text>
                <View  style={styles.contan}>
                  <CheckButGrForPartic
                    buttons={['Frontend team', 'Backend team', 'Mobile team', 'Dezign team', 'Managers', 'Team Leads']}
                    doSomthingAfterClick={printButtonLable}
                   />
                </View>
                <View style={{marginTop:-60}}>
                  <Button title='Select'onPress={(el)=>HandleClick(el, numEvent.numParticip)}/>
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      );
      break;
    case 4:
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
              <View style={{width:'100%', height:'70%', alignItems:'center'}}>
                <Text style={styles.txt}>Choose Room</Text>
                <View  style={styles.contan}>
                  <CheckButtonGroupe
                    buttons={['Meeting rooms', 'Meeting room1',]}
                    doSomthingAfterClick={printButtonLable}/>
                </View>
                <View style={{marginTop:-60}}>
                  <Button title='Select'onPress={(el)=>HandleClick(el, numEvent.numRoom)}/>
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      );
      break;
    case 6:
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
              <View style={{width:'100%', height:'100%', alignItems:'center'}}>
                <Text style={[styles.txt, {marginBottom:30}]}>Choose Date</Text>
                <Shadow style={{width:300, borderRadius:4}}>
                <Calendar onDayPress={(day) => {setNumEvent({...numEvent, numDate:(day.dateString)})}}
                />
                </Shadow>
                  <View>
                  <Button title='Select'onPress={(el)=>HandleClick(el, normDat)}/>
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      );
      break;
    case 7:
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
              <View style={{width:'100%', height:'70%', alignItems:'center'}}>
                <Text style={styles.txt}>Actual duration</Text>
                <View  style={[styles.contan, {marginTop: 20}]}>
                  <ButtonGroupForModal
                    buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day', 'Full day']}
                    doSomthingAfterClick={printButtonLable}
                  />
                </View>
                <View style={{marginTop:-60}}>
                  <Button title='Select'onPress={(el)=>HandleClick(el, numEvent.numDuration)}/>
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
   alignItems:'center',
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
  }

});

export default BottomSheetWindow;
