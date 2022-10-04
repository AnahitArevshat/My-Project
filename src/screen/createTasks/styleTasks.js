import size from '../../functions/ratio';

export const TasksStyle = {
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
    marginRight: size.size10,
    marginLeft: size.size10,
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
  viewCT:{
    width:size.size100,
    height:size.size27
  },
  txtCT:{
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:size.size1/4,
    color: '#1B3131'
  },
  viewProj:{
    width: '90%',
    flexDirection:'row',
    alignItems:'center'
  },
  viewProjSec:{
    alignItems:'center',
    marginLeft:size.size50
  },
  viewDate:{
    alignItems:'center',
    marginLeft:size.size80
  },
  viewDur:{
    alignItems:'center',
    marginLeft:size.size60
  },
  txtProj:{
    fontSize:size.size13,
    color:'light',
    marginLeft:size.size10
  },
  txtDate:{
    fontSize:size.size13,
    color:'light',
    marginLeft:size.size11
  }
}
