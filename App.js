// React
import { useEffect, useState } from 'react';

// React Native
import { ScrollView, Text } from 'react-native';

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import AppBar from './components/AppBar';
import Title from './components/Title';
import Equation from './components/Equation';
import Calories from './components/Calories';
import CalorieInput from './components/CalorieInput';

// Objects
import CalorieObject from './objects/CalorieObject';

// Async Keys
const limitKey = 'limit';
const addedKey = 'added';

export default function App() {
  // Async Storage
  const [limit, setLimit] = useState(0);
  const [added, setAdded] = useState([]);

  useEffect(() => {
      getData(limitKey, 0).then((data) => setLimit(data));
      getData(addedKey, []).then((data) => setAdded(data));
  }, []);

  // Add Calories
  const [input, setInput] = useState(null);
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [servings, setServings] = useState('');
  const [caloriesPerServing, setCaloriesPerServing] = useState('');
  const [openType, setOpenType] = useState(false);
  const [items, setItems] = useState([
    {label: 'Consumed', value: 'Consumed'},
    {label: 'Burned', value: 'Burned'}
  ]);

  // Edit Calories
  const [editMode, setEditMode] = useState(false);
  const [index, setIndex] = useState(null);

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

  // Limit Manipulation
  const setNewLimit = (value) => {
    setLimit(value);
    setData(limitKey, value);
  }

  // Calorie Manipulation
  const addCalorie = (type, title, servings, caloriesPerServing) => {
    const newCalorie = new CalorieObject(type, title, servings, caloriesPerServing);
    setAdded(added.concat(newCalorie));
    setData(addedKey, added.concat(newCalorie));
  }

  const editCalorie = (index, type, title, servings, caloriesPerServing) => {
    const editedCalorie = new CalorieObject(type, title, servings, caloriesPerServing);
    let array = [];

    for (let i=0; i<added.length; i++) {
      if (i != index) {
        array.push(added[i]);
      } else {
        array.push(editedCalorie);
      }
    }

    setAdded(array);
    setData(addedKey, array);
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
      {input ?
        input === 'Limit' ?
          <Text>Limit</Text>
          :
          <CalorieInput
            setInput={setInput}
            addCalorie={addCalorie}
            editCalorie={editCalorie}
            editMode={editMode}
            index={index}
            openType={openType}
            setOpenType={setOpenType}
            type={type}
            setType={setType}
            items={items}
            setItems={setItems}
            title={title}
            servings={servings}
            caloriesPerServing={caloriesPerServing}
          />
        :
        <ScrollView>
          <Calories
            added={added}
            setEditMode={setEditMode}
            removeCalorie={removeCalorie}
            setIndex={setIndex}
            setInput={setInput}
            setType={setType}
            setTitle={setTitle}
            setServings={setServings}
            setCaloriesPerServing={setCaloriesPerServing}
          />
        </ScrollView>
      }
    </>
  );
}
