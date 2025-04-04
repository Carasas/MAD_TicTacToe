
// Import
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Button, Alert } from 'react-native';
import AsyncData from '../Modules/AsyncData.js';

// Library
import { Layout, Theme } from '../Modules/Theme.js';
import TButton from '../Modules/TButton.js';
import Title from '../Modules/Title.js';

// Load
const Load = ({ navigation, route }) => {

  // State
  const [savedGames, setSavedGames] = useState([]);

  // Load Data
  useEffect(() => {
    LoadSaves();
  }, []);

  // Load All Saves
  const LoadSaves = async () => {
    try {
      const keys = await AsyncData.GetAll('Game');
      setSavedGames(keys);
    } catch (error) {
      Alert.alert('Error', 'Failed to load saved games.');
      console.error('Error loading saved games:', error);
    }
  };

  // Load Save
  const LoadSave = async (saveName) => {
  try {
    const gameState = await AsyncData.Load(saveName);
    console.log('Loaded gameState:', gameState);
    if (gameState) {
      console.log('Navigating with:', gameState);
      navigation.navigate('Home', { loadedBoard: gameState });
    } else {
      Alert.alert('Error', 'Failed to load game.');
    }
  } catch (error) {
    Alert.alert('Error', 'Failed to load game.');
    console.error('Error loading game:', error);
  }
};

  // Delete Save
  const DeleteSave = async (saveName) => {
    try {
      await AsyncData.Remove(saveName);
      LoadSaves(); 
    } catch (error) {
      Alert.alert('Error', 'Failed to delete game.');
      console.error('Error deleting game:', error);
    }
  };

  /// Render
  return (
    <SafeAreaView style={[Layout.Full, Theme.Background]}>
      <View style={[Layout.Full, Theme.Content]}>
        <Title title='Saved Games' />
        <FlatList
          style={[Layout.Content, Layout.Margin.Top, Layout.Padding]}
          data={savedGames}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: 5 }}>
              <Text>{item}</Text>
              <View style = {Layout.Row}>
                <TButton title="Load" onPress={() => LoadSave(item)} />
                <TButton title="Delete" onPress={() => DeleteSave(item)} />
              </View>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={[Layout.Bottom, Layout.Center]}>
        <TButton title='Back'onPress={() => navigation.goBack()}/>
      </View>
    </SafeAreaView>
  );
};

// Export
export default Load;
