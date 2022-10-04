import React from 'react';
import {View, Text} from "react-native";
import moment from 'moment';
import ChackIcon from '../chackIcon/chakIcon';
import size from '../../functions/ratio';
import {AllComponentStyle} from '../allComponent/styleAllComponent';

const AllComponent=({dat, item, navigation})=>{

  return (
    <View style={AllComponentStyle.contain}>
        <>
          {item.projects
            ?
            <View style={AllComponentStyle.viewTask}>
              <View>
                <ChackIcon />
              </View>
              <View style={{flex:1}}>
                <Text style={AllComponentStyle.txt}>{item.title}</Text>
                <View style={{flexDirection:'row'}}>
                  <Text>{moment(item.dat).format('MMM DD, YYYY')}|</Text>
                  <Text>{item.duration}</Text>
                </View>
              </View>
              <View style={[AllComponentStyle.proj, {backgroundColor:item.color}]}>
                <Text style={AllComponentStyle.txtTaskProj}>{item.projects}</Text>
              </View>
            </View>
            :
            <View style={AllComponentStyle.shad}>
              <View style={{flexDirection:'row', alignItems:'center'}}>

                <View style={[AllComponentStyle.viewEvent, {backgroundColor:item.color}]}/>

                <View style={{flex:1}}>
                  <Text style={[AllComponentStyle.txt,{marginLeft:size.size2}]}>{item.type}</Text>
                  <Text style={AllComponentStyle.txtEvDesc}>{item.descript}</Text>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{ marginTop:size.size12}}>{moment(item.dat).format('MMM DD, YYYY')}| {item.duration}</Text>
                    <View style={AllComponentStyle.txtEvRoom}><Text>{item.room}</Text></View>
                  </View>
                </View>
              </View>
            </View>
          }
        </>

    </View>)
}

export default AllComponent;


