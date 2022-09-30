import React from 'react';
import {
  Text, View, StyleSheet, ScrollView} from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryLine,
  VictoryScatter,
  VictoryLegend,
  VictoryLabel,
} from "victory-native";
import { Shadow } from 'react-native-shadow-2';

import Grafik from '../../assets/grafik.svg';
import size from '../../functions/ratio';

const data = [
  { day: 'Monday', data: 2.7 },
  { day: 'Tuesday', data: 2 },
  { day: 'Wednesday', data: 1.7 },
  { day: 'Thursday', data: 2},
  { day: 'Friday', data: 2.8},
  { day: 'Saturday', data: 1.7},
  { day: 'Sunday', data: 1.2},
];

const dat = [
  { month: 'Jan', leave: 20, x:2, y:3, z:5 },
  { month: 'Feb', leave: 20, x:1, y:6, z:7 },
  { month: 'Mar', leave: 20, x:1.5, y:3, z:5.5 },
  { month: 'Apr', leave: 20, x:2.4, y:4, z:6.5},
  { month: 'May', leave: 20, x:3, y:3.8, z:4},
  { month: 'Jun', leave: 20, x:6, y:4, z:8},
  { month: 'Jul', leave: 20, x:2.8, y:6, z:5},
  { month: 'Ogs', leave: 20, x:3.8, y:3.5, z:9},
  { month: 'Sep', leave: 20, x:1.4, y:4.2, z:2},
  { month: 'Oct', leave: 20, x:3.8, y:2.2, z:6},
  { month: 'Nov', leave: 20, x:4.8, y:1.8, z:1},
  { month: 'Dec', leave: 20, x:1.6, y:1.9, z:5},
];


const Activity=()=>{
  return (
    <>
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.txt}>My Activities</Text>
      <Text style={styles.txtLeft}>Week tasks</Text>
      <View style={{marginTop:(size.size70*-1)}}>
      <VictoryChart
        padding={{top: size.size100, bottom: size.size90, left: size.size65, right: size.size75}}
      >
        <VictoryAxis
         tickFormat={(day) => `${day}`.substring(0,1)}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "none" },
            tickLabels: { fill: '#616062' },
          }}
        />
        <VictoryBar
          data={data} x='day' y='data' cornerRadius={{bottomLeft:(size.size10), bottomRight:(size.size10), topLeft:(size.size10), topRight:(size.size10)}}
                     style={{data:{fill:'#83B7AD', width:size.size18, height:size.size81}}}
         />
      </VictoryChart>
      </View>
    </View>

      <View style={{width:size.size340,
        height:size.size225,
        marginBottom:size.size250,
        marginLeft:size.size17,
        }}>
        <Shadow style={{width:size.size340, height:size.size350, backgroundColor:'white'}}>
        <Text style={[styles.txtLeft, {marginLeft:size.size15, marginRight: size.size100}]}>Progress tasks</Text>
        <Grafik style={{marginLeft:size.size15}}/>

        <VictoryChart
          minDomain={{ x:0.8, y: 0}}
          domain={{y: [25, 29]}}
          animate={{ duration: 2000, easing: "bounce"}}
        >
          <VictoryAxis crossAxis
                       style={{
                         axis: { stroke: "none" },
                         tickLabels: { fill: '#616062' },
                       }}
                      tickValues= {['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun']}
            />
          <VictoryAxis dependentAxis crossAxis
                       style={{
                         axis: { stroke: "none" },
                         grid: { stroke: "#E4E4E4" },
                         tickLabels: { fill: '#616062' },
                       }}
                      tickFormat={(y) => `${y}`.substring(0,2)}
                  />
          <VictoryLine
            data={[
              { x: 1, y: 26.5 },
              { x: 1.3, y: 26.45 },
              { x: 1.5, y: 26.7},
              { x: 1.58, y: 26.75},
              { x: 2.1, y: 27 },
              { x: 3, y: 27.8 },
              { x: 3.48, y: 26.9 },
              { x: 3.69, y: 26.73 },
              { x: 4.3, y: 26.2 },
              { x: 4.7, y: 26.42 },
              { x: 4.78, y: 26.46 },
              { x: 5, y: 26.45 },
              { x: 5.5, y: 26.7 },
              { x: 6, y: 26.1 },
              { x: 7, y: 27 }

            ]}
            style={{
              data: { stroke: "#347474" },
              parent: { border: "2px solid #347474"}
            }}
            interpolation="cardinal"

          />
          <VictoryScatter
            style={{ data: { fill: "#347474", stroke: "white",strokeWidth:3 } }}
            size={8}
            data={[
              { x: 3, y: 27.8 },
            ]}

          />

        </VictoryChart>
        </Shadow>
      </View>

        <View style={{width:size.size340, height:size.size450, marginTop:(size.size135*-1), marginLeft:size.size17}}>
          <Text style={[styles.txtLeft, {marginLeft:size.size10, marginRight: size.size100, marginBottom:(size.size25*-1)}]}>Annual Leave</Text>
          <Shadow style={{width:size.size340, height:size.size370, backgroundColor:'white'}}>

          <VictoryChart
            height={size.size400}
            padding={{top: size.size70, bottom: size.size220, left: size.size20, right: size.size50}}
            domen={{y:[0,20]}}
           >

            <VictoryAxis
              tickFormat={(month) => `${month}`.substring(0,1)}
              style={{
                axis: { stroke: "none" },
                grid: { stroke: "none" },
                tickLabels: { fill: '#616062' },
              }}
            />
            <VictoryBar
              data={dat}
              x='month'
              y='leave'
              style={{data:{fill:'#F4C584', width:size.size7, height:size.size99}}}
              cornerRadius={{bottomLeft:(size.size4), bottomRight:(size.size4), topLeft:(size.size4), topRight:(size.size4)}}
            />

            <VictoryStack
              colorScale={["#EF988F", "#92BEFA", "#83B7AD"]}>

              <VictoryBar
                data={dat}
                x='month'
                y='x'
                style={{data:{fill:'#EF988F', width:size.size7, height:size.size99}}}
                cornerRadius={{bottomLeft:(size.size4), bottomRight:(size.size4), topLeft:(size.size4), topRight:(size.size4)}}
              />

              <VictoryBar
                data={dat}
                x='month'
                y='y'
                style={{data:{fill:'#92BEFA', width:size.size7, height:size.size99}}}
                cornerRadius={{bottomLeft:(size.size4), bottomRight:(size.size4), topLeft:(size.size4), topRight:(size.size4)}}
              />
              <VictoryBar
                data={dat}
                x='month'
                y='z'
                style={{data:{fill:'#83B7AD', width:size.size7, height:size.size99}}}
                cornerRadius={{bottomLeft:(size.size4), bottomRight:(size.size4), topLeft:(size.size4), topRight:(size.size4)}}
              />
            </VictoryStack>
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: size.size15 }}
              x={size.size305}
              y={size.size240}
              text='12 day'
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: size.size15 }}
              x={size.size305}
              y={size.size270}
              text='3 day'
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: size.size15 }}
              x={size.size305}
              y={size.size300}
              text='1h 15min'
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: size.size15 }}
              x={size.size305}
              y={size.size330}
              text='5 day'
            />
            <VictoryLegend
                     x={size.size5} y={size.size220}
                           orientation="vertical"
                           rowGutter={size.size3}
                     data={[
                             { name: "Vacation", symbol: { fill: "#92BEFA" } },
                             { name: "Day Offs", symbol: { fill: "#EF988F" } },
                             { name: "Hours Leaved", symbol: { fill: "#83B7AD" } },
                             { name: "Work remotaly", symbol: { fill: "#F5CC93" } }
                           ]}
                            style={{
                                //title: {fontSize: 10},
                                 //data: {fontSize: 15},
                                labels: { fontSize: 15},
                               }}
                            height={size.size180}
                          />

          </VictoryChart>
          </Shadow>

        </View>
      </ScrollView>
    </>
  );
}
 export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
   },
  txt: {
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  },
  txtLeft:{
    marginRight:size.size240,
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  }
})


