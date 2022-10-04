import size from '../../functions/ratio';

export const HistoryEventStyle = {
  txtLeft:{
    marginRight:size.size250,
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  },
  txtHisEvent:{
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131',
    marginLeft:size.size130,
    marginRight: size.size100,
    marginBottom:size.size25
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
  },
  viewVicPie:{
    height:size.size350,
    width:size.size350,
    marginLeft:size.size20
  },
  shadCalendar:{
    width:size.size300,
    borderRadius:size.size4
  }
}
