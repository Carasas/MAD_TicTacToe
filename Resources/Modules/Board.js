// Import
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Library
import { Layout, Theme } from '../Modules/Theme.js';
import TButton from '../Modules/TButton.js';

// Board
function Board({ board: initialBoard, xSize = 3, ySize = 3, onWin = () => {}, onReset = () => {}, onChange = () => {} }) {

  // States
  const [currentBoard, setCurrentBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [winner, setWinner] = useState(null);

  // Set Initial Board
  useEffect(() => {
    setCurrentBoard(initialBoard);
  }, [initialBoard]);

  // Check Winner
  const Winner = (player, currentBoard) => {

    // Size
    const size = currentBoard.length;

    // Check Rows
    for (let row = 0; row < size; row++) {
      if (currentBoard[row].every(cell => cell === player)) {
        return player;
      }
    }

    // Check Columns
    for (let col = 0; col < size; col++) {
      if (currentBoard.every(row => row[col] === player)) {
        return player;
      }
    }

    // Diagonals (top-left to bottom-right)
    if (currentBoard.every((row, index) => row[index] === player)) {
      return player;
    }

    // Diagonal (top-right to bottom-left)
    if (currentBoard.every((row, index) => row[size - 1 - index] === player)) {
      return player;
    }

    // No Winner
    return null; 
  };

  // Full Condition
  const isBoardFull = (currentBoard) => {
    return currentBoard.every(row => row.every(cell => cell !== null));
  };

  // On Press
  const onPress = (row, col) => {

    // Check Current Slot
    if (!currentBoard[row][col] && !winner) {

      // Generate Board
      const newBoard = currentBoard.map((r, i) =>
        i === row ? r.map((cell, j) => (j === col ? currentPlayer : cell)) : r
      );

      // Check Winner
      const win = Winner(currentPlayer, newBoard); 

      // Update Board
      setCurrentBoard(newBoard);
      setWinner(win);

      // Winner
      if (win) {
        onWin(win);
      } 
      // Draw
      else if (isBoardFull(newBoard)) {
        onWin('Draw');
      }

      // Next Player
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);

      // Call OnChange
      onChange(newBoard, nextPlayer, win); 

    }
  };

  // Reset Game
  const ResetGame = () => {
    const resetBoard = Array(ySize).fill().map(() => Array(xSize).fill(null));
    setCurrentBoard(resetBoard);
    setCurrentPlayer('X');
    setWinner(null);
    onReset();
    onChange(resetBoard, 'X', null);
  };

  // Cell
  const Cell = (row, col) => (
    <TouchableOpacity
      style={[Layout.Cell, Theme.CellEmpty, currentBoard[row][col] && Theme.CellFull]}
      onPress={() => {
        onPress(row, col);
      }}
      key={`${row}-${col}`}
    >
      <Text style={Theme.CellText}>{currentBoard[row][col]}</Text>
    </TouchableOpacity>
  );

  // Dynamic Grid
  const Grid = () => {
    let rows = [];
    for (let row = 0; row < ySize; row++) {
      let cells = [];
      for (let col = 0; col < xSize; col++) {
        cells.push(Cell(row, col));
      }
      rows.push(
        <View style={Layout.Row} key={row}>
          {cells}
        </View>
      );
    }
    return rows;
  };

  // Render
  return (
    <View style={Layout.Board}>
      {winner ? (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            {winner === 'Draw' ? 'Draw' : `Winner: ${winner}`}
          </Text>
          <TButton title='Reset' onPress={ResetGame} style={Theme.Button} />
        </View>
      ) : (
        <View>{Grid()}</View>
      )}
    </View>
  );
}

// Export
export default Board;
