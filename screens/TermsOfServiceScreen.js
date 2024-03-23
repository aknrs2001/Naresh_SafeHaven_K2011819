// TermsOfServiceScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


// Planning to pull these terms from a live server in the future. Static for now
const TermsOfServiceScreen = () => {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    const loadTerms = async () => {
      const termsData = require('../data/termsofserv.json');
      setTerms(termsData.TermsOfService);
    };

    loadTerms();
  }, []);

  if (!terms) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  // Maybe add clickable links within the text
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{terms.title}</Text>
      {terms.content.map((paragraph, index) => (
        <Text style={styles.text} key={index}>{paragraph}</Text>
      ))}
    </ScrollView>
  );
};

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

export default TermsOfServiceScreen;
