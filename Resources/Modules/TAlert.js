
// Import
import { Alert} from 'react-native';

// TAlert
const TAlert = (title='Alert', prompt='Confirm Action?', accept, onAccept = () => {}, deny, onDeny = () => {}) => {
  Alert.alert(title, prompt, [
      {
        text: accept || 'Accept',
        onPress: () => {
          onAccept();
          console.log('Accept');
        },
      },
      {
        text: deny || 'Deny',
        onPress: () => {
          onDeny();
          console.log('Deny');
        },
        style: 'cancel',
      },
  ]);
};
  
// Export
export default TAlert;
