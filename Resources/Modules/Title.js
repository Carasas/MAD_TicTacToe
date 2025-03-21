
// Import
import React from 'react';
import { View, Text } from 'react-native';

// Library
import { Layout, Theme } from '../Modules/Theme.js';

// Title
function Title({title='New Title'}) {
  return (
    <View style={[Layout.Top, Layout.Center]}>
      <Text style={Theme.Title}>{title}</Text>
    </View>
  );
}

// Export
export default Title;