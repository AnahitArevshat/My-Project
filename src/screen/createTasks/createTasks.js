import React, { useState } from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from "react-redux";
import {
   Text, View, Image, TextInput, SafeAreaView, StyleSheet, TouchableOpacity,Modal, Pressable
} from "react-native";
import {Formik} from 'formik';
import CalendarImage from "../../assets/calendarImage.svg";
import Chack from '../../assets/chacked.svg';
import Button from '../../components/button/button';
import ModalWindow from '../../components/modalWindow/modalWindow';
import {durat} from '../../items/durat';
import {proj} from '../../items/proj';
import {addTaskAction} from '../../tasksReducer/taskReducer';
import InputTasck from '../../components/input/inputTasck';

const CreateTasks=({navigation, route})=>{
  const [showCalendar, setShowCalendar] = useState(false);
  const [itemTask, setItemTask]=useState({});
  const [mod, setMod]=useState(false);
  //const navigation=useNavigation();
  const [numb, setNumb]=useState('');
  const [numb1, setNumb1]=useState('');
  const [numb2, setNumb2]=useState('');
  const [ind, setInd]=useState(0);
  const task=useSelector(state=>state.tasks.tasks);
  const dispatch=useDispatch();

  /*const register=()=>{
    navigation.push('HomePage', {title:title});
  }*/

  const createTask=(values)=>{
      const newItem = {
      ...itemTask,
      id: Date.now(),
      title:values.title,
      projects:values.projects,
      dat:values.dat,
      duration:values.duration,
      };

    //console.log(newItem);
    dispatch(addTaskAction(newItem));
    setNumb('');
    setNumb1('');
    setNumb2('');
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
    <Formik initialValues={{title:'',projects:'', dat:'', duration:''}}
            onSubmit={(values, action)=>{createTask(values); action.resetForm();}}>
      {(props)=>(
        <SafeAreaView style={styles.conteiner}>
          {mod && <ModalWindow ind={ind} doSomething={doSomething}/>}

          <View style={{width:100, height:27}}>
            <Text style={{fontSize:16, fontWeight:'500', lineHeight:24, letterSpacing:0.25, color: '#1B3131'}}>Create Task</Text>
          </View>
          <View style={styles.emailContainer}>
            <View style={styles.commonInput}>
              <TextInput placeholder='Title*' value={props.values.title} name='Title*'onChangeText={props.handleChange('title')}/>
            {/*<InputTasck value={props.values.title} name='Title*'onChangeText={props.handleChange('title')}/>*/}
              {/*<InputTasck value={props.values.title} name='Title*'onChange={props.handleChange('title')}/>*/}
            </View>
          </View>
          <TouchableOpacity onPress={clickProg} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:13, color:'light', marginLeft:14}}>Projects*</Text>
              <View style={{alignItems:'center', marginLeft:50}}>
                <Text style={{fontWeight:'bold'}}>{numb1!=='' ? props.values.projects=proj[numb1].name : ''}</Text>
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
                <Text style={{fontWeight:'bold'}}>{props.values.dat=numb2}</Text>
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
                <Text style={{fontWeight:'bold'}}>{numb !=='' ? props.values.duration=durat[numb].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={{marginTop:50}}>
            <Button title='Create' onPress={props.handleSubmit}/>
          </View>
        </SafeAreaView>
      )}

    </Formik>
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

export default CreateTasks;


