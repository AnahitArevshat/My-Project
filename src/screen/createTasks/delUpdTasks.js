import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  Text, View, Image, TextInput, SafeAreaView, StyleSheet, TouchableOpacity,Modal, Pressable
} from "react-native";
import {Formik} from 'formik';
import CalendarImage from "../../assets/calendarImage.svg";
import Chack from '../../assets/chacked.svg';
import ButtonUpd from '../../components/buttonUpdDel/buttonUpd';
import ButtonDel from '../../components/buttonUpdDel/buttonDel';
import ModalWindow from '../../components/modalWindow/modalWindow';
import {durat} from '../../items/durat';
import {proj} from '../../items/proj';
import HideTabBar from '../../functions/hideTabBar';
import { removeTasksAction, editTasksAction, clickIdAction } from "../../tasksReducer/taskReducer";


const DelUpdTasks=({navigation, route})=>{
  const [itemTask, setItemTask]=useState({});
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
      dat:numb2 && numb2 ? numb2 : elemId.dat,
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

        <SafeAreaView style={styles.conteiner}>
          {mod && <ModalWindow ind={ind} doSomething={doSomething}/>}

          <View style={{width:100, height:27}}>
            <Text style={{fontSize:16, fontWeight:'500', lineHeight:24, letterSpacing:0.25, color: '#1B3131'}}>Update Task</Text>
          </View>
          <View style={styles.emailContainer}>
            <View style={styles.commonInput}>
              <TextInput  placeholder={elemId.title} name='Title*'  value={titl} onChangeText={(text)=>{setTitl(text)}}/>
            </View>
          </View>
          <TouchableOpacity onPress={clickProg} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:14}}>Projects*</Text>
              <View style={{alignItems:'center', marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>{numb1!=='' ? proj[numb1].name : elemId.projects}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDat} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:14}}>Date</Text>
              <View style={{alignItems:'center', marginLeft:80}}>
                <Text style={{fontWeight:'bold'}}>{numb2!=='' ? numb2 : elemId.dat}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <CalendarImage/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDur} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center' }}>
              <Text style={{fontSize:13, color:'light',marginLeft:14}}>Duration</Text>
              <View style={{alignItems:'center', marginLeft:60}}>
                <Text style={{fontWeight:'bold'}}>{numb !=='' ? durat[numb].name : elemId.duration}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={{flexDirection:'row', marginTop:50}}>
            <View style={{marginRight:10}}>
              <ButtonDel title='Delete' onPress={removeTasks}/>
           </View>
            <View>
              <ButtonUpd title='Update' onPress={editTask}/>
            </View>
          </View>
        </SafeAreaView>

  );
}

const styles=StyleSheet.create({
  conteiner:{
    backgroundColor: '#FFFFFF;',
    flex: 1,
    alignItems: 'center',
    marginTop:60
  },
  viewcont:{
    flexDirection: 'row',
    width: 313,
    marginTop: 35,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  txt:{
    textAlign:'center',
  },
  emailContainer: {
    flexDirection: "row",
    height: 40,
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  chackIcon: {
    alignContent: 'center',
    justifyContent:'center'
  },
  commonInput: {
    width: '90%'
  }
})

export default DelUpdTasks;


