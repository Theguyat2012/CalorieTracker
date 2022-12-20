import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';

import AddCaloriesButton from "./AddCaloriesButton";
import AddCaloriesModal from "./AddCaloriesModal";
import AddedCalories from "./AddedCalories";


const Calories = (props) => {
    const [visible, setVisible] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [type, setType] =  useState(null);
    const [items, setItems] = useState([
      {label: 'Consumed', value: 'Consumed'},
      {label: 'Burned', value: 'Burned'}
    ]);

    return (
        <>
            <View style={styles.calories}>
                <AddCaloriesButton title='Consumed' open={() => setVisible(true)} />
                <AddedCalories />
                <AddCaloriesButton title='Burned' open={() => setVisible(true)} />
            </View>
            <AddCaloriesModal visible={visible} openType={openType} setOpenType={setOpenType} type={type} setType={setType} items={items} setItems={setItems} close={() => setVisible(false)} />
        </>
    );
}

const styles = StyleSheet.create({
    calories: {
        alignItems: 'center',
    },
});

export default Calories;