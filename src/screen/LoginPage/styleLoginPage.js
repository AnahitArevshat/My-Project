import size from '../../functions/ratio';

export const mainStyle = {
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: size.size263,
    height: size.size241,
    marginBottom: size.size20
  },
  txt:{
    fontFamily: 'Montserrat-Bold',
    fontSize: size.size24,
    lineHeight: size.size32,
    fontWeight: '600',
    Letter: size.size1/4,
    color: '#11493E',
  },
  OTP:{
    backgroundColor:'#347474',justifyContent: "center",
    alignItems: "center",
    width:size.size120,
    height:size.size45,
    marginLeft:size.size35,
    marginTop:size.size15,
    borderTopRightRadius:70,
    borderBottomLeftRadius:70,
  },
  ViewOTP:{
    width:size.size155,
    height:size.size45,
   },
  viewButGroup:{
    flexDirection: 'row',
    width:size.size340,
    marginTop:size.size30,
    marginLeft:size.size10
  },
  viewForInput:{
    justifyContent:'center',
    alignItems:'center'
  },
  txtForPass:{
    textAlign: 'right',
    marginLeft:size.size225,
    marginTop: size.size15
  },
  txtSubmit:{
    color:'white',
    fontWeight:'600',
    fontSize:size.size14,
    lineHeight:size.size16
  },
  viewCode:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  viewGoogle:{
    flexDirection:'row',
    marginTop:size.size30
  }
}
