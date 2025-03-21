
// Import
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// Library
import { Layout, Theme } from '../Modules/Theme.js';

// Button
function TButton({ title='New Button', onPress=undefined }) {
  return (
    <TouchableOpacity style={Theme.Button} onPress={onPress} >
      <Text style={Theme.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

// Export
export default TButton;
