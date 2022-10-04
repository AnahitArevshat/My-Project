import size from '../../functions/ratio';

export const homeStyle = {
  container: {
    backgroundColor: '#FFFFFF;',
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: size.size315,
    height: size.size145,
    marginBottom: size.size15
  },
  navigItem: {
    flexDirection: 'row',
    width:size.size315,
    padding: size.size10,
    marginRight:size.size20
  },
  navbut:{
    flexDirection: 'row',
    backgroundColor: '#347474',
    borderRadius: size.size4,
    },
  viewHelloName:{
    height:size.size28,
    marginBottom:size.size20,
    marginRight:size.size180,
    marginTop:size.size20
  },
  viewFormatDat:{
    flexDirection: 'row',
    width: size.size310,
    marginTop:size.size15,
    marginLeft:size.size5
  },
  txtFormatDat:{
    fontSize:size.size14,
    fontWeight: '600'
  },
  txtHelloName:{
    textAlign:'left',
    fontSize:size.size24,
    fontWeight:'600'
  },
  txtRes:{
    fontFamily:'Montserrat-Regular',
    fontSize:size.size14,
    fontWeight:'600',
    lineHeight:size.size16,
    letterSpacing:size.size1/4,
    color: '#D6453D'
  },
  TochRes:{
    width:size.size42,
    height:size.size16,
    marginTop:size.size10,
    marginLeft:size.size280
  }
};

