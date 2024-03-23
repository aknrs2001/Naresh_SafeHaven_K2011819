// RaiseAlertScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// could introduce a picker where users can select between a preporogammed list of alert markers, or selecting Other option if not listed
const RaiseAlertScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitAlert = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter Title"
        placeholderTextColor="#a5ffff60"
      />
      <Text style={styles.label}>Description of Concern:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter Description"
        placeholderTextColor="#a5ffff60"
        multiline
      />
      <Button title="Submit" onPress={submitAlert} color="#a5ffff" />
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#a5ffff',
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#a5ffff',
    color: '#a5ffff',
  },
});

export default RaiseAlertScreen;
