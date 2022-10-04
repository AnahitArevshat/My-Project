import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {
   Text, View, TextInput, SafeAreaView, TouchableOpacity} from "react-native";
import {Formik} from 'formik';
import moment from "moment/moment";
import CalendarImage from "../../assets/calendarImage.svg";
import Chack from '../../assets/chacked.svg';
import Button from '../../components/button/button';
import ModalWindow from '../../components/modalWindow/modalWindow';
import {durat} from '../../items/durat';
import {proj} from '../../items/proj';
import {color} from '../../items/tasks';
import {addTaskAction} from '../../tasksReducer/taskReducer';
import HideTabBar from '../../functions/hideTabBar';
import size from '../../functions/ratio';
import {TasksStyle} from '../createTasks/styleTasks';

const CreateTasks=({navigation, route})=>{
  const [itemTask, setItemTask]=useState({});
  const [mod, setMod]=useState(false);
  const [numb, setNumb]=useState('');
  const [numb1, setNumb1]=useState('');
  const [numb2, setNumb2]=useState('');
  const [ind, setInd]=useState(0);
  const dispatch=useDispatch();

  let i = Math.floor((Math.random() * 3) );

  HideTabBar(navigation);


  const createTask=(values)=>{
    const newItem = {
      ...itemTask,
      id: Date.now(),
      title:values.title,
      projects:values.projects,
      dat:moment(new Date(values.dat)).format("YYYY-MM-DD"),
      duration:values.duration,
      color:color[i],
      };

    dispatch(addTaskAction(newItem));
    setNumb('');
    setNumb1('');
    setNumb2('');
    navigation.navigate('Home');
  }

  const doSomething=(value)=>{
    switch(ind){
      case 1:
        setNumb(value);
        setMod(false);
        break;
      case 2:
        setNumb1(value);
        setMod(false);
        break;
      case 3:
        setNumb2(value);
        setMod(false);
        break;
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
    <Formik initialValues={{title:'',projects:'', dat:'', duration:''}}
            onSubmit={(values, action)=>{createTask(values); action.resetForm();}}>
      {(props)=>(
        <SafeAreaView style={TasksStyle.conteiner}>
          {mod && <ModalWindow ind={ind} mod={mod} setMod={setMod} doSomething={doSomething}/>}

          <View style={TasksStyle.viewCT}>
            <Text style={TasksStyle.txtCT}>Create Task</Text>
          </View>
          <View style={TasksStyle.emailContainer}>
            <View style={TasksStyle.commonInput}>
              <TextInput placeholder='Title*' value={props.values.title} name='Title*'onChangeText={props.handleChange('title')}/>
            {/*<InputTasck value={props.values.title} name='Title*'onChangeText={props.handleChange('title')}/>*/}
            </View>
          </View>
          <TouchableOpacity onPress={clickProg} style={TasksStyle.emailContainer}>
            <View style={TasksStyle.viewProj}>
              <Text style={TasksStyle.txtProj}>Projects*</Text>
              <View style={TasksStyle.viewProjSec}>
                <Text style={{fontWeight:'bold'}}>{numb1!=='' ? props.values.projects=proj[numb1].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={TasksStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDat} style={TasksStyle.emailContainer}>
            <View style={TasksStyle.viewProj}>
              <Text style={TasksStyle.txtDate}>Date</Text>
              <View style={TasksStyle.viewDate}>
                <Text style={{fontWeight:'bold'}}>{props.values.dat=numb2}</Text>
              </View>
            </View>
            <TouchableOpacity style={TasksStyle.chackIcon}>
              <CalendarImage/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDur} style={TasksStyle.emailContainer}>
            <View style={TasksStyle.viewProj}>
              <Text style={TasksStyle.txtProj}>Duration</Text>
              <View style={TasksStyle.viewDur}>
                <Text style={{fontWeight:'bold'}}>{numb !=='' ? props.values.duration=durat[numb].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={TasksStyle.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={{marginTop:size.size50}}>
            <Button title='Create' onPress={props.handleSubmit}/>
          </View>
        </SafeAreaView>
      )}

    </Formik>
  );
}


export default CreateTasks;


