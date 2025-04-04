
// Import
import AsyncStorage from '@react-native-async-storage/async-storage';

// Async Data
const AsyncData = {

  // Save Data
  Save: async (key, data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error('Error Saving Data:', e);
    }
  },

  // Load Data
  Load: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error Loading Data:', e);
      return null;
    }
  },

  // Remove Specific Data
   Get: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error Getting Data:', e);
      return null;
    }
  },

  // Get All Data
  GetAll: async (keySubstring = null) => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();

      if (keySubstring) {
        return allKeys.filter(key => key.includes(keySubstring));
      } else {
        return allKeys;
      }
    } catch (e) {
      console.error('Error Getting Data:', e);
      return [];
    }
  },

  // Remove Specific Data
  Remove: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('Error Removing Data:', e);
    }
  },

  // Remove All Data
  RemoveAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Error Removing All Data:', e);
    }
  },

};

// Export
export default AsyncData;
