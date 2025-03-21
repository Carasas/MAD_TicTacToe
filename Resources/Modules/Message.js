
// Import
import React from 'react';
import { View, Text } from 'react-native';

// Library
import { Layout, Theme } from '../Modules/Theme.js';

// Message
function Message({message='New Message'}) {
  return (
    <View style={[Layout.Area, Theme.Area]}>
      <Text style={Theme.Text}>{message}</Text>
    </View>
  );
}

// Export
export default Message;