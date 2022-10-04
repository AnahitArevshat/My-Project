import size from '../../functions/ratio';

export const BSFBStyle = {
  contentContainer: {
    alignItems: 'center',
  },
  contan:{
    alignItems: 'center',
  },
  txt:{
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:size.size1/4,
    color: '#11493E',
  },

  txtCurrDay:{
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:size.size1/4,
    color: '#11493E',
  },

  mult:{
    width:size.size325,
    height: size.size91,
    borderWidth:size.size1,
    borderColor: '#E3E3E3',
    borderRadius:size.size6
  },
  multil:{width:size.size320,
    height: size.size91,
    borderWidth:size.size1,
    borderColor: '#E3E3E3',
    borderRadius:size.size6,
    marginTop:size.size30,
    marginBottom:(size.size15*-1),
    marginLeft:size.size28
  },
  closeBut:{
    marginLeft:size.size330
  },
  viewCBL:{
    width:'100%',
    height:'75%',
    alignItems:'center'
  },
  viewCurrDay:{
    marginLeft:size.size28,
    marginTop:size.size20
  },
  viewTP:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:size.size5
  },
  viewButGroupe:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:size.size30,
    marginLeft:(size.size10*-1)
  },
  viewVac:{
    width:'100%',
    height:'80%'
  },
  viewGreate:{
    width:'100%',
    height:'70%',
    alignItems:'center'
  },
  butHL:{
    alignItems:'center',
    marginBottom:size.size260,
    marginTop:(size.size5*-1)
  }
}
