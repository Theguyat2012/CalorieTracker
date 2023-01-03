// React
import { useEffect, useState } from 'react';

// React Native
import { ScrollView } from 'react-native';

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import AppBar from './components/AppBar';
import Title from './components/Title';
import Equation from './components/Equation';
import Calories from './components/Calories';

// Async Keys
const limitKey = 'limit';
const addedKey = 'added';

export default function App() {
  const [limit, setLimit] = useState(0);
  const [added, setAdded] = useState([]);

  useEffect(() => {
      getData(limitKey, 0).then((data) => setLimit(data));
      getData(addedKey, []).then((data) => setAdded(data));
  }, []);

  // Async Data Manipulation
  const getData = async (key, defaultValue) => {
      try {
          const jsonValue = await AsyncStorage.getItem(key);
          return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
      } catch(e) {
          console.log(e);
          return defaultValue;
      }
  }

  const setData = async (key, value) => {
      try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
      } catch(e) {
          console.log(e);
      }
  }

  // Calorie Object Manipulation
  const addCalorie = (type, title, calories) => {
    setAdded(added.concat([[type, title, parseInt(calories)]]));
    setData(addedKey, added.concat([[type, title, parseInt(calories)]]));
  }

  const removeCalorie = (index) => {
    let array = [];

    for (let i=0; i<added.length; i++) {
        if (i != index) {
            array.push(added[i]);
        }
    }

    setAdded(array);
    setData(addedKey, array);
  }

  return (
    <>
      <AppBar />
      <Title />
      <Equation limit={limit} added={added} />
      <ScrollView>
        <Calories
          added={added}
          addCalorie={addCalorie}
          removeCalorie={removeCalorie}
          limitKey={limitKey}
          limit={limit}
          setLimit={setLimit}
        />
      </ScrollView>
    </>
  );
}
