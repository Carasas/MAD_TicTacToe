
// Import
import React from 'react';
import { SafeAreaView, View } from 'react-native';

// Library
import { Layout, Theme } from '../Modules/Theme.js';
import TButton from '../Modules/TButton.js';
import Title from '../Modules/Title.js';
import Board from '../Modules/Board.js';

// Board
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Home
const Home = ({ navigation }) => {

  // Render
  return (
    <SafeAreaView style={[Layout.Full, Theme.Background]}>
      <View style={[Layout.Full, Theme.Contents]}>
        <Title title='Tic Tac Toe' />
        <Board xSize={3} ySize={3} board={board}  />
      </View>
      <View style={[Layout.Bottom, Layout.Horizontal]}>
        <TButton title="Rules" onPress={() => navigation.navigate('Rules')}/>
        <TButton title="Credits" onPress={() => navigation.navigate('Credits')} />
      </View>
    </SafeAreaView>
  );
  
};

// Export
export default Home;