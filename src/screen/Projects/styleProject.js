import size from '../../functions/ratio';

export const ProjectStyle = {
  viewContaner:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  viewDivid:{
    height: size.size1,
    width: "85%",
    marginTop:size.size10,
    marginLeft:size.size40,
    backgroundColor: "#E3E3E3",
  },
  viewImg:{
    marginLeft:size.size40,
    marginTop:size.size10
  },
  viewProj:{
    width:size.size113,
    height:size.size18
  },
  viewSpec:{
    width:size.size140,
    height:size.size32
  },
  img:{
    width:size.size60,
    height:size.size60,
    borderRadius:size.size4,
    marginVertical:size.size5,
  },
  txtLeft: {
    marginTop: size.size40,
    marginBottom: size.size20,
    fontSize: size.size16,
    fontWeight: '500',
    lineHeight: size.size24,
    letterSpacing: 0.24,
    color: '#1B3131'
  },
  txtProj: {
    marginLeft:(size.size10*-1),
    fontSize: size.size16,
    fontWeight: '500',
    letterSpacing: 0.24,
    lineHeight: size.size18,
    color: '#616062'
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
    marginLeft:(size.size10*-1),
    fontSize:size.size14,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.24,
    color: '#949494',
  }
}
