// SettingsStackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import RaiseAlertScreen from '../screens/RaiseAlertScreen';

const Stack = createStackNavigator();

//  Navigator to keep  settings and policy screens in check

const SettingsStackNavigator = () => {
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
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: 'Settings' }} 
      />
      <Stack.Screen 
        name="TermsOfServiceScreen" 
        component={TermsOfServiceScreen} 
        options={{ title: 'Terms of Service' }} 
      />
      <Stack.Screen 
        name="PrivacyPolicyScreen" 
        component={PrivacyPolicyScreen} 
        options={{ title: 'Privacy Policy' }} 
      />
      <Stack.Screen 
        name="RaiseAlertScreen" 
        component={RaiseAlertScreen} 
        options={{ title: 'Raise Alert' }} 
      />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
