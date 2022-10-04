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
import {ModWinStyle} from '../modalWindow/styleModWin';


const ModalWindow=({doSomething, ind, mod, setMod})=>{

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
        <Clos style={ModWinStyle.butClose}/>
      </TouchableOpacity>
        <View style={ModWinStyle.contan}>
        <View style={ModWinStyle.viewAcDur}>
        <View style={ModWinStyle.viewDur}>
      <Text style={ModWinStyle.txt}>Actual duration</Text>
        </View>
        <View style={ModWinStyle.viewButGrMod}>
          <Text style={ModWinStyle.txt1}>Select actual duration you spent on this task</Text>
        </View>
      <View  style={ModWinStyle.viewButGrMod}>
          <ButtonGroupForModal
            buttons={['15 minute', '30 minute', '2 hours', '1 hours', '3 hours', 'Half day', 'Full day']}
            doSomthingAfterClick={printButtonLable}
          />
      </View>
      <View style={ModWinStyle.but}>
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
          <Clos style={ModWinStyle.butClose}/>
        </TouchableOpacity>
        <View style={ModWinStyle.contan}>
          <View style={ModWinStyle.viewSelProj}>
        <View>
          <Text style={ModWinStyle.txt}>Select Project</Text>
        </View>
        <View style={ModWinStyle.contan}>
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
        <Clos style={ModWinStyle.butClose}/>
      </TouchableOpacity>
       <View style={ModWinStyle.contan}>
           <Text style={[ModWinStyle.txt, {marginBottom:size.size30}]}>Select Day</Text>
         <Shadow style={ModWinStyle.shad}>
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

export default ModalWindow;
