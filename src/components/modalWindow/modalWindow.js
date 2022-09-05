import React, {useState} from 'react';
import{Text, View, StyleSheet, Modal, TouchableOpacity} from "react-native";
import {Calendar} from 'react-native-calendars';
import { Shadow } from 'react-native-shadow-2';
import Button from "../button/button";
import ButtonSmall from '../button/buttonSmall';
import ButtonGroupForModal from '../butonGroup/buttonGroupeForModal';
import CheckButtonGroupe from '../butonGroup/checkButtonGroupe';
import moment from "moment/moment";
import Clos from '../../assets/clos.svg';
import size from '../../functions/ratio';

const ModalWindow=({doSomething, ind})=>{
  const [mod, setMod]=useState(true);
  const [num, setNum]=useState(0);
  const [num1, setNum1]=useState(0);
  const [num2, setNum2]=useState('');

  let normDat=moment(num2).format('DD MMM YYYY');

  const printButtonLable=(value)=>{
    if(ind===1) {
      setNum(value);
    }
    if(ind===2) {
      setNum1(value);
    }
    if(ind===3) {
      setNum2(value);
    }
    //console.log(value);
  }
  const HandleClick=(el, id)=>{
    doSomething(id);
    setMod(false);
  }

  if(ind===1){
  return(

    <Modal visible={mod}>
      <TouchableOpacity onPress={()=>setMod(false)}>
        <Clos style={{marginTop:size.size20, marginLeft:size.size350}}/>
      </TouchableOpacity>
        <View style={styles.contan}>
        <View style={{width:'100%', height:'30%', alignItems:'center'}}>
        <View style={{marginTop: size.size10}}>
      <Text style={styles.txt}>Actual duration</Text>
        </View>
        <View style={{marginTop: size.size20}}>
          <Text style={styles.txt1}>Select actual duration you spent on this task</Text>
        </View>
      <View  style={{marginTop: size.size20}}>
          <ButtonGroupForModal
            buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day', 'Full day']}
            doSomthingAfterClick={printButtonLable}
          />
      </View>
      <View style={{marginTop:(size.size70*-1)}}>
        <Button title='Select'onPress={(el)=>HandleClick(el, num)}/>
      </View>
      </View>
      </View>
    </Modal>

  );
  }

  if(ind===2){
    return(
      <Modal visible={mod}>
        <TouchableOpacity onPress={()=>setMod(false)}>
          <Clos style={{marginTop:size.size20, marginLeft:size.size350}}/>
        </TouchableOpacity>
        <View style={styles.contan}>
          <View style={{width:'100%', height:'50%', alignItems:'center'}}>
        <View>
          <Text style={styles.txt}>Select Project</Text>
        </View>
        <View style={styles.contan}>
          <CheckButtonGroupe
            buttons={['Project name 01', 'Project name 02', 'Project name 03', 'Project name 04']}
            doSomthingAfterClick={printButtonLable}/>
        </View>
        <View>
          <Button title='Select'onPress={(el)=>HandleClick(el, num1)}/>
        </View>
        </View>
        </View>
      </Modal>
    )
  }
if(ind===3) {
  return(
    <Modal visible={mod}>
      <TouchableOpacity onPress={()=>setMod(false)}>
        <Clos style={{marginTop:size.size20, marginLeft:size.size350}}/>
      </TouchableOpacity>
       <View style={styles.contan}>

           <Text style={[styles.txt, {marginBottom:size.size30}]}>Select Day</Text>
         <Shadow style={{width:size.size300, borderRadius:size.size4}}>
        <Calendar onDayPress={(day) => {setNum2(day.dateString)}}
        />
         </Shadow>
         <View>
           <ButtonSmall title='Select'onPress={(el)=>HandleClick(el, normDat)}/>
         </View>
      </View>

    </Modal>
  )
}
}
const styles=StyleSheet.create({
  contan:{
    flex:1,
    alignItems:'center',
    marginTop:size.size30,
    marginBottom:(size.size200*-1),
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
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:0.25,
   }

})

export default ModalWindow;
