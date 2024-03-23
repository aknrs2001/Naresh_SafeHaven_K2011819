// MessagesScreen.js

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import messages from '../data/messages.json';

// Basic Chatlist with Groupchat having first ID
const ConversationItem = ({ title, preview, onPress }) => (
  <TouchableOpacity style={styles.conversationItem} onPress={onPress}>
    <Text style={styles.conversationTitle}>{title}</Text>
    <Text style={styles.conversationPreview}>{preview}</Text>
  </TouchableOpacity>
);

const MessagesScreen = () => {
  const renderConversationItem = ({ item }) => (
    <ConversationItem
      title={item.title}
      preview={item.preview}
      onPress={() => {}}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderConversationItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Stylesheet 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  conversationItem: {
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#a5ffff',
  },
  conversationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a5ffff',
  },
  conversationPreview: {
    fontSize: 14,
    color: '#a5ffff',
  },
});

export default MessagesScreen;
