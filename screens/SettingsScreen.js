// SettingsScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const SettingsScreen = ({ navigation }) => {
  const navigateToTerms = () => {
    navigation.navigate('TermsOfServiceScreen');
  };

  const navigateToPrivacy = () => {
    navigation.navigate('PrivacyPolicyScreen');
  };

  const navigateToRaiseAlert = () => {
    navigation.navigate('RaiseAlertScreen');
  };

  
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/SafeHaven-icon2.jpg')}
        style={styles.icon}
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.option}>View Account Info</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToTerms}>
        <Text style={styles.option}>Terms of Service</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToPrivacy}>
        <Text style={styles.option}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRaiseAlert}>
        <Text style={styles.option}>Raise an Alert</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.option}>Contact Immediate Response Team</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.option}>Recap Tutorial</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.option}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center', 
  },
  icon: {
    width: screenWidth - 40, 
    height: (screenWidth - 40) / 2, 
    resizeMode: 'contain', 
    marginTop: 20, 
    marginBottom: 40,
  },
  option: {
    width: '100%', 
    fontSize: 18,
    color: '#a5ffff',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#a5ffff',
    textAlign: 'left',
  },
});

export default SettingsScreen;
