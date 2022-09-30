import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import BottomSheet, {BottomSheetView, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import ButtonForNotif from "../buttonForNotif/buttonForNotif";
import ButtonForNotifDel from "../buttonForNotif/buttonForNotifDel";
import Clos from '../../assets/clos.svg';
import { editNotificAction } from "../../notificReducer/notificReducer";
import size from '../../functions/ratio';


const BottomSheetForNotif = ({doSomething, ind, mod, setMod, setInd, number}) => {

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
           <View style={{width:'100%', height:'60%'}}>
              <TouchableOpacity onPress={handleClosePress}>
                <Clos style={{marginLeft:'90%', marginTop:(size.size1*-1)}}/>
              </TouchableOpacity>
              <View style={{alignItems:'center'}}>
              <Text style={styles.txt}>Work Remotely Request</Text>
              </View>
              <View style={{flexDirection:'row', marginTop:size.size15}}>
                <View style={{marginLeft:size.size15}}>
                <Text style={styles.txt1}>Employee:</Text>
                </View>
                <View style={{marginLeft:size.size15}}>
                <Text style={styles.txt2}>Name Surname</Text>
                </View>
              </View>
              <View style={{flexDirection:'row', marginTop:size.size15}}>
              <View  style={{marginLeft:size.size15}}>
                  <Text style={styles.txt1}>Date</Text>
                </View>
                <View  style={{marginLeft:size.size50}}>
                  <Text style={styles.txt2}>{dev.dat}</Text>
                </View>
              </View>
              <View style={{marginLeft:size.size15, marginTop:size.size15}}>
                <Text style={styles.txt1}>Comment:</Text>
              </View>
              <View style={{marginLeft:size.size15, marginTop:size.size15, marginRight:size.size15}}>
                <Text style={[styles.txt1, { textAlign:'justify' }]}>
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
      <View style={{width:'100%', height:'60%'}}>
        <TouchableOpacity onPress={handleClosePress}>
          <Clos style={{marginLeft:'90%', marginTop:(size.size1*-1)}}/>
        </TouchableOpacity>
        <View style={{alignItems:'center'}}>
          <Text style={styles.txt}>Work Remotely Request</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:size.size15}}>
          <View style={{marginLeft:size.size15}}>
            <Text style={styles.txt1}>Employee:</Text>
          </View>
          <View style={{marginLeft:size.size15}}>
            <Text style={styles.txt2}>Name Surname</Text>
          </View>
        </View>
        <View style={{flexDirection:'row', marginTop:size.size15}}>
          <View  style={{marginLeft:size.size15}}>
            <Text style={styles.txt1}>Date</Text>
          </View>
          <View  style={{marginLeft:size.size50}}>
            <Text style={styles.txt2}>{dev.dat}</Text>
          </View>
        </View>
        <View style={{marginLeft:size.size15, marginTop:size.size15}}>
          <Text style={styles.txt1}>Description:</Text>
        </View>
        <View style={{marginLeft:size.size15, marginTop:size.size13, marginRight:size.size15}}>
          <Text style={[styles.txt1, { textAlign:'justify' }]}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the
          </Text>
        </View>
      </View>
       <BottomSheetTextInput
          placeholder='Add comment'
          style={styles.posabs}
          //onBlur={()=>setMarTop(false)}
          //onFocus={()=>setMarTop(true)}
        />
      <View style={{flexDirection:'row', marginLeft:size.size80, position:'absolute', top:size.size240, left:size.size50}}>
      <ButtonForNotif title='Accept'/>
      <ButtonForNotifDel title='Cancel'/>
      </View>
    </BottomSheetView>
  }
      return (
          <BottomSheet style={styles.contentContainer}
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

const styles = StyleSheet.create({
    contentContainer: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'grey',
    //marginRight:'10%',
   // marginLeft:'10%'
  },

  txt:{
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#11493E',
  },

  txt1:{
    fontSize:size.size14,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.25,
    color: '#616062'
  },
  txt2:{
    fontSize:size.size14,
    fontWeight:'600',
    lineHeight:size.size16,
    letterSpacing:0.25,
    color: '#347474'
},

    posabs: {
      width:size.size325,
      height: size.size40,
      border:size.size1,
      borderWidth:size.size2,
      borderRadius:size.size10,
      borderColor:'#F5F5F5',
      position:'absolute',
      top:size.size215,
      left:size.size15,
      }

});

export default BottomSheetForNotif;



