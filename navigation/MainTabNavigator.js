// MainTabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LocalEventsStackNavigator from './LocalEventsStackNavigator';
import MapStackNavigator from './MapStackNavigator';
import MessagesStackNavigator from './MessagesStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';

const Tab = createBottomTabNavigator();

// Bottom tab instead of side-tab for easy one finger navigation, Thinking to add icons for each button next?
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="LocalEvents"
      screenOptions={{
        tabBarActiveTintColor: '#a5ffff',
        tabBarInactiveTintColor: '#a5ffff60',
        tabBarStyle: { backgroundColor: 'black' },
      }}
    >
      <Tab.Screen name="Local Events" component={LocalEventsStackNavigator} />
      <Tab.Screen name="Map" component={MapStackNavigator} />
      <Tab.Screen name="Messages" component={MessagesStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
