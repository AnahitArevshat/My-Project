import React from 'react';
import {
  StyleSheet, Text, View,ScrollView
} from 'react-native'
import {useSelector, useDispatch} from "react-redux";
import { VictoryArea, VictoryChart, VictoryAxis, VictoryStack} from "victory-native";
import size from "../../functions/ratio";
import TaskComp from '../../components/taskComp/taskComp';


const data = [
  {quarter: 1, y: 2.5, k: -1},
  {quarter: 1.4, y: 3.6, k: -1},
  {quarter: 2, y: 1.6, k: 2.1},
  {quarter: 2.4, y: 2.6, k: -2},
  {quarter: 2.8, y: 1.3, k: 2.1},
  {quarter: 3, y: 2.4, k: 2},
  {quarter: 3.2, y: 2.4, k: 1.9},
  {quarter: 3.4, y: 1.1, k: 3.8},
  {quarter: 3.8, y: 1.8, k: 2},
  {quarter: 4, y: 2.8, k: 1.9},
  {quarter: 4.3, y: 2, k: 1},
  {quarter: 4.6, y: 3.2, k: 1},
  {quarter: 4.8, y: 3.4, k: 0.4},
  {quarter: 5, y: 3, k: 0.9},
  {quarter: 5.2, y: 2.8, k: 0},
  {quarter: 5.4, y: 2.6, k: 0},
  {quarter: 5.6, y: 2.5, k: 0},
  {quarter: 5.9, y: 1.1, k: 4.2},
  {quarter: 6.2, y: 2.2, k: 4.3},
  {quarter: 6.4, y: 2.2, k: 4.4},
  {quarter: 6.5, y: 1.9, k: 3.3},
  {quarter: 6.7, y: 2, k: 3},
  {quarter: 6.9, y: 2, k: 3.7},
  {quarter: 7.5, y: 1, k: 7},
];

const HistoryTasks=()=>{
  const task=useSelector(state=>state.tasks);

  return(
    <>
      <ScrollView>
        <View>
          <Text style={[styles.txtLeft, {marginLeft:size.size130, marginRight: size.size100, marginBottom:(size.size25*-1)}]}>
            History tasks
          </Text>
        </View>

        <View style={{alignItems:'center'}}>
          <VictoryChart
            width={size.size340}
            height={size.size280}
            domain={{y: [1, 7]}}>
            <VictoryAxis
              crossAxis
              style={{
                axis: {stroke: '#334E68'},
                grid: {stroke: '#334E68'},
                tickLabels: {
                  //fontFamily: Fonts.regular,
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
                axis: {stroke: '#334E68'},
                grid: {stroke: '#334E68'},
                tickLabels: {
                  //fontFamily: Fonts.regular,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: size.size12,
                  lineHeight: size.size15,
                  fill: '#B8C0CC',
                },
              }}
              tickValues={['0', '10', '20', '30', '40', '50', '60']}
            />
            <VictoryStack colorScale={['#EE9087', '#83B7AD']}>
              <VictoryArea
                style={{data: {stroke: '#D95353', strokeWidth: size.size2}}}
                animate
                data={data}
                interpolation="natural"
                x="quarter"
                y="y"
              />
              <VictoryArea
                style={{data: {stroke: '#347474', strokeWidth: size.size2}}}
                animate
                data={data}
                interpolation="natural"
                x="quarter"
                y="k"
              />
            </VictoryStack>
          </VictoryChart>
        </View>
        <View  style={{alignItems:'center'}}>
        <TaskComp el={task.tasks}/>
        </View>
      </ScrollView>
    </>
  )
}

export default HistoryTasks;


const styles = StyleSheet.create({

  txtLeft:{
    marginRight:size.size250,
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  }
})


