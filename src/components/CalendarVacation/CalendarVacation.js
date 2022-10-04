import React, {useState} from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from "react-native";
import { connect } from 'react-redux'
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { Shadow } from 'react-native-shadow-2';
import size from '../../functions/ratio';


const CalendarVacation = props => {
  const [curDay, setCurDay]=useState(moment(new Date()).format("YYYY-MM-DD"));
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [markedDates, setMarkedDates] = useState({[curDay]:  {disabled: true, startingDay: true, color: '#347474', endingDay: true}});
  const [showItem, setShowItem]=useState(false);

  return(

    <View>
      <TouchableOpacity onPress={()=>setShowItem(!showItem)}>
      </TouchableOpacity>
      <Text style={styles.txt}>
        {(startDay && endDay) && moment(startDay).format('MMMM DD - ')+moment(endDay).format('DD, YYYY')}
      </Text>
      <View style={{alignItems:'center'}}>
        <Shadow style={styles.shad}>
          <Calendar
            onDayPress={(day) => {
              if (startDay && !endDay) {
                const date = {}
                for (const d = moment(startDay); d.isSameOrBefore(day.dateString); d.add(1, 'days')) {
                  date[d.format('YYYY-MM-DD')] = {
                    color: '#D4E9E9',
                  };
                  if(d.format('YYYY-MM-DD') === startDay) date[d.format('YYYY-MM-DD')].startingDay = true;
                  if(d.format('YYYY-MM-DD') === day.dateString) date[d.format('YYYY-MM-DD')].endingDay = true;
                }
                date[curDay]={disabled: true, startingDay: true, color: '#347474', endingDay: true};
                setMarkedDates(date);
                setEndDay(day.dateString);
              } else {
                setStartDay(day.dateString)
                setEndDay(null)
                setMarkedDates({
                  [day.dateString]: {
                    color: '#D4E9E9',
                    textColor: 'white',
                    startingDay: true,
                    endingDay: true
                  },
                  [curDay]:  {disabled: true, startingDay: true, color: '#347474', endingDay: true}
                })
              }

            }

            }
            monthFormat={"MMMM"}
            hideDayNames={false}
            markingType={'period'}
            markedDates={markedDates}
          />
        </Shadow>
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {
  }
}
export default connect(mapStateToProps, {

})(CalendarVacation)



const styles = StyleSheet.create({
  txt:{
    color: '#11493E',
    fontSize:size.size16,
    fontWeight:'500',
    letterSpacing:size.size1/4,
    marginBottom:size.size20,
    marginLeft:size.size35
  },
  shad:{
    width:size.size320,
    borderRadius:size.size4
  }
})
