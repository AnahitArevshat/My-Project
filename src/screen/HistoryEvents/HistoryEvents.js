import React, {useState, useMemo} from 'react';
import {Text, View,ScrollView, TextInput, TouchableOpacity} from 'react-native'
import { VictoryPie, VictoryLabel, VictoryLegend} from "victory-native";
import {useSelector} from "react-redux";
import { Calendar } from "react-native-calendars";
import Svg from 'react-native-svg';
import { Shadow } from 'react-native-shadow-2';
import moment from 'moment';
import size from "../../functions/ratio";
import CalendarImage from '../../assets/calendarImage.svg';
import ProfileEvents from "../../components/ProfileEvents/ProfileEvents";
import HideTabBar from '../../functions/hideTabBar';
import {HistoryEventStyle} from '../HistoryEvents/styleHistoryEvents';

const HistoryEvents=({navigation})=>{
  const event=useSelector(state=>state.events.events);
  const [showItem, setShowItem]=useState(false);
  const [selectDay, setSelectDay]=useState("");
  const [searchField, setSearchField] = useState("");

  HideTabBar(navigation);

  const searched = useMemo(() => {
    if (searchField) {
      if(selectDay){
        return [...event].filter(
          (p) =>
            p.type.toLowerCase().includes(searchField.toLowerCase()) &&
            moment(p.dat).format('MMM DD, YYYY').includes(moment(selectDay).format('MMM DD, YYYY'))
        );
      }
     return [...event].filter(
        (p) =>
          p.type.toLowerCase().includes(searchField.toLowerCase())
      );
    }
    if (selectDay) {
      if(searchField){
        return [...event].filter(
          (p) =>
            p.type.toLowerCase().includes(searchField.toLowerCase()) &&
            moment(p.dat).format('MMM DD, YYYY').includes(moment(selectDay).format('MMM DD, YYYY'))
        );
      }
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

  const onPres=()=>{
    setShowItem(!showItem);
    setSelectDay('');
  }

  return(
    <>
        <View>
          <Text style={HistoryEventStyle.txtHisEvent}>
            History events
          </Text>
        </View>

         <View style={HistoryEventStyle.viewVicPie}>
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

            <VictoryLegend x={size.size390} y={size.size110}
                 orientation="vertical"
                 rowGutter={size.size15}
                 data={[
                 { name: "Events", symbol: { fill: "#19B3A6" } },
                 { name: "Trainings", symbol: { fill: "#92BEFA" } },
                 { name: "Meeting", symbol: { fill: "#F4C584" } },
                 { name: "Teambulding", symbol: { fill: "#EF988F" } }
                  ]}
                standalone={false}
                           style={{
                           labels: { fontSize: 15},
                           }}
            />
          </Svg>
        </View>
        <View style={HistoryEventStyle.inputContaner}>
        <TextInput placeholder='Search history'
            onChangeText={(text)=>setSearchField(text)}
        />
          <TouchableOpacity onPress={onPres}>
        <CalendarImage/>
          </TouchableOpacity>
        </View>
        {showItem &&
          <View style={{alignItems:'center'}}>
          <Shadow style={HistoryEventStyle.shadCalendar}>
            <Calendar onDayPress={(day) => onSelDay(day)}/>
          </Shadow>
          </View>
        }
      <ScrollView>
        <View  style={{alignItems:'center'}}>
        <ProfileEvents el={searched} navigation={navigation}/>
        </View>
      </ScrollView>
    </>
  )
}

export default HistoryEvents;

