
// Import
import React, { useRef, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Animated, Dimensions } from 'react-native';

// Liobrary
import { Layout, Theme } from '../Modules/Theme.js';
import Message from '../Modules/Message.js';
import TButton from '../Modules/TButton.js';
import Title from '../Modules/Title.js';

// Home
const Credits = ({ navigation }) => {

  // Render
  return (
    <SafeAreaView style={[Layout.Full, Theme.Background]}>
      <View style={[Layout.Full, Theme.Contents]}>
        <Title title='Credits' />
        <Message message='Developed by Liam Hotinski (s5354774). Tic Tac Toe copyright © 2025. All Rights Reserved. Created as part of Mobile Applications Development (MAD) at Griffith University.' />
        <View style={[Layout.Bottom, Layout.Center]}>
          <TButton title="Back" onPress={() => navigation.goBack()}/>
        </View>
      </View>
    </SafeAreaView>
  );
  
};

// Export
export default Credits;