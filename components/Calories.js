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
                <AddCaloriesButton title='Consumed' open={() => {setVisible(true), setType('Consumed')}} />
                {renderCalories(props.added, 'Consumed')}
                <AddCaloriesButton title='Burned' open={() => {setVisible(true), setType('Burned')}} />
                {renderCalories(props.added, 'Burned')}
            </View>
            <AddCaloriesModal
                visible={visible}
                openType={openType}
                setOpenType={setOpenType}
                type={type} setType={setType}
                items={items}
                setItems={setItems}
                close={() => setVisible(false)}
                added={props.added}
                setAdded={props.setAdded}
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