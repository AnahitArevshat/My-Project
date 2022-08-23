import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import ForgotPassword from "../screen/ForgotPassword/ForgotPassword";
import LoginPage from '../screen/LoginPage/LoginPage';
import TabScreens from '../navigation/TabScreens';
import CreateTasks from "../screen/createTasks/createTasks";
import CreateEvents from "../screen/createEvents/createEvents";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: "Login" }} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "ForgotPassword" }}
        />
        <Stack.Screen
          name="BottomNavigation"
          component={TabScreens}
          options={{ title: "Bottom_Navigation" }}
        />
        {
        }
        <Stack.Screen
          name="CreateTasks"
          component={CreateTasks}
          options={{ title: "Create_Tasks" }}
        />
        <Stack.Screen
          name="CreateEvent"
          component={CreateEvents}
          options={{ title: "Create_Events" }}
        />
      </Stack.Navigator>

      </NavigationContainer>
  );
}