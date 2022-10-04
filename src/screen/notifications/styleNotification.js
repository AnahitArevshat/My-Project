import size from '../../functions/ratio';

export const NotificationStyle = {
  txt: {
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:0.25,
    color: '#1B3131'
  },
  txtMasR:{
    fontSize:size.size12,
    fontWeight:'500',
    lineHeight:size.size15,
    color: '#347474',
    textAlign:'right',
    marginRight:(size.size50*-1),
    marginBottom:size.size20
  },
  TouchMasR:{
    marginTop:size.size20,
    marginLeft:size.size200
  },
  viewButNot:{
    flexDirection: 'row',
    width:size.size340,
    marginTop:size.size30,
    marginLeft:size.size25
  },
  viewDev:{
    marginTop:size.size10,
    marginLeft:size.size40
  },
  viewNot:{
    alignItems:'center',
    marginTop:size.size150,
    marginRight:size.size40
  }
}
