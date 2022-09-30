import React from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image,
} from "react-native";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack} from "victory-native";
import size from "../../functions/ratio";
import Grafik from "../../assets/grafik.svg";


const ProjectPage=({route})=>{

  return(
    <>

        <View style={{alignItems:'center'}}>
          <Text style={styles.txtLeft}>Project name</Text>
          <Grafik style={{marginLeft:size.size40*-1}}/>
          <VictoryChart
            width={size.size340}
            height={size.size280}
            >
            <VictoryAxis
              crossAxis
              style={{
                axis: {stroke: '#ECECEC'},
                grid: {stroke: '#ECECEC', strokeWidth:2},

                tickLabels: {
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: size.size12,
                  lineHeight: size.size15,
                  fill: '#B8C0CC',
                },
              }}
              tickValues={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ' ']}
            />
            <VictoryAxis
              dependentAxis
              crossAxis
              style={{
                axis: {stroke: '#ECECEC'},
                grid: {stroke: '#ECECEC', strokeWidth:2},
                tickLabels: {
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: size.size12,
                  lineHeight: size.size15,
                  fill: '#B8C0CC',
                },
              }}
              tickValues={['0', '10', '20', '30', '40', '50', '60']}
            />
            <VictoryStack colorScale={['#83B7AD', '#EE9087']}>
              <VictoryBar
                data={[{x: 1.5, y: 1.8, y0: 2}, {x: 2.5, y: 1.01, y0: 3.8}, {x: 3.5, y: 0.5, y0: 3.8},
                  {x: 4.5, y: 1.1, y0: 2.7}, {x: 5.5, y: 0.5, y0: 3.8}, {x: 6.5, y: 2.2, y0: 3.8}]}
                style={{data:{fill:'#83B7AD', width:(size.size29*1.02), height:size.size30}}}
              />
              <VictoryBar
                data={[{x: 1.5, y:0.45, y0:1.6}, {x: 2.5, y: 0.4, y0: 4.8}, {x: 3.5, y: 2, y0: 3.8},
                  {x: 4.5, y: 0.4, y0: 2.3}, {x: 5.5, y: 1.1, y0: 4.2}, {x: 6.5, y: 0.5, y0: 5.8}]}

                style={{data:{fill:'#EE9087', width:(size.size29*1.02), height:size.size30}}}
              />
            </VictoryStack>
          </VictoryChart>
        </View>
      <ScrollView>
      <View>
        <Text style={styles.txtDesc}>Description</Text>
        <View style={styles.viewDesc}>
          <Text style={[styles.txt, {color: '#949494'}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
          <View>
          <Text style={styles.txtDesc}>Start at</Text>
          <Text style={[styles.txt, {marginLeft:size.size35, marginTop:size.size10}]}>{route.params.startdat}</Text>
          <Text style={styles.txtDesc}>Deadline</Text>
          <Text style={[styles.txt, {marginLeft:size.size35, marginTop:size.size10}]}>{route.params.deadline}</Text>
          </View>
          <View>
            <Text style={styles.txtDesc}>Members</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={{marginLeft:size.size35,marginTop:size.size10}}>
                <Image style={{width:size.size50, height:size.size50, borderRadius:size.size4}} source={require('../../assets/evenPage/partic1.jpg')}/>
              </View>
              <View style={{marginTop:size.size10, marginLeft:size.size5}}>
                <Text style={[styles.txtDesc, {marginLeft:size.size7, marginTop:size.size2}]}>Name Surname</Text>
                <Text style={[styles.txtDesc, {marginLeft:size.size7, marginTop:size.size10 }]}>Specialist</Text>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={{marginLeft:size.size35,marginTop:size.size10}}>
                <Image style={{width:size.size50, height:size.size50, borderRadius:size.size4}} source={require('../../assets/evenPage/partic3.jpg')}/>
              </View>
              <View style={{marginTop:size.size10, marginLeft:size.size5}}>
                <Text style={[styles.txtDesc, {marginLeft:size.size7, marginTop:size.size2}]}>Name Surname</Text>
                <Text style={[styles.txtDesc, {marginLeft:size.size7, marginTop:size.size10 }]}>Specialist</Text>
              </View>
            </View>
          </View>

      </View>
    </ScrollView>
     </>
  )
}

export default ProjectPage;


const styles = StyleSheet.create({

  txtLeft: {
    marginTop: size.size40,
    marginBottom: size.size20,
    fontSize: size.size16,
    fontWeight: '500',
    lineHeight: size.size24,
    letterSpacing: 0.24,
    color: '#1B3131'
  },
  txtDesc:{
    fontSize:size.size14,
    fontWeight:'600',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#616062',
    marginLeft:size.size35,
    marginTop:size.size20,
  },
  txt: {
    marginLeft:size.size5,
    fontSize: size.size14,
    fontWeight: '400',
    lineHeight: size.size16,
    letterSpacing: 0.24,
    color: '#949494',
    },
      viewDesc:{
      width:size.size314,
      height:size.size112,
      marginLeft:size.size30,
      marginTop:size.size10,
    }
})



