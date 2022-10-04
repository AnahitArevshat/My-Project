import size from '../../functions/ratio';

export const EventPageStyle = {
  txt:{
    paddingVertical:size.size20,
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  },

  txtLeft:{
    fontSize:size.size14,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#616062',
    marginLeft:size.size10,
  },
  txtDesc:{
    fontSize:size.size14,
    fontWeight:'600',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#616062',
    marginLeft:size.size40,
    marginTop:size.size20,
  },
  txtSpec:{
    fontSize:size.size12,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#616062',
    marginLeft:size.size10,
  },
  viewStyle:{
    marginLeft:size.size40,
    marginTop:size.size20,
    flexDirection:'row',
    alignItems:'center'
  },
  viewDesc:{
    width:size.size314,
    height:size.size112,
    marginLeft:size.size30,
    marginTop:size.size10,
  },
  viewTitle:{
    width:size.size283,
    height:size.size16
  },
  viewPartic:{
    flexDirection:'row',
    alignItems:'center'
  },
  viewImg:{
    marginLeft:size.size40,
    marginTop:size.size10
  },
  img:{
    width:size.size32,
    height:size.size32,
    borderRadius:size.size4
  }
}
