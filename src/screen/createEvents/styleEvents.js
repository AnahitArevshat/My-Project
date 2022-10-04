import size from '../../functions/ratio';

export const EventsStyle = {
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
    marginTop: size.size15,
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
  titl:{fontSize:size.size14, fontWeight:'400', lineHeight: 14.63, marginLeft:size.size14},
  mult:{
    width:'92%',
    height: size.size75,
    marginTop: size.size20,
    marginRight:size.size10,
    marginLeft:size.size10,
    borderWidth:size.size1,borderColor: '#E3E3E3',
    borderRadius:size.size6
  },
  viewCNE:{
    width:size.size158,
    height:size.size24
  },
  txtCNE:{
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:size.size1/4,
    color: '#1B3131'
  },
  viewCET:{
    flexDirection:'row',
    marginRight:235,
    marginTop:10
  },
  viewType:{
    width: '90%',
    flexDirection:'row',
    alignItems:'center'
  },
  txtTitle:{
    fontSize:size.size13,
    color:'light',
    marginLeft:size.size12
  },
  txtDur:{
    fontSize:size.size13,
    color:'light',
    marginLeft:size.size10
  },
  viewTitle:{
    alignItems:'center',
    marginLeft:size.size50
  },
  viewDat:{
    alignItems:'center',
    marginLeft:size.size80
  },
  viewDur:{
    alignItems:'center',
    marginLeft:size.size60
  }
}
