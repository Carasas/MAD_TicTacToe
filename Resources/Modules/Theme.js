// Import
import { StyleSheet } from 'react-native';

// Theme
const Theme =  StyleSheet.create({
    Background: { backgroundColor: '#f8f8f8' },
    Contents: { backgroundColor: '#ffffff' },
    Text: { color: '#242424', textAlign: 'justify',},
    Title: {
      color: '#03A9F4',
      fontSize: 24,
      fontWeight: 'bold',
    },
    Area: { backgroundColor: '#ADD8E6', },
    Button: { backgroundColor: '#03A9F4', borderRadius: 20, padding: 20, fontSize: 18 },
    ButtonText: { color: '#ffffff', fontWeight: 'bold', },
    CellEmpty: { backgroundColor: '#D5D6D6', },
    CellFull: { backgroundColor: '#4FC3F7', },
    CellText: { color: '#ffffff' },
});

// Layout
const Layout = StyleSheet.create({
  Content: {
    flex: 1,
    padding: 16,
    borderRadius: 20,
  },
  Horizontal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 50, 
  },
  Center: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 50, 
  },
  Area: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 20,
    padding: 25,
  },
  Top: {
    position: 'absolute',
    top: 25,
  },
  Bottom: {
    position: 'absolute',
    bottom: 25,
  },
  Full: { flex: 1, width: '100%', height: '100%' },
  Cell: {
    borderRadius: 20, 
    width: 50,
    height: 50,
    padding: 20, 
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Board: { 
    flex: 1, 
    flexDirection: 'column',
    width: '100%', 
    height: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: { flexDirection: 'row', },
});

// Export
export { Layout, Theme };