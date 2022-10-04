import size from '../../functions/ratio';

export const BookLeaveStyle = {
  conteiner:{
    backgroundColor: '#FFFFFF;',
    height:`100%`,
    alignItems: 'center',
    marginTop:size.size5
  },
  viewcont:{
    flexDirection: 'row',
    width: size.size313,
    marginTop: size.size35,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  txt:{
    textAlign:'center',
  },
  emailContainer: {
    flexDirection: "row",
    height: size.size40,
    marginTop:size.size15,
    borderBottomWidth:0.5,
    borderBottomColor:'#E3E3E3',
  },
  chackIcon: {
    alignContent: 'center',
    justifyContent:'center'
  },
  commonInput: {
    width: '90%'
  },
  titl:{
    fontSize:size.size14,
    fontWeight:'400',
    lineHeight: 14.63,
    marginLeft:size.size14},

  mult:{
    width:size.size315,
    height: size.size75,
    marginTop:size.size95,
    marginRight:size.size10,
    marginLeft:size.size10,
    borderWidth:size.size1,
    borderColor: '#E3E3E3',
    borderRadius:size.size6
  },
  txtcont:{
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:size.size1/4,
    color: '#1B3131'
  },
  viewBT:{
    alignItems:'center',
    marginLeft:size.size50
  },
  viewBYLT:{
    width:size.size158,
    height:size.size24,
    marginTop:size.size30
  },
  viewCBLT:{
    flexDirection:'row',
    marginRight:size.size150,
    marginTop:size.size10
  },
  viewType:{
    width: size.size314,
    flexDirection:'row',
    alignItems:'center'
  },
  viewCal:{
    marginTop:size.size20,
    width:size.size314,
    height:size.size252,
    borderRadius:size.size4
  },
  viewBut:{
    width:size.size310,
    marginRight:size.size20,
    marginTop:size.size15*-1
  },
  styleShadow:{
    width:size.size314,
    borderRadius:size.size4
  }
}
