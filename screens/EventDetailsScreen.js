// EventDetailsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import events from '../data/events.json';

const EventDetailsScreen = ({ route }) => {
  const { eventId } = route.params;
  const event = events.find((e) => e.id === eventId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.details}>{event.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  details: {
    fontSize: 16,
    color: 'white',
  },
});

export default EventDetailsScreen;
