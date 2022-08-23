import React, {useState} from 'react';
import{Text, View, StyleSheet, Modal, TouchableOpacity} from "react-native";
import {Calendar} from 'react-native-calendars';
import { Shadow } from 'react-native-shadow-2';
import Button from "../button/button";
import ButtonGroupForModal from '../butonGroup/buttonGroupeForModal';
import CheckButtonGroupe from '../butonGroup/checkButtonGroupe';
import moment from "moment/moment";
import Clos from '../../assets/clos.svg';

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
        <Clos style={{marginTop:20, marginLeft:370}}/>
      </TouchableOpacity>
        <View style={styles.contan}>
        <View style={{width:'100%', height:'30%', alignItems:'center'}}>
        <View style={{marginTop: 10}}>
      <Text style={styles.txt}>Actual duration</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.txt1}>Select actual duration you spent on this task</Text>
        </View>
      <View  style={{marginTop: 20}}>
          <ButtonGroupForModal
            buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day', 'Full day']}
            doSomthingAfterClick={printButtonLable}
          />
      </View>
      <View>
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
          <Clos style={{marginTop:20, marginLeft:370}}/>
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
        <Clos style={{marginTop:20, marginLeft:370}}/>
      </TouchableOpacity>
       <View style={styles.contan}>

           <Text style={[styles.txt, {marginBottom:30}]}>Select Day</Text>
         <Shadow style={{width:320, borderRadius:4}}>
        <Calendar onDayPress={(day) => {setNum2(day.dateString)}}
        />
         </Shadow>
         <View>
           <Button title='Select'onPress={(el)=>HandleClick(el, normDat)}/>
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
    marginTop:30
    //justifyContent:'center',
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
   }

})

export default ModalWindow;
