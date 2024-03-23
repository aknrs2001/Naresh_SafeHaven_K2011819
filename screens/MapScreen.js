// MapScreen.js

import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Modal } from 'react-native';

const MapScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Tap action for bigger view

  // Fullscreen modal for better viewing. Need to make more dynamic in future, like instead of displaying alerts at bottom, could have map on full screen and representation diagram that can be toggled.

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={require('../assets/standard-map-image.jpg')}
          style={styles.map}
        />
      </TouchableOpacity>
    
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.fullscreenContainer}
          onPress={() => setModalVisible(false)}
        >
          <Image
            source={require('../assets/fullscreen-map-image.jpg')}
            style={styles.fullscreenMap}
          />
        </TouchableOpacity>
      </Modal>

      <Text style={styles.keyLabel}>Key</Text>
      <View style={styles.keyRow}>
        <Image source={require('../assets/circle-icon.png')} style={styles.iconSmall} />
        <Text style={styles.keyText}>Ongoing Issue</Text>
      </View>
      <View style={styles.keyRow}>
        <Image source={require('../assets/square-icon.png')} style={styles.iconSmall} />
        <Text style={styles.keyText}>Resolved Issue</Text>
      </View>
      <View style={styles.keyRow}>
        <Text style={[styles.keyLetter, { color: '#CB353A' }]}>R</Text>
        <Text style={styles.keyText}>High Priority</Text>
      </View>
      <View style={styles.keyRow}>
        <Text style={[styles.keyLetter, { color: '#E88441' }]}>O</Text>
        <Text style={styles.keyText}>Medium Priority</Text>
      </View>
      <View style={styles.keyRow}>
        <Text style={[styles.keyLetter, { color: '#54B9EB' }]}>B</Text>
        <Text style={styles.keyText}>Low Priority</Text>
      </View>
      <View style={styles.keyRow}>
        <Image source={require('../assets/fire-icon.png')} style={styles.iconSmall} />
        <Text style={styles.keyText}>Fire</Text>
      </View>
      <View style={styles.keyRow}>
        <Image source={require('../assets/car-icon.png')} style={styles.iconSmall} />
        <Text style={styles.keyText}>Car</Text>
      </View>
    </View>
  );
};

// Styling

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  fullscreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenMap: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  keyLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  keyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  keyLetter: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  keyText: {
    color: 'white',
    fontSize: 16,
  },
  iconSmall: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 5,
  },
});

export default MapScreen;
