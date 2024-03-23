// LocalEventsScreen.js

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import EventPreview from '../components/EventPreview';
import events from '../data/events.json';

const LocalEventsScreen = ({ navigation }) => {
  const renderEvent = ({ item }) => (
    <EventPreview
      event={item}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default LocalEventsScreen;
