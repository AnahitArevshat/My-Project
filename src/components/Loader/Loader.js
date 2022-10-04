import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View, Text } from "react-native";
import size from "../../functions/ratio";

const Loader=({visible=true})=>{

  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  return (
    visible && (
      <View style={[styles.container, {height, width}]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color='5D5FEE'/>
          <Text style={styles.txt}>Loading...</Text>
        </View>
      </View>
    )
  )
   }

export default Loader;


const styles=StyleSheet.create({
  container: {
    position:'absolute',
    zIndex:size.size10,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  loader:{
    height:size.size70,
    width:'50%',
    backgroundColor:'white',
    borderRadius:size.size5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-around',
    paddingHorizontal:size.size20
  },
  txt:{
    marginRight:size.size10,
    fontSize:size.size16
  }

})


