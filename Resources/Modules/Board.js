// Import
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// Library
import { Layout, Theme } from '../Modules/Theme.js';
import TButton from '../Modules/TButton.js';

// Board
function Board({ xSize = 3, ySize = 3, onWin = () => {}, onReset = () => {} }) {

    // Board State
    const [board, setBoard] = useState(Array(ySize).fill().map(() => Array(xSize).fill(null)));
    
    // Player (X or O)
    const [currentPlayer, setCurrentPlayer] = useState("X");

    // Winner
    const [winner, setWinner] = useState(null);

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

      // Check Empty Cell
      if (!board[row][col] && !winner) {

        // Map Current Player
        const newBoard = board.map((r, i) => 
          i === row ? r.map((cell, j) => (j === col ? currentPlayer : cell)) : r
        );
        
        // Update Board
        setBoard(newBoard);

        // Check Winner
        const win = Winner(currentPlayer, newBoard);

        // Winner
        if (win) {
          setWinner(win);
          onWin(win); 
        } 
        // Draw
        else if (isBoardFull(newBoard)) {
          setWinner('Draw');
          onWin('Draw');
        } 
        // Toggle Player
        else {
          setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
      }
    };

    // Reset Game
    const ResetGame = () => {
      setBoard(Array(ySize).fill().map(() => Array(xSize).fill(null)));
      setCurrentPlayer("X");
      setWinner(null);
      onReset();
    };

    // Cell
    const Cell = (row, col) => (
      <TouchableOpacity
        style={[Layout.Cell, Theme.CellEmpty, board[row][col] && Theme.CellFull]}
        onPress={() => { onPress(row, col); }}
        key={`${row}-${col}`}
      >
        <Text style={Theme.CellText}>{board[row][col]}</Text>
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