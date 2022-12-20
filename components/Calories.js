import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';

import AddCaloriesButton from "./AddCaloriesButton";
import AddCaloriesModal from "./AddCaloriesModal";
import AddedCalories from "./AddedCalories";


const Calories = () => {
    const [visible, setVisible] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [type, setType] =  useState(null);
    const [items, setItems] = useState([
      {label: 'Consumed', value: 'Consumed'},
      {label: 'Burned', value: 'Burned'}
    ]);
    const [added, setAdded] = useState([]);

    return (
        <>
            <View style={styles.calories}>
                <AddCaloriesButton title='Consumed'open={() => {setVisible(true), setType('Consumed')}} />
                {renderCalories(added, 'Consumed')}
                <AddCaloriesButton title='Burned' open={() => {setVisible(true), setType('Burned')}} />
                {renderCalories(added, 'Burned')}
            </View>
            <AddCaloriesModal
                visible={visible}
                openType={openType}
                setOpenType={setOpenType}
                type={type} setType={setType}
                items={items}
                setItems={setItems}
                close={() => setVisible(false)}
                added={added}
                setAdded={setAdded}
            />
        </>
    );
}

const renderCalories = (added, type) => {
    return (
        <>
            {added.map((element, index) => element[0] === type ? <AddedCalories key={index} title={element[1]} calories={element[2]}/> : null)}
        </>
    );
}

const styles = StyleSheet.create({
    calories: {
        alignItems: 'center',
    },
});

export default Calories;