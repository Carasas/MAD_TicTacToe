
// Import
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

// Liobrary
import { Layout, Theme } from '../Modules/Theme.js';
import Message from '../Modules/Message.js';
import TButton from '../Modules/TButton.js';
import Title from '../Modules/Title.js';

// Home
const Rules = ({ navigation }) => {

  // Render
  return (
    <SafeAreaView style={[Layout.Full, Theme.Background]}>
      <View style={[Layout.Full, Theme.Content]}>
        <Title title='Rules' />
        <Message message='Tic-tac-toe is a simple game played on a 3x3 grid. Two players take turns marking empty squares with their symbol, either "X" or "O". The goal is to be the first player to get three of their symbols in a row, whether horizontally, vertically, or diagonally. If all nine squares are filled and neither player has achieved three in a row, the game ends in a draw.' />
      </View>
      <View style={[Layout.Bottom, Layout.Center]}>
        <TButton title="Back" onPress={() => navigation.goBack()}/>
      </View>
    </SafeAreaView>
  );
  
};

// Export
export default Rules;