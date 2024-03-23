// MapStackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

// Stack Naivgation for Map , // Only one screen that'll transition between two different screen perspectives for now, in future add: Filter for a specific type of Alert, Displaying info regarding alert on the Map Ui when selecting it's respective marker
const MapStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#a5ffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen 
        name="Map" 
        component={MapScreen} 
        options={{ title: 'Map' }} 
      />
    </Stack.Navigator>
  );
};

export default MapStackNavigator;
