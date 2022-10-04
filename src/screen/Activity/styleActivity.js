import size from '../../functions/ratio';

export const ActivityStyle = {
  container: {
    flex: 1,
    alignItems: "center",
  },
  txt: {
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'500',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  },
  txtLeft:{
    marginRight:size.size240,
    marginTop:size.size20,
    fontSize:size.size16,
    fontWeight:'600',
    lineHeight:size.size24,
    letterSpacing:0.24,
    color:'#1B3131'
  },
  chart:{
    width:size.size340,
    height:size.size225,
    marginBottom:size.size250,
    marginLeft:size.size17,
  },
  chartNext:{
    width:size.size340,
    height:size.size450,
    marginTop:(size.size135*-1),
    marginLeft:size.size17
  }
}
