// PrivacyPolicyScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicyScreen = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  // Fetches privacy info on start from local. Maybe in future from backend API to refresh updates
  useEffect(() => {
    const loadPrivacyPolicy = async () => {
      const privacyData = require('../data/privacypolicy.json');
      setPrivacyPolicy(privacyData.PrivacyPolicy);
    };

    loadPrivacyPolicy();
  }, []);

  if (!privacyPolicy) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  // Display Policys with scrolling capabilities
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{privacyPolicy.title}</Text>
      {privacyPolicy.content.map((paragraph, index) => (
        <Text style={styles.text} key={index}>{paragraph}</Text>
      ))}
    </ScrollView>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#a5ffff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#a5ffff',
    marginBottom: 10,
  },
});

export default PrivacyPolicyScreen;
