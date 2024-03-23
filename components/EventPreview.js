// EventPreview.js

//Maybe add 'favourite' feature to let users mark events they're interested in

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Maybe add a 'like' button ?
const EventPreview = ({ event, navigation }) => {
  const handlePress = () => {
    navigation.navigate('EventDetails', { eventId: event.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description} numberOfLines={1}>{event.description}</Text>
      <Button title="Click for more details" onPress={handlePress} color="#a5ffff" />
    </View>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'black',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    marginVertical: 4,
    color: 'white',
  },
});

export default EventPreview;
