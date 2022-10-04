import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import moment from 'moment';
import size from '../../functions/ratio';


const ProfileEvents=({el, navigation})=>{

  return (
    <View style={styles.contain}>
      {el.map((item, index)=>(
        <TouchableOpacity key={index} onPress={()=>navigation.navigate('EvenPag', item)}>
          <View style={styles.shad}>
            <View style={styles.viewFirst}>
              <View style={[styles.viewSecond, {backgroundColor:item.color}]}/>
              <View style={{flex:1}}>
                <Text style={[styles.txt,{marginLeft:size.size2}]}>{item.type}</Text>
                <Text style={styles.txtDesc}>{item.descript}</Text>
                <View style={styles.viewDur}>
                  <Text style={styles.txtDur}>{moment(item.dat).format('MMM DD, YYYY')}| {item.duration}</Text>
                  <View style={styles.viewRoom}><Text>{item.room}</Text></View>
                </View>
              </View>

            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>

  );
}

export default ProfileEvents;

const styles=StyleSheet.create({
  contain:{
    width:size.size315,
  },

  shad:{
    width:size.size315, height:size.size111, marginTop:15,borderRadius:6,
    shadowColor: 'gray',
    shadowOpacity: 1,
    elevation: size.size4,
    flex: 1,
    shadowRadius: size.size6,
    borderColor:'gray',
    overflow: 'hidden',
  },
  viewFirst:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:size.size5
  },
  viewSecond:{
    width:size.size5,
    height:size.size111,
    borderColor:'#F4C584',
    borderBottomLeftRadius:size.size6,
    borderTopStartRadius:size.size6
  },
  viewDur:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  viewRoom:{
    marginLeft:size.size50,
    marginTop:size.size12,
    marginRight:size.size5
  },
  txt:{fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
  },
  txtDesc:{
    textAlign:'justify',
    fontSize:size.size12,
    fontWeight:'400',
    marginTop:size.size10,
    marginLeft:size.size2,
    marginRight:size.size7
  },
  txtDur:{
    marginTop:size.size12
  }

})






