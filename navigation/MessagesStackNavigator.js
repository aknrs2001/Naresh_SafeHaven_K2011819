// MessagesStackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

// Messages STACK Mavigation
const MessagesStackNavigator = () => {
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
        name="Messages" 
        component={MessagesScreen} 
        options={{ title: 'Messages' }}
      />
    </Stack.Navigator>
  );
};

export default MessagesStackNavigator;
