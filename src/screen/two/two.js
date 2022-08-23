import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import GroupCheckBox from 'rn-group-checkbox';

const dataList=[{key:1}, {key:2}, {key:3}, {key:4}, {key:5}, {key:6}, {key:7}];
let numColumns=3;


const Two=()=>{
  return(
    <View style={styles.container}>
      <FlatList
        data={dataList}
        keyExtractor={(item, index)=>index.toString()}
        numColumns={numColumns}
        renderItem={({item, index})=>{
          return(
            <View style={styles.itemStyle}>
              <TouchableOpacity>
              {<Text style={styles.itemText}>{item.key}</Text>}
              </TouchableOpacity>
            </View>
          )
        }}

      />
    </View>);
}

export default Two;

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40
  },
  itemText:{
    fontSize:30,
    color:'black'
  },
  itemStyle:{
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    flex:1,
    margin:4,
    borderColor:'#F5F5F5',
    borderWidth:3,
    borderRadius:4,
  },
  itemActive:{
    backgroundColor:'#E7F2F2',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    flex:1,
    margin:4,
    borderColor:'#F5F5F5',
    borderWidth:3,
    borderRadius:4,
  },

})





/*
<View>
      <Text>Բարև բոլորին!</Text>
      <GroupCheckBox
        style={{flex: 1, padding: 10}}
        labelPosition="left"
        labelStyle={{
          color:'Orange',
          fontSize:14
        }}
        data={["one","two","three"]}
        defaultValue = {["one"]}
        onClick={(value)=>{
          console.log(value)
        }}

      />
      </View>

*/
