
// Import
import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, View, Text, Button } from 'react-native';

// Library
import { Layout, Theme } from '../Modules/Theme.js';
import TButton from '../Modules/TButton.js';
import Title from '../Modules/Title.js';
import Board from '../Modules/Board.js';
import AsyncData from '../Modules/AsyncData.js';
import TAlert from '../Modules/TAlert.js';

// Board
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Home
const Home = ({ navigation, route }) => {

  // States
  const [currentBoard, setCurrentBoard] = useState(board);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  // Load Board
  useEffect(() => {
    if (route.params?.loadedBoard) {
      const loadedData = route.params.loadedBoard;
      setCurrentBoard(loadedData.board);
      setCurrentPlayer(loadedData.player);
      setWinner(loadedData.win);
      console.log('Updated currentBoard:', loadedData.board);
    }
  }, [route.params?.loadedBoard]);

  // On Board Change
  const onChange = (newBoard, newPlayer, newWinner) => {
    console.log('New Board:', newBoard);
    console.log('New Player:', newPlayer);
    console.log('New Winner:', newWinner);
    setCurrentBoard(newBoard);
    setCurrentPlayer(newPlayer);
    setWinner(newWinner);
  };

  // Save
  const Save = async (key) => {
  console.log('Saving game with board:', currentBoard);
  console.log('Saving game with player:', currentPlayer);
  console.log('Saving game with winner:', winner);
  try {
    const gameState = { board: currentBoard, player: currentPlayer, win: winner };
    await AsyncData.Save(key, gameState);
    Alert.alert('Game Saved', `Game saved as "${key}".`);
    console.error('Game Saved', `Game saved as "${key}".`);
  } catch (error) {
    Alert.alert('Error', 'Failed to save the game.');
    console.error('Error saving game:', error);
  }
};

  // Save and Reset
  const SaveAndReset = () => {
    TAlert(
      'Save & Reset',
      'Would you like to save and reset your game?',
      'Yes',
      () => {
        Save(`Game-${Date.now()}`);
        setCurrentBoard(board);
        setCurrentPlayer('X');
        setWinner(null);
      },
      'No',
      () => {
        console.log('Save and reset cancelled');
      }
    );
  };

  // Render
  return (
    <SafeAreaView style={[Layout.Full, Theme.Background]}>
      <View style={[Layout.Full, Theme.Contents]}>
        <Title title='Tic Tac Toe' />
        <Board xSize={3} ySize={3} board={currentBoard} onChange={onChange} />
      </View>
      <View style={[Layout.Bottom, Layout.Horizontal]}>
        <TButton title="Save" onPress={SaveAndReset}/>
        <TButton title="Load" onPress={() => navigation.navigate('Load', { navigation, currentBoard })}/>
        <TButton title="Rules" onPress={() => navigation.navigate('Rules')}/>
        <TButton title="Credits" onPress={() => navigation.navigate('Credits')} />
      </View>
    </SafeAreaView>
  );
  
};

// Export
export default Home;
