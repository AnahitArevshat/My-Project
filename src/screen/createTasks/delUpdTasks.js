import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  Text, View, TextInput, SafeAreaView, TouchableOpacity} from "react-native";
import moment from "moment";
import CalendarImage from "../../assets/calendarImage.svg";
import Chack from '../../assets/chacked.svg';
import ButtonUpd from '../../components/buttonUpdDel/buttonUpd';
import ButtonDel from '../../components/buttonUpdDel/buttonDel';
import ModalWindow from '../../components/modalWindow/modalWindow';
import {durat} from '../../items/durat';
import {proj} from '../../items/proj';
import HideTabBar from '../../functions/hideTabBar';
import { removeTasksAction, editTasksAction, clickIdAction } from "../../tasksReducer/taskReducer";
import size from '../../functions/ratio';
import {DelUpdTasksStyle} from '../createTasks/styleDelUpdTasks';


const DelUpdTasks=({navigation, route})=>{
  const [mod, setMod]=useState(false);
  const[titl, setTitl]=useState('');
  const [numb, setNumb]=useState('');
  const [numb1, setNumb1]=useState('');
  const [numb2, setNumb2]=useState('');
  const [ind, setInd]=useState(0);
  const task=useSelector(state=>state.tasks.tasks);
  const elemId=useSelector((state)=>state.tasks.taskId);
  const dispatch=useDispatch();

  HideTabBar(navigation);


  const editTask=()=>{

    dispatch(editTasksAction({
      id:elemId.id,
      title:titl ? titl :elemId.title,
      projects:proj[numb1] ? proj[numb1].name :elemId.projects,
      dat:numb2 && numb2 ? moment(new Date(numb2)).format("YYYY-MM-DD") : moment(new Date(elemId.dat)).format("YYYY-MM-DD"),
      duration:durat[numb] ? durat[numb].name : elemId.duration,
    }))
    setTitl('');
    setNumb('');
    setNumb1('');
    setNumb2('');
    navigation.navigate('Home');
  }

  function removeTasks(id) {
    dispatch(removeTasksAction(elemId.id));
    navigation.navigate('Home');
  }

  const doSomething=(value)=>{
    if(ind===1) {
      setNumb(value);
    }
    if(ind===2) {
      setNumb1(value);
    }
    if(ind===3){
      setNumb2(value)
    }
    setMod(false);
  }

  const clickDur=()=>{
    setInd(1);
    setMod(!mod)
  }
  const clickProg=()=>{
    setInd(2);
    setMod(!mod)
  }

  const clickDat=()=>{
    setInd(3);
    setMod(!mod)
  }

  return(

        <SafeAreaView style={DelUpdTasksStyle.conteiner}>
          {mod && <ModalWindow ind={ind} doSomething={doSomething}/>}

          <View style={DelUpdTasksStyle.viewUT}>
            <Text style={DelUpdTasksStyle.txtUT}>Update Task</Text>
          </View>
          <View style={DelUpdTasksStyle.emailContainer}>
            <View style={DelUpdTasksStyle.commonInput}>
              <TextInput  placeholder={elemId.title} name='Title*'  value={titl} onChangeText={(text)=>{setTitl(text)}}/>
            </View>
          </View>
          <TouchableOpacity onPress={clickProg} style={DelUpdTasksStyle.emailContainer}>
            <View style={DelUpdTasksStyle.viewProj}>
              <Text style={DelUpdTasksStyle.txtProj}>Projects*</Text>
              <View style={DelUpdTasksStyle.viewProjSec}>
                <Text style={{fontWeight:'bold'}}>{numb1!=='' ? proj[numb1].name : elemId.projects}</Text>
              </View>
            </View>
            <TouchableOpacity style={DelUpdTasksStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDat} style={DelUpdTasksStyle.emailContainer}>
            <View style={DelUpdTasksStyle.viewDat}>
              <Text style={DelUpdTasksStyle.txtDat}>Date</Text>
              <View style={DelUpdTasksStyle.viewDatSec}>
                <Text style={{fontWeight:'bold'}}>{numb2!=='' ? numb2 : elemId.dat}</Text>
              </View>
            </View>
            <TouchableOpacity style={DelUpdTasksStyle.chackIcon}>
              <CalendarImage/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDur} style={DelUpdTasksStyle.emailContainer}>
            <View style={DelUpdTasksStyle.viewDat}>
              <Text style={DelUpdTasksStyle.txtDur}>Duration</Text>
              <View style={DelUpdTasksStyle.viewDur}>
                <Text style={{fontWeight:'bold'}}>{numb !=='' ? durat[numb].name : elemId.duration}</Text>
              </View>
            </View>
            <TouchableOpacity style={DelUpdTasksStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={DelUpdTasksStyle.viewDel}>
            <View style={{marginRight:size.size7}}>
              <ButtonDel title='Delete' onPress={removeTasks}/>
           </View>
            <View>
              <ButtonUpd title='Update' onPress={editTask}/>
            </View>
          </View>
        </SafeAreaView>

  );
}


export default DelUpdTasks;


