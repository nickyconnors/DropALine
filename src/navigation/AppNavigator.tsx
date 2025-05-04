import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import { RootStackParamList } from './types';  // ✅ Make sure this path is correct

const Stack = createNativeStackNavigator<RootStackParamList>(); // ✅ Only declare ONCE
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;
