import React, { useCallback, useMemo, useRef, useState} from "react";
import {useSelector} from "react-redux";
import { View, Text, TouchableOpacity } from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { Shadow } from 'react-native-shadow-2';
import CheckButtonGroupe from '../butonGroup/checkButtonGroupe';
import CheckButGrForOrgn from '../butonGroup/chackButGrForOrgn';
import CheckButGrForPartic from '../butonGroup/ChackButGrforPartic';
import moment from "moment/moment";
import Button from "../button/button";
import ButtonSmall from '../button/buttonSmall';
import Clos from '../../assets/clos.svg';
import { Calendar } from "react-native-calendars";
import ButtonGroupForModal from "../butonGroup/buttonGroupeForModal";
import Greate from '../../assets/greate.svg';
import size from '../../functions/ratio';
import {BSWStyle} from '../bootomSheetWindow/styleBSW';

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

 // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);

  const handleClosePress = () => {
    // bottomSheetRef.current.close();
    setMod(false);
    }

  const greatClosePress=()=>{
    //bottomSheetRef.current.close();
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
        <View style={BSWStyle.contentContainer}>
          <TouchableOpacity onPress={handleClosePress}>
          <Clos style={BSWStyle.closeBut}/>
          </TouchableOpacity>
            <View style={BSWStyle.viewCET}>
             <Text style={BSWStyle.txt}>Choose Event Type</Text>
              <View  style={BSWStyle.contentContainer}>
                <CheckButtonGroupe
                  buttons={['Meeting', 'Teambuilding', 'Trainings', 'Events']}
                  doSomthingAfterClick={printButtonLable}/>
              </View>
              <View style={BSWStyle.butCET}>
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
            <View style={BSWStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSWStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSWStyle.viewCET}>
                <Text style={BSWStyle.txt}>Orgnizer</Text>
                <View  style={BSWStyle.contentContainer}>
                  <CheckButGrForOrgn
                    buttons={['Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname', 'Name Surname']}
                    doSomthingAfterClick={printButtonLable}
                  />
                </View>
                <View style={BSWStyle.butOrgnizer}>
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
            <View style={BSWStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSWStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSWStyle.viewCET}>
                <Text style={BSWStyle.txt}>Participators</Text>
                <View  style={BSWStyle.contentContainer}>
                  <CheckButGrForPartic
                    buttons={['Frontend team', 'Backend team', 'Mobile team', 'Dezign team', 'Managers', 'Team Leads']}
                    doSomthingAfterClick={printButtonLable}
                   />
                </View>
                <View style={BSWStyle.butCET}>
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
            <View style={BSWStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSWStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSWStyle.viewCR}>
                <Text style={BSWStyle.txt}>Choose Room</Text>
                <View  style={BSWStyle.contentContainer}>
                  <CheckButtonGroupe
                    buttons={['Meeting rooms', 'Meeting room1',]}
                    doSomthingAfterClick={printButtonLable}/>
                </View>
                <View style={BSWStyle.butCET}>
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
            <View style={BSWStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSWStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSWStyle.viewDat}>
                <Text style={[BSWStyle.txt, {marginBottom:size.size30}]}>Choose Date</Text>
                <Shadow style={BSWStyle.cal}>
                <Calendar onDayPress={(day) => {setNumEvent({...numEvent, numDate:(day.dateString)})}}
                />
                </Shadow>
                  <View>
                  <ButtonSmall title='Select'onPress={(el)=>HandleClick(el, normDat)}/>
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
            <View style={BSWStyle.contentContainer}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSWStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSWStyle.viewCR}>
                <Text style={BSWStyle.txt}>Actual duration</Text>
                <View  style={BSWStyle.viewButGrModal}>
                  <ButtonGroupForModal
                    buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day', 'Full day']}
                    doSomthingAfterClick={printButtonLable}
                  />
                </View>
                <View style={BSWStyle.butCET}>
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
            <View style={BSWStyle.contentContainer}>
              <TouchableOpacity onPress={greatClosePress}>
                <Clos style={BSWStyle.closeBut}/>
              </TouchableOpacity>
              <View style={BSWStyle.viewCET}>
                <Greate style={{marginTop:size.size50}}/>
                <Text style={[BSWStyle.txt, {marginTop:size.size50}]}>Greate!</Text>
                <Text style={{marginTop:size.size50}}>Event successfully created!</Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )
      break;
    }
};


export default BottomSheetWindow;
