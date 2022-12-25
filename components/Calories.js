import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import AddCaloriesButton from "./AddCaloriesButton";
import AddCaloriesModal from "./AddCaloriesModal";
import AddedCalories from "./AddedCalories";
import SetLimitModal from "./SetLimitModal";


const Calories = (props) => {
    const [visibleLimit, setVisibleLimt] = useState(false);
    const [visibleAddCalories, setVisibleAddCalories] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [type, setType] =  useState(null);
    const [items, setItems] = useState([
      {label: 'Consumed', value: 'Consumed'},
      {label: 'Burned', value: 'Burned'}
    ]);

    return (
        <>
            <View style={styles.calories}>
                <AddCaloriesButton title='Set Limit' size='40%' color='#3399FF' open={() => setVisibleLimt()} />
                <AddCaloriesButton title='Consumed' size='40%' color='white' open={() => {setVisibleAddCalories(true), setType('Consumed')}} />
                {renderCalories(props.added, props.setAdded, 'Consumed', addedKey=props.addedKey, setData=props.setData)}
                <AddCaloriesButton title='Burned' size='40%' color='white' open={() => {setVisibleAddCalories(true), setType('Burned')}} />
                {renderCalories(props.added, props.setAdded, 'Burned', addedKey=props.addedKey, setData=props.setData)}
            </View>
            <AddCaloriesModal
                visible={visibleAddCalories}
                openType={openType}
                setOpenType={setOpenType}
                type={type} setType={setType}
                items={items}
                setItems={setItems}
                close={() => setVisibleAddCalories(false)}
                added={props.added}
                setAdded={props.setAdded}
                addedKey={props.addedKey}
                setData={props.setData}
            />
            <SetLimitModal
                visible={visibleLimit}
                close={() => setVisibleLimt(false)}
                limit={props.limit}
                setLimit={props.setLimit}
                limitKey={props.limitKey}
                setData={props.setData}
            />
        </>
    );
}

const renderCalories = (added, setAdded, type, addedKey, setData) => {
    return (
        <>
            {added.map((element, index) => element[0] === type ? <AddedCalories key={index} index={index} title={element[1]} calories={element[2]} added={added} setAdded={setAdded} addedKey={addedKey} setData={setData} /> : null)}
        </>
    );
}

const styles = StyleSheet.create({
    calories: {
        alignItems: 'center',
    },
    bigWrap: {
        backgroundColor: 'yellow',
        width: '98%',
    },
});

export default Calories;
