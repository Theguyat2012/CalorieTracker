// React
import { useEffect, useState } from 'react';

// React Native
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import AppBar from './components/AppBar';
import Title from './components/Title';
import Equation from './components/Equation';
import Calories from './components/Calories';
import CalorieInput from './components/CalorieInput';
import Navbar from './components/Navbar';
import Settings from './components/Settings'

// Objects
import CalorieObject from './objects/CalorieObject';
import LimitInput from './components/LimitInput';

// Async Keys
const limitKey = 'limit';
const addedKey = 'added';

// AdMob
import mobileAds, { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';

mobileAds()
  .initialize()

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

  // Main
  const [settings, setSettings] = useState(false);

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
    let array = [];

    added.map((element, index) => {
      element.id = index;
      array = array.concat(element);
    });

    const newCalorie = new CalorieObject(array.length, type, title, servings, caloriesPerServing);
    array = array.concat(newCalorie);

    setAdded(added.concat(newCalorie));
    setData(addedKey, added.concat(newCalorie));
  }

  const editCalorie = (index, type, title, servings, caloriesPerServing) => {
    const editedCalorie = new CalorieObject(index, type, title, servings, caloriesPerServing);
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
      <SafeAreaView>
        {/* <AppBar /> */}
        <Title />
      </SafeAreaView>
      <Equation limit={limit} added={added} />
      {
        input ?
        <View style={styles.containerInput}>
          {
            input === 'Limit' ?
            <LimitInput
              setInput={setInput}
              setOpenType={setOpenType}
              limit={limit}
              setNewLimit={setNewLimit}
            />
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
          }
        </View>
        :
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
            {
              !settings ?
              <>
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
              </>
              :
              <>
                <Settings
                  added={added}
                  setAdded={setAdded}
                  addedKey={addedKey}
                  setData={setData}
                  consumedLabel={items[0].label}
                  burnedLabel={items[1].label}
                />
              </>
            }
          </ScrollView>
          <Navbar setSettings={setSettings}/>
        </>
      }
    </>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    padding: 10,
  },
});
