// LocalEventsStackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LocalEventsScreen from '../screens/LocalEventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';

const Stack = createStackNavigator();

// stack for local events
const LocalEventsStackNavigator = () => {
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
        name="Local Events" 
        component={LocalEventsScreen} 
        options={{ title: 'Local Events' }} 
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: 'Event Details' }}
      />
    </Stack.Navigator>
  );
};

export default LocalEventsStackNavigator;
