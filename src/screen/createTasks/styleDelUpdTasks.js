import size from '../../functions/ratio';

export const DelUpdTasksStyle = {
  conteiner:{
    backgroundColor: '#FFFFFF;',
    flex: 1,
    alignItems: 'center',
    marginTop:size.size60
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
    marginTop: size.size25,
    marginRight:size.size10,
    marginLeft:size.size10,
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
  viewUT:{
    width:size.size100,
    height:size.size27
  },
  viewProj:{
    width: '90%',
    flexDirection:'row',
    alignItems:'center'
  },
  viewProjSec:{
    alignItems:'center',
    marginLeft:size.size55
  },
  viewDat:{
    width: '90%',
    flexDirection:'row',
    alignItems:'center'
  },
  viewDatSec:{
    alignItems:'center',
    marginLeft:size.size80
  },
  viewDur:{
    alignItems:'center',
    marginLeft:size.size60
  },
  viewDel:{
    flexDirection:'row',
    marginTop:size.size50
  },
  txtUT:{
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#1B3131'
  },
  txtProj:{
    fontSize:size.size13,
    color:'light',
    marginLeft:size.size8
  },
  txtDat:{
    fontSize:size.size13,
    color:'light',
    marginLeft:size.size9
  },
  txtDur:{
    fontSize:size.size13,
    color:'light',
    marginLeft:size.size8
  }
}
