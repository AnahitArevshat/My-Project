import size from '../../functions/ratio';

export const BSWStyle = {
  contentContainer: {
    alignItems: 'center',
  },

  txt:{
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#11493E',
  },
  closeBut:{
    marginLeft:size.size330
  },
  viewCET:{
    width:'100%',
    height:'80%',
    alignItems:'center'
  },
  viewCR:{
    width:'100%',
    height:'70%',
    alignItems:'center'
  },
  viewButGrModal:{
    alignItems: 'center',
    marginTop: size.size20,
    marginLeft:size.size13
  },
  viewDat:{
    width:'100%',
    height:'100%',
    alignItems:'center'
  },
  butCET:{
    marginTop:(size.size60*-1)
  },
  butOrgnizer:{
    marginTop:(size.size30*-1)
  },
  cal:{
    width:size.size300,
    borderRadius:size.size4
  }
}
