import size from '../../functions/ratio';

export const AllComponentStyle = {
  contain:{
    width:size.size315,
    borderRadius:size.size4,
    marginTop:size.size10
  },

  txt:{fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
  },

  proj:{
    width:size.size100,
    height:size.size16,
    alignItems:'center',
    marginRight:size.size10
  },
  shad:{
    width:size.size315,
    height:size.size111,
    borderRadius:6,
    shadowColor: 'gray',
    shadowOpacity: 1,
    elevation: size.size4,
    flex: 1,
    shadowRadius: size.size6,
    borderColor:'gray',
    overflow: 'hidden',
  },
  viewTask:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#E7F2F2'
  },
  txtTaskProj:{
    color:'#fff',
    fontSize:size.size11
  },
  viewEvent:{
    width:size.size5,
    height:size.size111,
    borderColor:'#F4C584',
    borderBottomLeftRadius:size.size6,
    borderTopStartRadius:size.size6,
  },
  txtEvDesc:{
    textAlign:'justify',
    fontSize:size.size12,
    fontWeight:'400',
    marginTop:size.size10,
    marginLeft:size.size2,
    marginRight:size.size7
  },
  txtEvRoom:{
    marginLeft:size.size50,
    marginTop:size.size12,
    marginRight:size.size5
  }
}
