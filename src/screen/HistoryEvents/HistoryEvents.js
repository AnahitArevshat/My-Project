import React, {useState, useMemo} from 'react';
import {
  StyleSheet, Text, View,ScrollView, TextInput, TouchableOpacity} from 'react-native'
import { VictoryPie, VictoryLabel, VictoryLegend} from "victory-native";
import {useSelector, useDispatch} from "react-redux";
import { Calendar } from "react-native-calendars";
import Svg from 'react-native-svg';
import { Shadow } from 'react-native-shadow-2';
import moment from 'moment';
import size from "../../functions/ratio";
import CalendarImage from '../../assets/calendarImage.svg';
import EventComp from "../../components/eventComp/eventComp";
import HideTabBar from '../../functions/hideTabBar';


const HistoryEvents=({navigation})=>{
  const event=useSelector(state=>state.events.events);
  const [showItem, setShowItem]=useState(false);
  const [selectDay, setSelectDay]=useState("");
  const [searchField, setSearchField] = useState("");

  HideTabBar(navigation);

  const searched = useMemo(() => {
    if (searchField) {
      setSelectDay('');
      return [...event].filter(
        (p) =>
          p.type.toLowerCase().includes(searchField.toLowerCase())
      );
    }

    if (selectDay) {

      return [...event].filter(
        (p) =>
          moment(p.dat).format('MMM DD, YYYY').includes(moment(selectDay).format('MMM DD, YYYY'))
      );
    }
    return event;
  }, [searchField, selectDay, event]);

  const onSelDay=(day)=>{
    setSelectDay(day.dateString);
    setShowItem(false);
  }
  const onFoc=()=>{
    setSelectDay('');
    setSearchField('');
  }


  return(
    <>
      <ScrollView>
        <View>
          <Text style={[styles.txtLeft, {marginLeft:size.size130, marginRight: size.size100, marginBottom:size.size25}]}>
            History events
          </Text>
        </View>

         <View style={{height:size.size350, width:size.size350, marginLeft:size.size20}}>
          <Svg viewBox="0 0 600 600" >
            <VictoryPie
              padding={size.size122}
              startAngle={size.size30}
              endAngle={size.size450}
              cornerRadius={size.size10}
              standalone={false}
              data={[
                { x: "History", y: size.size20 },
                { x: "Teambulding", y: size.size80 },
              ]}
              innerRadius={size.size50}
              labels={() => null}
              colorScale={["#F7F8F9", "#EF988F"]}
            />

            <VictoryPie
              padding={size.size82}
              standalone={false}
              startAngle={size.size30}
              endAngle={size.size450}
              cornerRadius={size.size10}
              data={[
                { x: "History", y: size.size30 },
                { x: "Meeting", y: size.size70 },
              ]}
              innerRadius={size.size90}
              labels={() => null}
              colorScale={["#F7F8F9", "#F4C584"]}

            />
            <VictoryPie
              standalone={false}
              //origin={{ x: "150", y: "150" }}
              data={[
                { x: "History", y: size.size60 },
                { x: "Trainings", y: size.size40 },
              ]}
              padding={size.size42}
              startAngle={size.size30}
              endAngle={size.size450}
              cornerRadius={size.size10}
              innerRadius={size.size130}
              labels={() => null}
              colorScale={["#F7F8F9", "#92BEFA"]}
            />
            <VictoryPie
              standalone={false}
              padding={size.size2}
              startAngle={size.size30}
              endAngle={size.size450}
              cornerRadius={size.size10}
              data={[
                { x: "History", y: size.size70 },
                { x: "Events", y: size.size30 },
              ]}
              innerRadius={size.size170}
              labels={() => null}
              colorScale={["#F7F8F9", "#19B3A6"]}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: size.size25 }}
              x={size.size190}
              y={size.size190}
              text='Item'
            />

            <VictoryLegend x={size.size390} y={size.size120}
                 orientation="vertical"
                 rowGutter={size.size15}
                 data={[
                 { name: "Events", symbol: { fill: "#19B3A6" } },
                 { name: "Trainings", symbol: { fill: "#92BEFA" } },
                 { name: "Meeting", symbol: { fill: "#F4C584" } },
                 { name: "Teambulding", symbol: { fill: "#EF988F" } }
                  ]}
                standalone={false}
            />
          </Svg>
        </View>
        <View style={styles.inputContaner}>
        <TextInput placeholder='Search history'
                   value={searchField ? searchField : selectDay}
                   onChangeText={(text)=>setSearchField(text)}
                    onFoc={onFoc}
        />
          <TouchableOpacity onPress={()=>setShowItem(!showItem)}>
        <CalendarImage/>
          </TouchableOpacity>
        </View>
        {showItem &&
          <View style={{alignItems:'center'}}>
          <Shadow style={{width:size.size300, borderRadius:size.size4}}>
            <Calendar onDayPress={(day) => onSelDay(day)}/>
          </Shadow>
          </View>
        }
        <View  style={{alignItems:'center'}}>
        <EventComp el={searched} />
        </View>

      </ScrollView>
    </>
  )
}

export default HistoryEvents;

const styles = StyleSheet.create({

  txtLeft:{
    marginRight:size.size250,
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  },

  inputContaner:{
    width:size.size315,
    height:size.size45,
    flexDirection:'row',
    paddingHorizontal:size.size5,
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:size.size1,
    borderColor:'#D1CDCD',
    marginTop:(size.size100*-1),
    marginLeft:size.size30,
  }
})


