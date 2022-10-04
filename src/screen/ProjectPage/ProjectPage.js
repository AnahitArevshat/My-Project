import React from 'react';
import {Text, View, ScrollView, Image} from "react-native";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack} from "victory-native";
import size from "../../functions/ratio";
import Grafik from "../../assets/grafik.svg";
import {ProjectPageStyle} from '../ProjectPage/styleProjectPage';

const ProjectPage=({route})=>{

  return(
    <>

        <View style={{alignItems:'center'}}>
          <Text style={ProjectPageStyle.txtLeft}>Project name</Text>
          <Grafik style={{marginLeft:size.size40*-1}}/>
          <VictoryChart
            width={size.size340}
            height={size.size280}
            >
            <VictoryAxis
              crossAxis
              style={{
                axis: {stroke: '#ECECEC'},
                grid: {stroke: '#ECECEC', strokeWidth:2},

                tickLabels: {
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: size.size12,
                  lineHeight: size.size15,
                  fill: '#B8C0CC',
                },
              }}
              tickValues={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ' ']}
            />
            <VictoryAxis
              dependentAxis
              crossAxis
              style={{
                axis: {stroke: '#ECECEC'},
                grid: {stroke: '#ECECEC', strokeWidth:2},
                tickLabels: {
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: size.size12,
                  lineHeight: size.size15,
                  fill: '#B8C0CC',
                },
              }}
              tickValues={['0', '10', '20', '30', '40', '50', '60']}
            />
            <VictoryStack colorScale={['#83B7AD', '#EE9087']}>
              <VictoryBar
                data={[{x: 1.5, y: 1.8, y0: 2}, {x: 2.5, y: 1.01, y0: 3.8}, {x: 3.5, y: 0.5, y0: 3.8},
                  {x: 4.5, y: 1.1, y0: 2.7}, {x: 5.5, y: 0.5, y0: 3.8}, {x: 6.5, y: 2.2, y0: 3.8}]}
                style={{data:{fill:'#83B7AD', width:(size.size29*1.02), height:size.size30}}}
              />
              <VictoryBar
                data={[{x: 1.5, y:0.45, y0:1.6}, {x: 2.5, y: 0.4, y0: 4.8}, {x: 3.5, y: 2, y0: 3.8},
                  {x: 4.5, y: 0.4, y0: 2.3}, {x: 5.5, y: 1.1, y0: 4.2}, {x: 6.5, y: 0.5, y0: 5.8}]}

                style={{data:{fill:'#EE9087', width:(size.size29*1.02), height:size.size30}}}
              />
            </VictoryStack>
          </VictoryChart>
        </View>
      <ScrollView>
      <View>
        <Text style={ProjectPageStyle.txtDesc}>Description</Text>
        <View style={ProjectPageStyle.viewDesc}>
          <Text style={[ProjectPageStyle.txt, {color: '#949494'}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
          <View>
          <Text style={ProjectPageStyle.txtDesc}>Start at</Text>
          <Text style={ProjectPageStyle.txtDat}>{route.params.startdat}</Text>
          <Text style={ProjectPageStyle.txtDesc}>Deadline</Text>
          <Text style={ProjectPageStyle.txtDat}>{route.params.deadline}</Text>
          </View>
          <View>
            <Text style={ProjectPageStyle.txtDesc}>Members</Text>
            <View style={ProjectPageStyle.viewContan}>
              <View style={ProjectPageStyle.viewImg}>
                <Image style={ProjectPageStyle.img} source={require('../../assets/evenPage/partic1.jpg')}/>
              </View>
              <View style={ProjectPageStyle.viewName}>
                <Text style={ProjectPageStyle.txtName}>Name Surname</Text>
                <Text style={ProjectPageStyle.txtSpac}>Specialist</Text>
              </View>
            </View>
            <View style={ProjectPageStyle.viewContan}>
              <View style={ProjectPageStyle.viewImg}>
                <Image style={ProjectPageStyle.img} source={require('../../assets/evenPage/partic3.jpg')}/>
              </View>
              <View style={ProjectPageStyle.viewName}>
                <Text style={ProjectPageStyle.txtName}>Name Surname</Text>
                <Text style={ProjectPageStyle.txtSpac}>Specialist</Text>
              </View>
            </View>
          </View>

      </View>
    </ScrollView>
     </>
  )
}

export default ProjectPage;


