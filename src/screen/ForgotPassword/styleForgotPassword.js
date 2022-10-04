import size from '../../functions/ratio';

export const secondStyle = {
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
  imgSec:{
    width: size.size192,
    height: size.size218,
    marginBottom:size.size60
  },
  txt:{
    fontSize: size.size24,
    lineHeight: size.size32,
    fontWeight: '600',
    color: '#11493E'
  },
  txtNewPass:{
    textAlign:'left',
    marginTop:size.size5,
    marginBottom:(size.size5 * -1)
  },
  txtLogin:{
    textAlign:'right',
    marginTop:size.size10
  },
  viewNewPass:{
    width:size.size328,
    height:size.size32
  }
}
