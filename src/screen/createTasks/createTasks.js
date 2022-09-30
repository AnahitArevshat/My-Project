import React, { useState } from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from "react-redux";
import {
   Text, View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import {Formik} from 'formik';
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
import moment from "moment/moment";

const CreateTasks=({navigation, route})=>{
  const [itemTask, setItemTask]=useState({});
  const [mod, setMod]=useState(false);
  //const navigation=useNavigation();
  const [numb, setNumb]=useState('');
  const [numb1, setNumb1]=useState('');
  const [numb2, setNumb2]=useState('');
  const [ind, setInd]=useState(0);
  const dispatch=useDispatch();

  let i = Math.floor((Math.random() * 3) );

  HideTabBar(navigation);

  /*const register=()=>{
    navigation.push('HomePage', {title:title});
  }*/


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
    if(ind===1) {
      setNumb(value);
    }
    if(ind===2) {
      setNumb1(value);
    }
    if(ind===3){
      setNumb2(value);
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
    <Formik initialValues={{title:'',projects:'', dat:'', duration:''}}
            onSubmit={(values, action)=>{createTask(values); action.resetForm();}}>
      {(props)=>(
        <SafeAreaView style={styles.conteiner}>
          {mod && <ModalWindow ind={ind} doSomething={doSomething}/>}

          <View style={{width:size.size100, height:size.size27}}>
            <Text style={{fontSize:size.size16, fontWeight:'500', lineHeight:size.size24, letterSpacing:0.25, color: '#1B3131'}}>Create Task</Text>
          </View>
          <View style={styles.emailContainer}>
            <View style={styles.commonInput}>
              <TextInput placeholder='Title*' value={props.values.title} name='Title*'onChangeText={props.handleChange('title')}/>
            {/*<InputTasck value={props.values.title} name='Title*'onChangeText={props.handleChange('title')}/>*/}
            </View>
          </View>
          <TouchableOpacity onPress={clickProg} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:size.size13, color:'light', marginLeft:size.size10}}>Projects*</Text>
              <View style={{alignItems:'center', marginLeft:size.size50}}>
                <Text style={{fontWeight:'bold'}}>{numb1!=='' ? props.values.projects=proj[numb1].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <Chack/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDat} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:size.size13, color:'light', marginLeft:size.size11}}>Date</Text>
              <View style={{alignItems:'center', marginLeft:size.size80}}>
                <Text style={{fontWeight:'bold'}}>{props.values.dat=numb2}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
              <CalendarImage/>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickDur} style={styles.emailContainer}>
            <View style={{width: '90%', flexDirection:'row', alignItems:'center' }}>
              <Text style={{fontSize:size.size13, color:'light',marginLeft:size.size10}}>Duration</Text>
              <View style={{alignItems:'center', marginLeft:size.size60}}>
                <Text style={{fontWeight:'bold'}}>{numb !=='' ? props.values.duration=durat[numb].name : ''}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chackIcon}>
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

const styles=StyleSheet.create({
  conteiner:{
    backgroundColor: '#FFFFFF;',
    flex: 1,
    alignItems: 'center',
    marginTop:size.size60
  },
  viewcont:{
    flexDirection: 'row',
    width: size.size313,
    marginTop: size.size35,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  txt:{
    textAlign:'center',
  },
  emailContainer: {
    flexDirection: "row",
    height: size.size40,
    marginTop: size.size25,
    marginRight: size.size10,
    marginLeft: size.size10,
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


