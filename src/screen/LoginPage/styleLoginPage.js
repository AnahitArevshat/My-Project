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
  },
  txt:{
    fontSize: size.size24,
    lineHeight: size.size32,
    fontWeight: '600',
    Letter: 0.25,
    color: '#11493E',
    //fontFamily: 'Montserrat-Black',
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
    //position:'absolute',
    //right:size.size10,
    //top:size.size112,
  }
}
