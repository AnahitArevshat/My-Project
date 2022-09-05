import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import HomePage from '../screen/HomePage/HomePage';
import TabBarComp from '../components/TabBarComp/TabBarComp';
import One from '../screen/one/one';
import Two from '../screen/two/two';
import CreateTasks from "../screen/createTasks/createTasks";
import CreateEvents from '../screen/createEvents/createEvents';
import BookLeave from '../screen/bookLeave/bookLeave';
import Profile from '../screen/Profile/Profile';
import DelUpdTasks from "../screen/createTasks/delUpdTasks";
import Notifications from "../screen/notifications/notification";
import Activity from "../screen/Activity/Activity";
import HistoryTasks from "../screen/HistoryTasks/HistoryTasks";
import HistoryEvents from "../screen/HistoryEvents/HistoryEvents";

const Tab = createBottomTabNavigator();

function TabScreens() {

    return (
      <Tab.Navigator
      tabBar={(props) => <TabBarComp {...props}/>}
      tabBarOptions={{
      showLabel: false,
      }}
      screenOptions={{headerShown:false}}
      >
      <Tab.Screen
        name="Home"
        component={HomePage}
       />
        <Tab.Screen
        name="Notificat"
        component={Notifications}
        />
      <Tab.Screen
        name="Activat"
        component={Activity}
        />
        <Tab.Screen
          name="Prof"
          component={Profile}
          />

      <Tab.Screen
        name="CreateTask"
        component={CreateTasks}
        />
        <Tab.Screen
          name="CreateEvents"
          component={CreateEvents}
        />
        <Tab.Screen
          name="BookLeave"
          component={BookLeave}
        />
        <Tab.Screen
          name="DelUpd"
          component={DelUpdTasks}
        />
        <Tab.Screen
          name="HisTas"
          component={HistoryTasks}
        />
        <Tab.Screen
          name="HisEven"
          component={HistoryEvents}
        />
    </Tab.Navigator>

  );
}

export default TabScreens;
