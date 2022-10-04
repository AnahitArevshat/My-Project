import size from '../../functions/ratio';

export const BSFNStyle = {
  contentContainer: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'grey',
   },

  txt:{
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#11493E',
  },

  txt1:{
    fontSize:size.size14,
    fontWeight:'400',
    lineHeight:size.size16,
    letterSpacing:0.25,
    color: '#616062'
  },
  txtName:{
    fontSize:size.size14,
    fontWeight:'600',
    lineHeight:size.size16,
    letterSpacing:0.25,
    color: '#347474'
  },
  posabs: {
    width:size.size325,
    height: size.size40,
    border:size.size1,
    borderWidth:size.size2,
    borderRadius:size.size10,
    borderColor:'#F5F5F5',
    position:'absolute',
    top:size.size215,
    left:size.size15,
  },
  butClose:{
    marginLeft:'90%',
    marginTop:(size.size1*-1)
  },
  viewChild:{
    width:'100%',
    height:'60%'
  },
  viewEmpl:{
    flexDirection:'row',
    marginTop:size.size15
  },
  viewComment:{
    marginLeft:size.size15,
    marginTop:size.size15
  },
  viewDesc:{
    marginLeft:size.size15,
    marginTop:size.size15,
    marginRight:size.size15
  },
  viewDescSec:{
    marginLeft:size.size15,
    marginTop:size.size13,
    marginRight:size.size15
  },
  viewButton:{
    flexDirection:'row',
    marginLeft:size.size80,
    position:'absolute',
    top:size.size240,
    left:size.size50
  },
  viewFirst:{
    marginLeft:size.size15
  },
  viewSec:{
    marginLeft:size.size50
  }
}
