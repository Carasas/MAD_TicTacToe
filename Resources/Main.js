
// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Home from './Pages/Home.js';
import Rules from './Pages/Rules.js';
import Credits from './Pages/Credits.js';

const screens = [
  { name:'Home', component: Home },
  { name:'Rules', component: Rules },
  { name:'Credits', component: Credits },
];

// Application
function Main() {

  // Navigation
  let Stack = createStackNavigator();

  // Render
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true, animationTypeForReplace: 'pop' }}>
        {screens.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );

}

// Export
export default Main;