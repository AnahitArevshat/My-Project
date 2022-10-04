import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";
import moment from 'moment';
import size from '../../functions/ratio';


const EventComp=({item})=>{

    return (

        <View style={styles.shad}>
        <View style={styles.container}>
        <View style={[styles.nextContainer, {backgroundColor:item.color}]}/>
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

    );
}

 export default EventComp;

  const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:size.size5
  },
  nextContainer:{
    width:size.size5,
    height:size.size111,
    borderColor:'#F4C584',
    borderBottomLeftRadius:size.size6,
    borderTopStartRadius:size.size6
    },
  shad:{
    width:size.size315,
    height:size.size111,
    marginTop:size.size15,
    borderRadius:size.size6,
    shadowColor: 'gray',
    shadowOpacity: 1,
    elevation: size.size4,
    flex: 1,
    shadowRadius: size.size6,
    borderColor:'gray',
    overflow: 'hidden',
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
    },
    viewDur:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    viewRoom:{
      marginLeft:size.size50,
      marginTop:size.size12,
      marginRight:size.size5
    }

  })




