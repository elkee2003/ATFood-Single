import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
RootNavigator
// import { Amplify } from 'aws-amplify';
// import amplifyconfig from './src/amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);

const App = () => {
  return (
  <NavigationContainer>
    <RootNavigator/>
    <StatusBar style="light" />
  </NavigationContainer>
    
  );
}

export default App;