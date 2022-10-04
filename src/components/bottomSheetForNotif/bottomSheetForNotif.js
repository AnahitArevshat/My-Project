import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {View,Text,TouchableOpacity} from "react-native";
import BottomSheet, {BottomSheetView, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import ButtonForNotif from "../buttonForNotif/buttonForNotif";
import ButtonForNotifDel from "../buttonForNotif/buttonForNotifDel";
import Clos from '../../assets/clos.svg';
import { editNotificAction } from "../../notificReducer/notificReducer";
import {BSFNStyle} from '../bottomSheetForNotif/styleBSFN';

const BottomSheetForNotif = ({ind, mod, setMod, setInd, number}) => {

  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%', '45%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);

  }, []);

  const dev=useSelector(state=>state.developers.devId);
  const dispatch=useDispatch();


  const handleClosePress = () => {
    if(number===1) {
   dispatch(editNotificAction({
      id:dev.id,
      notif:!dev.notif,
    }));
    }
    setMod(false);
  }


var children;

  if(ind===1){
 children=<BottomSheetView >
           <View style={BSFNStyle.viewChild}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={BSFNStyle.butClose}/>
              </TouchableOpacity>
              <View style={{alignItems:'center'}}>
              <Text style={BSFNStyle.txt}>Work Remotely Request</Text>
              </View>
              <View style={BSFNStyle.viewEmpl}>
                <View style={BSFNStyle.viewFirst}>
                <Text style={BSFNStyle.txt1}>Employee:</Text>
                </View>
                <View style={BSFNStyle.viewFirst}>
                <Text style={BSFNStyle.txtName}>Name Surname</Text>
                </View>
              </View>
              <View style={BSFNStyle.viewEmpl}>
              <View  style={BSFNStyle.viewFirst}>
                  <Text style={BSFNStyle.txt1}>Date</Text>
                </View>
                <View  style={BSFNStyle.viewSec}>
                  <Text style={BSFNStyle.txtName}>{dev.dat}</Text>
                </View>
              </View>
              <View style={BSFNStyle.viewComment}>
                <Text style={BSFNStyle.txt1}>Comment:</Text>
              </View>
              <View style={BSFNStyle.viewDesc}>
                <Text style={[BSFNStyle.txt1, { textAlign:'justify' }]}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </Text>
                </View>
            </View>
       </BottomSheetView>
  }
  else {
    children=<BottomSheetView >
      <View style={BSFNStyle.viewChild}>
        <TouchableOpacity onPress={handleClosePress}>
          <Clos style={BSFNStyle.butClose}/>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <Text style={BSFNStyle.txt}>Work Remotely Request</Text>
        </View>
        <View style={BSFNStyle.viewEmpl}>
          <View style={BSFNStyle.viewFirst}>
            <Text style={BSFNStyle.txt1}>Employee:</Text>
          </View>
          <View style={BSFNStyle.viewFirst}>
            <Text style={BSFNStyle.txtName}>Name Surname</Text>
          </View>
        </View>
        <View style={BSFNStyle.viewEmpl}>
          <View  style={BSFNStyle.viewFirst}>
            <Text style={BSFNStyle.txt1}>Date</Text>
          </View>
          <View  style={BSFNStyle.viewSec}>
            <Text style={BSFNStyle.txtName}>{dev.dat}</Text>
          </View>
        </View>
        <View style={BSFNStyle.viewComment}>
          <Text style={BSFNStyle.txt1}>Description:</Text>
        </View>
        <View style={BSFNStyle.viewDescSec}>
          <Text style={[BSFNStyle.txt1, { textAlign:'justify' }]}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the
          </Text>
        </View>
      </View>
       <BottomSheetTextInput
          placeholder='Add comment'
          style={BSFNStyle.posabs}
       />
      <View style={BSFNStyle.viewButton}>
      <ButtonForNotif title='Accept'/>
      <ButtonForNotifDel title='Cancel'/>
      </View>
    </BottomSheetView>
  }
      return (
          <BottomSheet style={BSFNStyle.contentContainer}
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            keyboardBehavior="fillParent"
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
            enabledGestureInteraction={true}
          >
            {children}
          </BottomSheet>
      );
    };


export default BottomSheetForNotif;



