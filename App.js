// React Native
import { ScrollView } from 'react-native';

// Components
import AppBar from './components/AppBar';
import Main from './components/Main';

export default function App() {
  return (
      <ScrollView>
        <AppBar />
        <Main />
      </ScrollView>
  );
}
