// React Native
import { ScrollView, View } from 'react-native';

// Components
import AppBar from './components/AppBar';
import Equation from './components/Equation';

export default function App() {
  return (
      <ScrollView>
        <AppBar />
        <Equation />
      </ScrollView>
  );
}
