import React, {useState} from "react";
import {TouchableOpacity, View, ImageBackground, StyleSheet } from "react-native";
import Home1 from "../../assets/home1.svg";
import BottomAppBar1 from "../../assets/BottomAppBar1.svg";
import BottomAppBar2 from "../../assets/BottomAppBar2.svg";
import Person1 from "../../assets/person1.svg";
import Poligon from '../../assets/poligon.svg';
import PoligonPress from '../../assets/polygonPress.svg';
import PolIcon1 from '../../assets/polIcon1.svg';
import PolIcon2 from '../../assets/polIcon2.svg';
import PolIcon3 from '../../assets/polIcon3.svg';
import Home from '../../assets/home.svg';
import BottomAppBarFoc1 from '../../assets/BoottomAppBarFoc1.svg';
import BootomAppBarFoc2 from '../../assets/BottomAppBarFoc2.svg';
import PersonFoc from '../../assets/PersonFoc.svg';
import CreateEvents from "../../screen/createEvents/createEvents";
import size from '../../functions/ratio';


function MyTabBar({ state, descriptors, navigation }) {

  const [showItem, setShowItem]=useState(false);

  const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions?.tabBarStyle?.display === "none") {
          return null;
  }

    const pol1=()=>{
      setShowItem(false);
      navigation.navigate('CreateTask');
      }
    const pol2=()=>{
      setShowItem(false);
      navigation.navigate('CreateEvents');
    }

  const pol3=()=>{
    setShowItem(false);
    navigation.navigate('BookLeave');
  }

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowItem(!showItem)}>
        {showItem ?
          (
            <Poligon style={styles.pol} />

          )
          : <PoligonPress style={styles.polPress} />

        }

      </TouchableOpacity>

      {showItem ? (
        <View>
          <TouchableOpacity  onPress={pol1}>
            <PolIcon1 style={styles.secBut}/>
          </TouchableOpacity>
          <PolIcon2 style={styles.thirdBut} onPress={pol2}/>
          <PolIcon3 style={styles.forthBut} onPress={pol3}/>
        </View>

      ) : null}
      <ImageBackground style={styles.img} source={require("../../image/Rectangle843.png")}>
        <View style={styles.viewRoute}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
           // console.log(route.name);

            const isFocused = state.index === index;

            const onPress = () => {
              setShowItem(false);
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
                }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            const obj = {
              Home: isFocused ? <Home/> :<Home1/>,
              Notificat: isFocused ? <BottomAppBarFoc1/> : <BottomAppBar1 />,
              Activat: isFocused ? <BootomAppBarFoc2/> : <BottomAppBar2 />,
              Prof: isFocused ? <PersonFoc/> : <Person1 />,
              CreateTask: <PolIcon1 />,
              CreateEvents: <PolIcon2 />,
              CreateBookLeave: <PolIcon3 />,
              DelUpdPage:<PersonFoc/>
            };

            if (index < 4) {
              return (
                <TouchableOpacity
                  key={index}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.indStyle}
                >

                  {obj[route.name]}

                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ImageBackground>
    </View>
  );
}
export default MyTabBar;

const styles=StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button:{
    position:'absolute',
    top:(size.size80*-1),
    justifyContent:'center',
    alignItems:'center'
  },
  secBut:{
    position:'absolute',
    top:(size.size90*-1),
    left:size.size99,
    justifyContent:'center',
    alignItems:'center',
  },
  thirdBut:{
    position:'absolute',
    top:(size.size124*-1),
    left:size.size150,
    justifyContent:'center',
    alignItems:'center',
  },
  forthBut:{
    position:'absolute',
    top:(size.size90*-1),
    left:size.size201,
    justifyContent:'center',
    alignItems:'center',
  },
  pol:{
    position: "absolute",
    bottom: (size.size28*-1),
    left:size.size125
  },
  polPress:{
    position: "absolute",
    bottom: (size.size28*-1),
    left:size.size125
  },
  img:{
    width: size.size340,
    height:size.size70,
    marginBottom: size.size5
  },
  viewRoute:{
    flex: 1,
    flexDirection: "row"
  },
  indStyle:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

})

