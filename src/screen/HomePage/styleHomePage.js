export const homeStyle = {
  container: {
    backgroundColor: '#FFFFFF;',
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 263,
    height: 241,
  },
  viw:{
    width: 101,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'#347474',
  },
  navigItem: {
    flexDirection: 'row',
    //backgroundColor: '#347474',
    width:315,
    padding: 10,
  },
  navbut:{
    flexDirection: 'row',
    backgroundColor: '#347474',
    borderRadius: 4,
    }
};



/*

        <View style={[homeStyle.viw, {backgroundColor: focused ? "#E7F2F2" : '#347474'}]}>
          <TouchableOpacity onPress={()=>setFocused(!focused)}>
          <Text style={{color: focused ? "#347474" : '#E7F2F2'}}>Tasks</Text>
          </TouchableOpacity>
        </View>
        <View style={[homeStyle.viw, {backgroundColor: focused ? "#E7F2F2" : '#347474'}]}>
          <TouchableOpacity onPress={()=>setFocused(true)}>
            <Text style={{color: focused ? "#347474" : '#E7F2F2'}}>Events</Text>
          </TouchableOpacity>
        </View>
        <View style={[homeStyle.viw, {backgroundColor: !focused ? "#E7F2F2" : '#347474'}]}>
          <TouchableOpacity onPress={()=>setFocused(focused)}>
            <Text style={{color: !focused ? "#347474" : '#E7F2F2'}}>All</Text>
          </TouchableOpacity>
        </View>
*/
